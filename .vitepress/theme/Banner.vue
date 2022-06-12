<template>
  <div class="banner" :style="`background-image: url(${cover})`">
    <div class="wave1"></div>
    <div class="wave2"></div>
    <div class="info">
      <GlitchText :text="hello" />
      <span class="box">
        <p class="text">
          <i class="fa fa-quote-left"></i>
          {{ motto }}
          <i class="fa fa-quote-right"></i>
        </p>
        <div class="contact">
          <a :href="s.url" v-for="s in social" aria-label="icon" target="_blank">
            <i :class="['fab', s.icon]"></i>
          </a>
        </div>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import GlitchText from './GlitchText.vue'
const themeConfig = useData().theme.value
const hello = themeConfig.hello || 'Hello, sakura'
const motto = themeConfig.motto || 'You got to put the past behind you before you can move on.'
const social = themeConfig.social || []
const cover = themeConfig.cover
</script>

<style lang="scss">
@import "./base.scss";

.banner {
  background-size: cover;
  background-position: center center;
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
    background: url($theme-base+"assets/wave1.png") repeat-x;
    height: 65px;
    animation: wave-animation-1 30s infinite linear;
  }

  .wave2 {
    background: url($theme-base+"assets/wave2.png") repeat-x;
    height: 80px;
    animation: wave-animation-2 20s infinite linear;
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
    line-height: 24px;
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

@media (max-width: 720px) {
  .banner {
    .info {
      margin: 0 0.5em;
    }

    .box {
      width: 100%;
    }

    .text {
      margin: 1em 0.5em;
    }
  }
}

@keyframes wave-animation-1 {
  0% {
    left: 0;
  }

  100% {
    left: -997px;
  }
}

@keyframes wave-animation-2 {
  0% {
    left: 0;
  }

  100% {
    left: -1009px;
  }
}
</style>
