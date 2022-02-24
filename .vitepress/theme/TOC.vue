<template>
  <div class="toc-container">
    <div class="toc">
      <ol>
        <li v-for="h in props.data">
          <a :href="'#' + h.slug">{{ h.title }}</a>
        </li>
      </ol>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type Header } from 'vitepress'
import { PropType } from 'vue'
const props = defineProps({
  data: { type: Array as PropType<Header[]>, default: () => [] },
})
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
    list-style: none;
    padding-inline-start: 1em;
  }
  li {
    margin-bottom: 0.2em;
  }
}
</style>
