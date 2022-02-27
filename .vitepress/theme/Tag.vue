<template>
  <div class="tag">
    <div class="article">
      <a
        :class="['item', { 'active': active == tag }]"
        href="#"
        v-for="_, tag in tagData"
        @click="setTag(tag as string)"
      >
        <span>{{ tag }}</span>
      </a>
    </div>
    <BlogList :posts="active ? tagData[active] : []" />
  </div>
</template>

<script setup lang="ts">
import BlogList from './BlogList.vue'
import { data as posts, type PostData } from '../posts.data'
import { ref } from 'vue'
const active = ref(new URL(location.href).searchParams.get('q'))
const tagData: { [tag: string]: PostData[] } = {}
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
</script>

<style lang="scss">
.tag {
  margin-top: 64px;
  .item {
    display: inline-block;
    padding: 8px 16px;
    margin: 0 4px;
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
