<template>
  <div class="toc-container">
    <div class="toc">
      <ol>
        <li v-for="h, i in data" :class="'h' + h.level">
          <a :href="'#' + h.slug" :class="{ 'active': active == i }">{{ h.title }}</a>
        </li>
      </ol>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type Header } from 'vitepress'
const { data = [], active = 0 } = defineProps<{
  data: Header[]
  active: number
}>()
</script>

<style lang="scss">
// * {
//   border: 1px dashed red;
//   background-color: rgba(255, 0, 0, 0.05);
// }
.toc-container {
  position: absolute;
  top: 0;
  left: 800px;
  height: 100%;
}
.toc {
  position: sticky;
  top: 80px;
  width: 320px;
  ol {
    position: relative;
    list-style: none;
    padding-inline-start: 1em;
    overflow: hidden;
  }
  li {
    margin-bottom: 0.2em;
  }
  a {
    color: var(--color-text);
    &:before {
      content: "";
      background-color: var(--color-background);
      position: absolute;
      display: inline-block;
      left: 8px;
      width: 2px;
      height: 100%;
    }
    &.active {
      font-weight: bold;
      &:before {
        background-color: var(--color-accent);
      }
    }
  }
  .h3 {
    padding-left: 0.5em;
  }
  .h4 {
    padding-left: 1em;
  }
}
@media (max-width: 720px) {
  .toc-container {
    display: none;
  }
}
</style>
