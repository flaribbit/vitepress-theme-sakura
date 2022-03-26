<template>
  <a href="#" class="totop" @click="toTop" :style="style" aria-label="to-top"></a>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
const hide = 'top: -900px'
const style = ref(hide)
const onScroll = () => {
  if (window.scrollY > 200) {
    if (window.innerWidth > 720) {
      style.value = `top: ${Math.min(window.innerHeight - 968, 0)}px`
    } else {
      style.value = `top: -640px`
    }
  } else {
    style.value = hide
  }
}
const toTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
onMounted(() => {
  window.addEventListener('scroll', onScroll)
  onScroll()
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style lang="scss">
@import "./base.scss";
.totop {
  position: fixed;
  width: 70px;
  height: 900px;
  right: 25px;
  z-index: 50;
  background-image: url($theme-base+"assets/scroll.png");
  transition: top 0.5s ease-in-out;
  animation: float 2s ease-in-out infinite;
}
@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
