<template>
  <div class="banner">
    <div class="wave1"></div>
    <div class="wave2"></div>
    <div class="focus-info">
      <div class="social"></div>
      <GlitchText text="Hello, sakura" />
    </div>
  </div>
</template>

<script setup lang="ts">
import GlitchText from './GlitchText.vue'
</script>

<style scoped>
.banner {
  background-image: url(https://api.2heng.xin/cover/);
  background-size: cover;
  height: 100vh;
}
</style>

<style scoped>
.focus-info {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-block;
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
