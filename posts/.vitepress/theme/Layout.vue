<template>
  <link rel="stylesheet" :href="'https://fonts.googleapis.com/css?family=' + fonts" />
  <Header />
  <aside />
  <main>
    <Banner v-if="isIndex" />
    <BlogList v-if="isIndex" />
    <Article />
  </main>
</template>

<script setup lang="ts">
import Header from './Header.vue'
import Banner from './Banner.vue'
import Article from './Article.vue'
import BlogList from './BlogList.vue'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/css/regular.css'

import { computed } from 'vue'
import { useRoute } from 'vitepress'
const fonts = [
  "Noto Serif SC"
].map(encodeURIComponent).join("|")
const route = useRoute()
const isIndex = computed(() => route.path.replace(/index.html$/, '') === '/')

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
