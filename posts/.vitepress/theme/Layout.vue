<template>
  <Header />
  <aside />
  <main>
    <Content class="content" />
  </main>
</template>

<script setup>
import Header from './Header.vue'
</script>

<style>
body {
  margin: 0;
  padding: 0;

  --color-accent: #e67474;
  --color-gray: #666;
}
a {
  color: var(--color-accent);
  text-decoration: none;
}
</style>
