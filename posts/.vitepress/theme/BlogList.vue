<template>
  <div class="bloglist">
    <div class="card" v-for="b in blogs">
      <div class="image"></div>
      <div class="info">
        <div class="date">
          <i class="fa fa-clock"></i>
          发布于 {{ b.date }}
        </div>
        <a :href="b.url">
          <div class="title">{{ b.title }}</div>
        </a>
        <div class="view">
          <i class="fa fa-eye"></i>
          {{ b.view }} 阅读
        </div>
        <div class="content">{{ b.content }}</div>
        <div class="tags">
          <a v-for="t in b.tag" :href="'/tags?q=' + t">
            <i class="fa fa-tag"></i>
            {{ t }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const content = "Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。"
const blogs = [
  { title: 'Vue 框架', url: '/doc2', date: '2020-01-01', view: 0, comment: 0, tag: ["测试", "vue"], content: content },
  { title: 'doc1', url: '/doc1', date: '2020-01-01', view: 0, comment: 0, tag: ["测试"], content: "VitePress is currently in 0.x status. It is already suitable for out-of-the-box documentation use, but the config and theming API may still change between minor releases." },
  { title: 'Hello World3', url: '/doc2', date: '2020-01-01', view: 0, comment: 0, tag: ["测试"], content: content },
  { title: 'Hello World4', url: '/doc2', date: '2020-01-01', view: 0, comment: 0, tag: ["测试"], content: content },
]
</script>

<style lang="scss">
.bloglist {
  width: 80%;
  margin: auto;
  font-size: 14px;
  .fa {
    font-size: 16px;
  }
  .card {
    color: var(--color-gray);
    height: 300px;
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
  .content {
    font-size: 16px;
    margin: 20px 0;
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
