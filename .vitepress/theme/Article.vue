<template>
  <div class="abanner" :style="cover" v-if="index >= 0">
    <div class="titlebox">
      <h1 class="title">{{ title }}</h1>
      <div class="info">{{ author }} · 更新于 {{ date }} · {{ view }} 次阅读</div>
    </div>
  </div>
  <div class="article">
    <Content class="content" />
    <div class="content nav">
      <span>
        <a :href="nav[0].href" v-if="nav[0].show">
          <i class="fa fa-angle-left"></i>
          {{ nav[0].text }}
        </a>
      </span>
      <span>
        <a :href="nav[1].href" v-if="nav[1].show">
          {{ nav[1].text }}
          <i class="fa fa-angle-right"></i>
        </a>
      </span>
    </div>
    <Waline v-if="index != -1" ref="waline" />
    <TOC :data="data.page.value.headers" :active="active" />
  </div>
</template>

<script lang="ts">
declare const renderMathInElement: any;
declare const katex: any;
</script>

<script setup lang="ts">
import { useData, useRoute } from 'vitepress'
import { onMounted, onUnmounted, ref, reactive, watch, nextTick } from 'vue'
import { data as posts } from '../posts.data'
import { throttleAndDebounce } from './utils'
import Waline from './Waline.vue'
import TOC from './TOC.vue'

const data = useData()
const base = data.site.value.base
const route = useRoute()
const title = ref('')
const author = data.theme.value.name
const date = ref('')
const view = ref(0)
const cover = ref('')
const active = ref(0)
const waline = ref<InstanceType<typeof Waline>>()
const nav = reactive([
  { href: '', text: '', show: true },
  { href: '', text: '', show: true },
])

const index = ref(0)
const update = () => {
  index.value = posts.findIndex(p => p.href == route.path.replace(base, ''))
  if (index.value == -1) return
  title.value = data.page.value.title
  cover.value = `background-image: url(${data.page.value.frontmatter.cover || data.theme.value.cover})`
  date.value = new Date(data.page.value.lastUpdated || posts[index.value].create).toLocaleDateString('sv-SE')
  waline.value?.update()
  let ival = index.value
  if (ival - 1 >= 0) {
    nav[0].href = base + posts[ival - 1].href
    nav[0].text = posts[ival - 1].title
    nav[0].show = true
  } else {
    nav[0].show = false
  }
  if (ival + 1 < posts.length) {
    nav[1].href = base + posts[ival + 1].href
    nav[1].text = posts[ival + 1].title
    nav[1].show = true
  } else {
    nav[1].show = false
  }
  // web only, not support in SSR
  if (typeof window !== 'undefined') {
    nextTick().then(() => {
      updateKatex()
    })
  }
}
update()
watch(route, update)

const setActiveLink = () => {
  const headers = data.page.value.headers
  if (headers.length == 0) return
  for (let i = 0; i < headers.length; i++) {
    const el = document.getElementById(headers[i].slug)
    const rect = el?.getBoundingClientRect()!
    if (rect.top > 200) {
      let hash = ' '
      if (i > 0) {
        active.value = i - 1
        hash = '#' + headers[i - 1].slug
      }
      history.replaceState(null, document.title, hash)
      return
    }
  }
  active.value = headers.length - 1
  history.replaceState(null, document.title, '#' + headers[headers.length - 1].slug)
}
const onScroll = throttleAndDebounce(setActiveLink, 300)
const updateKatex = () => {
  if (typeof renderMathInElement === 'undefined') return
  const el = document.querySelector('.article .content')
  if (!el) return
  renderMathInElement(el, {
    delimiters: [
      { left: '$$', right: '$$', display: true },
      { left: '$', right: '$', display: false },
    ],
  })
}
onMounted(() => {
  setActiveLink()
  window.addEventListener('scroll', onScroll)
  if (import.meta.env.DEV) {
    let el = document.querySelector<HTMLScriptElement>('script[src*="auto-render"]')
    if (el) el.onload = () => updateKatex()
  }
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})

</script>

<style lang="scss">
.abanner {
  height: 400px;
  width: 100%;
  background-size: cover;
  background-position: center center;
  margin-top: 64px;
  position: relative;

  .titlebox {
    position: absolute;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    bottom: 20px;
    text-shadow: 2px 2px 10px black;
    color: white;
  }

  .title {
    font-size: 32px;
  }

  .info {
    font-size: 14px;
  }
}

