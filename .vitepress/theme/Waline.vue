<template>
  <div id="waline"></div>
</template>

<script lang="ts">
declare const Waline: any;
</script>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useData } from 'vitepress'
onMounted(() => {
  const serverURL = useData().site.value.themeConfig.waline
  if (!serverURL) {
    console.error('未配置waline服务端地址')
    return
  }
  Waline({
    el: '#waline',
    serverURL: serverURL,
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
