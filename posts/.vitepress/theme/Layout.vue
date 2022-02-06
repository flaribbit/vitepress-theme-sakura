<template>
  <Header />
  <aside />
  <main>
    <div class="top">
      <div class="wave1"></div>
      <div class="wave2"></div>
      <div class="focus-info">
        <div class="glitch">Hello</div>
        <div class="social"></div>
      </div>
    </div>
    <Content class="content" />
  </main>
</template>

<script setup lang="ts">
import Header from './Header.vue'
</script>

<style scoped>
.glitch {
  font-size: 80px;
}
.focus-info {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-block;
}
.top {
  background-image: url(https://api.2heng.xin/cover/);
  background-size: cover;
  height: 100vh;
}
.wave1 {
  background: url(./assets/wave1.png) repeat-x;
  position: absolute;
  width: 400%;
  height: 65px;
  bottom: 0;
}
.wave2 {
  background: url(./assets/wave2.png) repeat-x;
  position: absolute;
  width: 400%;
  height: 80px;
  bottom: 0;
}
</style>

<style>
body {
  margin: 0;
  padding: 0;
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
