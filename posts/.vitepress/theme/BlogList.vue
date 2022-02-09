<template>
  <div class="bloglist">
    <div class="card" v-for="p in posts">
      <div class="image"></div>
      <div class="info">
        <div class="date">
          <i class="fa fa-clock"></i>
          发布于 {{ p.date }}
        </div>
        <a :href="p.href">
          <div class="title">{{ p.title }}</div>
        </a>
        <!-- <div class="view">
          <i class="fa fa-eye"></i>
          {{ 114514 }} 阅读
        </div> -->
        <div class="content" v-html="p.excerpt"></div>
        <div class="tags">
          <a v-for="t in tags" :href="'/tags?q=' + t">
            <i class="fa fa-tag"></i>
            {{ t }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { data as posts } from '../posts.data'
console.log(posts)
const tags = ['啊啊啊', '还不支持tag']
</script>

<style lang="scss">
.bloglist {
  max-width: 800px;
  margin: auto;
  .date,
  .view,
  .tags {
    font-size: 14px;
  }
  .fa {
    font-size: 16px;
  }
  .card {
    color: var(--color-gray);
    margin: 20px 0;
    padding: 24px;
    border-radius: 10px;
    box-shadow: 0 1px 20px -6px rgba(0, 0, 0, 0.5);
    transition: box-shadow 0.3s ease;
    &:hover {
      box-shadow: 0 5px 10px 5px rgb(0, 0, 0, 0.2);
    }
  }
  .title {
    color: #333;
    font-size: 24px;
    margin: 20px 0;
    transition: color 0.2s ease-out;
    &:hover {
      color: var(--color-accent);
    }
  }
  .tags a {
    margin-right: 8px;
    color: var(--color-gray);
    transition: color 0.2s ease-out;
    &:hover {
      color: var(--color-accent);
    }
  }
}
</style>
