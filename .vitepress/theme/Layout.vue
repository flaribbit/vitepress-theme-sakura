<template>
  <Header />
  <aside />
  <main>
    <ToTop />
    <template v-if="isIndex">
      <Banner />
      <BlogList />
    </template>
    <Article v-else />
  </main>
</template>

<script setup lang="ts">
import Header from './Header.vue'
import Banner from './Banner.vue'
import Article from './Article.vue'
import BlogList from './BlogList.vue'
import ToTop from './ToTop.vue'
import { computed } from 'vue'
import { useRoute, useData } from 'vitepress'
const base = useData().site.value.base
const route = useRoute()
if (!route.path.startsWith(base)) route.path = base.slice(0, -1) + route.path // dirty fix for https://github.com/vuejs/vitepress/issues/446
const isIndex = computed(() => route.path.replace(/index.html$/, '') === base)

</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  font-family: var(--global-font);
  font-size: 16px;
  overflow-x: hidden;

  --global-font: "Noto Serif SC", "MicroSoft Yahei", serif;
  --color-accent: #fe9600;
  --color-gray: #666;
  --color-bg: #eee;
  --code-line-height: 24px;
  --code-font-family: monospace;
  --code-font-size: 16px;
}
* {
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background: var(--color-accent);
}
</style>