.article {
  position: relative;
  max-width: 800px;
  margin: auto;

  .content {
    margin: 0.5em;
  }

  .nav {
    display: flex;
    justify-content: space-between;
  }
}

.content {
  color: var(--color-text);

  a {
    color: #e58700;
    position: relative;
    transition: color 0.2s ease-out;

    &.header-anchor {
      float: left;
      margin-top: 0.125em;
      margin-left: -0.87em;
      padding-right: 0.23em;
      font-size: 0.85em;
      opacity: 0;
    }

    &:hover {
      color: var(--color-accent);

      &:after {
        transform: scaleX(1);
        transform-origin: left;
      }
    }

    &:after {
      content: "";
      position: absolute;
      transform: scaleX(0);
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: var(--color-accent);
      transition: transform 0.2s ease-out;
      transform-origin: right;
    }
  }

  @for $i from 1 through 6 {
    h#{$i}:hover .header-anchor {
      opacity: 1;
    }
  }

  h2 {
    padding-bottom: 0.3em;
    margin-bottom: 1em;
    border-bottom: 1px dashed var(--color-border);
  }

  p {
    line-height: 1.5em;
  }

  li {
    margin-block-end: 0.3em;
  }
}

.katex-display {
  overflow: auto hidden;
}

@media (max-width: 800px) {
  .abanner {
    height: 200px;

    .titlebox {
      margin-left: 0.5em;
    }
  }
}

.custom-block {

  &.tip,
  &.info,
  &.warning,
  &.danger {
    margin: 1rem 0;
    border-left: 0.5rem solid;
    padding: 0.1rem 1.5rem;
    overflow-x: auto;
  }

  &.tip {
    background-color: #f3f5f7;
    border-color: #3eaf7c;
  }

  &.info {
    background-color: #f3f5f7;
    border-color: #476582;
  }

  &.warning {
    border-color: #e7c000;
    color: #6b5900;
    background-color: #fff7d0;

    .custom-block-title {
      color: #b29400;
    }
  }

  &.danger {
    border-color: #c00;
    color: #4d0000;
    background-color: #ffe6e6;

    .custom-block-title {
      color: #900000;
    }
  }
}

.custom-block-title {
  font-weight: bold;
}

// inline code
code {
  font-size: var(--code-font-size);
  border-radius: 4px;
  padding: 0.2em 0.4em;
  background-color: rgba(27, 31, 35, 0.05);
}

html {
  --vp-icon-copy: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' height='20' width='20' stroke='rgba(128,128,128,1)' stroke-width='2' viewBox='0 0 24 24'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2'/%3E%3C/svg%3E");
  --vp-icon-copied: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' height='20' width='20' stroke='rgba(128,128,128,1)' stroke-width='2' viewBox='0 0 24 24'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-6 9 2 2 4-4'/%3E%3C/svg%3E");
}

div[class*="language-"] {
  position: relative;
  line-height: var(--code-line-height);
  font-size: var(--code-font-size);
  font-family: var(--code-font-family);
  display: flex;
  flex-direction: row-reverse;
  border-radius: 8px;
  border: 1px solid var(--color-border);
  padding-top: 32px;
  overflow: hidden;

  button.copy {
    position: absolute;
    top: 8px;
    right: 8px;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background-color: white;
    background-image: var(--vp-icon-copy);
    background-repeat: no-repeat;
    background-position: 50%;
    border-radius: 4px;
    opacity: 0;
    border: 1px solid var(--color-border);
  }

  &:hover button.copy {
    opacity: 1;
  }

  .lang {
    position: absolute;
    transform: translate(-50%, -28px);
    left: 50%;
    user-select: none;
  }

  pre {
    margin: 0;
    margin-left: 16px;
    flex-grow: 1;
    overflow: scroll;
  }

  code {
    background-color: transparent;
    padding: 0;
  }

  &:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 32px;
    background: #f6f8fa;
    border-bottom: 1px solid var(--color-border);
  }

  &:after {
    content: "";
    position: absolute;
    top: 10px;
    left: 12px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #fc625d;
    box-shadow: 20px 0 #fdbc40, 40px 0 #35cd4b;
  }
}

.line-numbers-wrapper {
  padding-left: 16px;
  color: var(--color-gray);
  user-select: none;
}
</style>
