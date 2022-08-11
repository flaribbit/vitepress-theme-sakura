<template>
  <div class="bloglist">
    <div class="section">
      <i class="fa-solid fa-book"></i> 文章列表
      <hr />
    </div>
    <div class="card" v-for="p in posts">
      <div class="image"></div>
      <div class="info">
        <div class="date">
          <i class="fa fa-clock"></i>
          发布于 {{ new Date(p.create).toLocaleDateString('sv-SE') }}
        </div>
        <a :href="base + p.href">
          <div class="title">{{ p.title }}</div>
        </a>
        <!-- <div class="view">
          <i class="fa fa-eye"></i>
          {{ 114514 }} 阅读
        </div>-->
        <div class="content" v-html="p.excerpt"></div>
        <div v-if="click" class="tags">
          <a v-for="t in p.tags" href="#" @click="click(t)">
            <i class="fa fa-tag"></i>
            {{ t }}
          </a>
        </div>
        <div v-else class="tags">
          <a v-for="t in p.tags" :href="`${base}tags/?q=${t}`">
            <i class="fa fa-tag"></i>
            {{ t }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type PostData } from '../posts.data'
import { useData } from 'vitepress'
const base = useData().site.value.base
const { posts, click = null } = defineProps<{
  posts: PostData[]
  click?: (tag: string) => void
}>()
</script>

<style lang="scss">
.bloglist {
  max-width: 800px;
  margin: auto;

  .section {
    padding-top: 24px;
  }

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

@media (max-width: 720px) {
  .bloglist {
    .card {
      margin: 0;
      border-radius: 0;
      box-shadow: none;

      &:hover {
        box-shadow: none;
      }
    }

    .section {
      margin: 0 24px;
    }
  }
}
</style>
