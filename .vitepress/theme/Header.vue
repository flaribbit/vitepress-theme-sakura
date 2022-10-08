<template>
  <header>
    <span class="brand"></span>
    <span class="container">
      <span class="menu">
        <ul>
          <li v-for="m in menu">
            <a :href="base + m.url">
              <span>
                <i :class="['fa', m.icon]"></i>
                {{ m.name }}
              </span>
            </a>
          </li>
        </ul>
      </span>
    </span>
    <span class="other">
      <a class="search">
        <i class="fa fa-search"></i>
      </a>
    </span>
  </header>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
const base = useData().site.value.base
interface MenuItem { icon: string, name: string, url: string }
const menu: MenuItem[] = [
  { icon: 'fa-home', name: '首页', url: '' },
  { icon: 'fa-tag', name: '标签', url: 'tags/' },
  { icon: 'fa-leaf', name: '关于', url: 'readme.html' }
]
</script>

<style lang="scss">
header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.9);
  z-index: 100;

  .brand {
    justify-self: left;
    padding-left: 8px;
  }

  .container {
    position: absolute;
    left: 50%;
    translate: -50%;
  }

  .other {
    justify-self: right;
    padding-right: 8px;
  }

  .menu {
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
    }

    li {
      margin: 0 12px;
      display: inline;
    }
  }

  a {
    color: var(--color-gray);
    transition: color 0.2s ease-out;

    &:hover {
      color: var(--color-accent);
    }
  }
}
</style>
