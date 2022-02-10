<template>
  <a href="#" class="totop" @click="toTop" :style="style"></a>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
const style = ref('')
const onScroll = () => {
  if (window.scrollY > 200) {
    style.value = `top: ${window.innerHeight - 968}px`
  } else {
    style.value = "top: -900px"
  }
}
const toTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
onScroll()
onMounted(() => {
  window.addEventListener('scroll', onScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style lang="scss">
.totop {
  position: fixed;
  width: 70px;
  height: 900px;
  right: 25px;
  z-index: 50;
  background-image: url(./assets/scroll.png);
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
