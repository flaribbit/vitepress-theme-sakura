<template>
  <div id="waline"></div>
</template>

<script lang="ts">
declare const Waline: any;
</script>

<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue'
import { useData } from 'vitepress'
import { addScript } from './utils'
let waline: any = null
onMounted(() => {
  const serverURL = useData().site.value.themeConfig.waline
  if (!serverURL) {
    console.log('未配置waline服务端地址')
    return
  }
  addScript('https://cdn.jsdelivr.net/npm/@waline/client@1.5.4/dist/Waline.min.js', () => {
    waline = Waline({
      el: '#waline',
      serverURL: serverURL,
    })
  })
})
onBeforeUnmount(() => {
  waline?.destroy()
})
const update = () => {
  waline?.update()
}
defineExpose({ update })
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
