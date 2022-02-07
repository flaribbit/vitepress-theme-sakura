<template>
  <div class="bloglist">
    <div class="card" v-for="b in blogs">
      <div class="image"></div>
      <div class="info">
        <div class="date">
          <i class="fa fa-clock"></i>
          发布于 {{ b.date }}
        </div>
        <div class="title">{{ b.title }}</div>
        <div class="view">
          <i class="fa fa-eye"></i>
          {{ b.view }}阅读
        </div>
        <div class="content">{{ b.content }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const content = "Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。"
const blogs = [
  { title: 'Vue 框架', url: '/hello-world', date: '2020-01-01', view: 0, comment: 0, content: content },
  { title: 'Hello World2', url: '/hello-world', date: '2020-01-01', view: 0, comment: 0, content: content },
  { title: 'Hello World3', url: '/hello-world', date: '2020-01-01', view: 0, comment: 0, content: content },
  { title: 'Hello World4', url: '/hello-world', date: '2020-01-01', view: 0, comment: 0, content: content },
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
  }
  .title {
    color: #333;
    font-size: 24px;
    padding: 20px 0;
  }
  .content {
    font-size: 16px;
    padding: 20px 0;
  }
}
</style>
