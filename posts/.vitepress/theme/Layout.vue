<template>
  <Header />
  <aside />
  <main>
    <Banner />
    <Content class="content" />
  </main>
</template>

<script setup lang="ts">
import Header from './Header.vue'
import Banner from './Banner.vue'
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  font-size: 14px;
  overflow-x: hidden;

  --color-accent: #fe9600;
  --color-gray: #666;
  --color-bg: #eee;
}
* {
  box-sizing: border-box;
}
a {
  color: var(--color-accent);
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
