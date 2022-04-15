<template>
  <div class="toc">
    <ol>
      <li v-for="(h, i) in data" :class="['h' + h.level, { 'active': active === i }]">
        <a :href="'#' + h.slug">{{ h.title }}</a>
      </li>
    </ol>
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
.toc {
  position: absolute;
  top: 0;
  right: -240px;
  height: 100%;
  width: 240px;

  ol {
    position: sticky;
    top: 80px;
    list-style: none;
    padding-inline-start: 0;
  }

  li {
    border-left: 2px solid var(--color-background);

    a {
      display: block;
      color: var(--color-text);
      padding-bottom: 0.2em;
    }

    &.active {
      border-left-color: var(--color-accent);
      font-weight: bold;
    }
  }

  .h2 {
    padding-left: 8px;
  }

  .h3 {
    padding-left: 16px;
  }

  .h4 {
    padding-left: 24px;
  }
}

@media (max-width: 1280px) {
  .toc {
    display: none;
  }
}
</style>
