<template>
  <div class="banner">
    <div class="wave1"></div>
    <div class="wave2"></div>
    <div class="info">
      <GlitchText text="Hello, sakura" />
      <span class="box">
        <p class="text">
          <i class="fa fa-quote-left"></i>
          {{ banner_text }}
          <i class="fa fa-quote-right"></i>
        </p>
        <div class="contact">
          <a :href="s.url" v-for="s in social">
            <i :class="['fab', s.icon]"></i>
          </a>
        </div>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import GlitchText from './GlitchText.vue'
const banner_text = 'You got to put the past behind you before you can move on.'
const social = [
  { icon: 'fa-github', url: '' },
  { icon: 'fa-twitter', url: '' },
  { icon: 'fa-weibo', url: '' },
  { icon: 'fa-qq', url: '' },
]
</script>

<style lang="scss">
.banner {
  background-image: url(https://api.2heng.xin/cover/);
  background-size: cover;
  position: relative;
  overflow: hidden;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .wave1,
  .wave2 {
    position: absolute;
    width: 400%;
    bottom: 0;
  }
  .wave1 {
    background: url(./assets/wave1.png) repeat-x;
    height: 65px;
  }
  .wave2 {
    background: url(./assets/wave2.png) repeat-x;
    height: 80px;
  }
  .info {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .box {
    display: inline-block;
    width: 600px;
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 16px;
    margin-top: 16px;
  }
  .text {
    text-align: center;
    font-size: 16px;
  }
  .contact {
    display: flex;
    justify-content: center;
    font-size: 24px;
    padding-bottom: 12px;
    a {
      color: white;
      margin: 6px;
    }
  }
}
</style>
