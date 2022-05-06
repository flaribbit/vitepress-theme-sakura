<template>
  <div class="tag">
    <div class="article">
      <a :class="['item', { 'active': active === tag }]" href="#" v-for="(_, tag) in tagData" @click="setTag(tag)">
        <span>{{ tag }}</span>
      </a>
    </div>
    <BlogList :posts="active ? tagData[active] : []" :click="setTag" />
  </div>
</template>

<script setup lang="ts">
import BlogList from './BlogList.vue'
import { data as posts, type PostData } from '../posts.data'
import { ref, onMounted } from 'vue'
const active = ref<string | null>(null)
const tagData: Record<string, PostData[]> = {}
const setTag = (tag: string) => {
  active.value = tag
  history.replaceState(null, document.title, '?q=' + tag)
}
for (const post of posts) {
  if (!post.tags) continue
  for (const tag of post.tags) {
    if (!tagData[tag]) tagData[tag] = []
    tagData[tag].push(post)
  }
}
onMounted(() => {
  active.value = new URLSearchParams(location.search).get('q')
})
</script>

<style lang="scss">
.tag {
  margin-top: 64px;

  .item {
    display: inline-block;
    padding: 6px 12px;
    margin: 4px;
    border-radius: 40px;
    color: var(--color-gray);
    border: 1px solid var(--color-border);
    transition: all 0.2s ease-out;

    &:hover,
    &.active {
      color: var(--color-accent);
      border-color: var(--color-accent);
    }
  }
}
</style>
