<template>
  <div class="abanner">
    <div class="titlebox">
      <h1 class="title">{{ title }}</h1>
      <div class="info">{{ author }} · {{ date }} · {{ view }} 次阅读</div>
    </div>
  </div>
  <div class="article">
    <Content class="content" />
    <Waline />
  </div>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { onMounted, onUnmounted } from 'vue'
import Waline from './Waline.vue'

const data = useData()
const title = data.page.value.title
const author = 'flaribbit' //TODO
const date = '2022-01-01'
const view = 114514

const onScroll = throttleAndDebounce(setActiveLink, 300)
onMounted(() => {
  setActiveLink()
  window.addEventListener('scroll', onScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})

function setActiveLink(): void {
  const anchors = document.querySelectorAll<HTMLAnchorElement>('.header-anchor')
  for (let i = 0; i < anchors.length; i++) {
    const anchor = anchors[i]
    const nextAnchor = anchors[i + 1]
    const [isActive, hash] = isAnchorActive(i, anchor, nextAnchor)
    if (isActive) {
      history.replaceState(null, document.title, hash ? hash : ' ')
    }
  }
}

function isAnchorActive(index: number, anchor: HTMLAnchorElement, nextAnchor: HTMLAnchorElement): [boolean, string | null] {
  const scrollTop = window.scrollY
  if (index === 0 && scrollTop === 0) return [true, null]
  if (scrollTop < getAnchorTop(anchor)) return [false, null]
  if (!nextAnchor || scrollTop < getAnchorTop(nextAnchor)) return [true, decodeURIComponent(anchor.hash)]
  return [false, null]
}

function getAnchorTop(anchor: HTMLAnchorElement): number {
  const pageOffset = document.querySelector<HTMLElement>('header')!.offsetHeight
  return anchor.parentElement!.offsetTop - pageOffset + 400
}

function throttleAndDebounce(fn: () => void, delay: number): () => void {
  let timeout: number
  let called = false
  return () => {
    if (timeout) {
      clearTimeout(timeout)
    }
    if (!called) {
      fn()
      called = true
      setTimeout(() => {
        called = false
      }, delay)
    } else {
      timeout = setTimeout(fn, delay)
    }
  }
}
</script>

<style lang="scss">
.abanner {
  height: 400px;
  width: 100%;
  background-image: url(https://uploadfile.bizhizu.cn/up/17/f1/7b/17f17b19014c0e15f30bbaeda308bf06.jpg);
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
  max-width: 800px;
  margin: auto;
  .content {
    margin: 0.5em;
  }
}
.content {
  color: #02111d;
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
    line-height: 1.7em;
  }
}
@media (max-width: 720px) {
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
    background-color: #ffe5644d;
    .custom-block-title {
      color: #b29400;
    }
  }
  &.danger {
    border-color: #c00;
    color: #4d0000;
    background-color: #ffe6e6;
    .custom-block-title {
      color: #900;
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
@import "./code.css";
div[class*="language-"] {
  position: relative;
  line-height: var(--code-line-height);
  font-size: var(--code-font-size);
  font-family: var(--code-font-family);
  padding-top: 32px;
  margin: 1em 0;
  background-color: #f6f8fa;
  border-radius: 8px;
  border: 1px solid var(--color-border);
  overflow: hidden;
  pre {
    border-top: 1px solid var(--color-border);
    padding-left: 3em;
    margin: 0;
    // background-color: #f3f4f4;
    background-color: white;
    overflow: scroll;
    &:before {
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
  &:before {
    position: absolute;
    top: 4px;
    width: 100%;
    text-align: center;
    font-size: 1em;
    color: var(--color-gray);
  }
  code {
    padding: 0;
    background-color: transparent;
  }
}
.line-numbers-wrapper {
  position: absolute;
  left: 0;
  top: 32px;
  width: 3em;
  text-align: center;
  color: #888;
  background-color: white;
  border-top: 1px solid var(--color-border);
  user-select: none;
}
</style>
