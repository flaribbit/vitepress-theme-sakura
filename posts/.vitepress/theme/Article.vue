<template>
  <div class="abanner">
    <div class="titlebox">
      <h1 class="title">{{ title }}</h1>
      <div class="info">{{ author }} · {{ date }} · {{ view }} 次阅读</div>
    </div>
  </div>
  <Content class="content" />
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
const data = useData()
const title = data.page.value.title
const author = 'flaribbit' //TODO
const date = '2022-01-01'
const view = 114514
</script>

<style lang="scss">
.abanner {
  height: 400px;
  width: 100%;
  background-image: url(https://uploadfile.bizhizu.cn/up/17/f1/7b/17f17b19014c0e15f30bbaeda308bf06.jpg);
  background-size: cover;
  margin-top: 64px;
  position: relative;
  .titlebox {
    position: absolute;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    bottom: 20px;
    text-shadow: 2px 2px 10px black;
    color: white;
  }
  .title {
    font-size: 32px;
  }
  .info {
    font-size: 14px;
  }
}
.content {
  max-width: 800px;
  margin: auto;
  color: #02111d;
  hr {
    border: none;
    border-bottom: 1px dashed #ddd;
  }
  a {
    color: #e58700;
    position: relative;
    transition: color 0.2s ease-out;
    &.header-anchor {
      float: left;
      margin-top: 0.125em;
      margin-left: -0.87em;
      padding-right: 0.23em;
      font-size: 0.85em;
      opacity: 0;
    }
    &:hover {
      color: var(--color-accent);
      &:after {
        transform: scaleX(1);
        transform-origin: left;
      }
    }
    &:after {
      content: "";
      position: absolute;
      transform: scaleX(0);
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: var(--color-accent);
      transition: transform 0.2s ease-out;
      transform-origin: right;
    }
  }
  @for $i from 1 through 6 {
    h#{$i}:hover .header-anchor {
      opacity: 1;
    }
  }
}
</style>
