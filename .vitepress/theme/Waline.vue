<template>
  <div id="waline"></div>
</template>

<script lang="ts">
declare const Waline: any;
</script>

<script setup lang="ts">
import { onMounted } from 'vue'
onMounted(() => {
  Waline({
    el: '#waline',
    serverURL: 'https://blog-waline-e7jqcxb9s-flaribbit.vercel.app/',
  })
})
</script>

<style lang="scss">
.v[data-class="v"] {
  label,
  .vinput,
  .veditor,
  .vbtn {
    font-family: var(--global-font);
    font-size: 14px !important;
  }
}
</style>
