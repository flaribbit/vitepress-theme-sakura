<template>
  <header>
    <span class="brand"></span>
    <span class="container">
      <span class="nav"></span>
      <span class="menu">
        <ul>
          <li v-for="m in menu">
            <a :href="m.url">
              <span>
                <i :class="['fa', m.icon]"></i>
                {{ m.name }}
              </span>
            </a>
          </li>
        </ul>
      </span>
    </span>
    <span>
      <span class="search">
        <i class="fa fa-search"></i>
      </span>
    </span>
  </header>
</template>

<script setup lang="ts">
interface MenuItem { icon: string, name: string, url: string }
const menu: MenuItem[] = [
  { icon: 'fa-home', name: '首页', url: '/' },
  { icon: 'fa-archive', name: '归档', url: '/archive' },
  { icon: 'fa-list-ul', name: '清单', url: '/list' },
  { icon: 'fa-leaf', name: '关于', url: '/about' }
]
</script>

<style lang="scss">
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  width: 100%;
  position: fixed;
  background: #fffe;
  z-index: 100;
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
  a {
    color: var(--color-gray);
    &:hover {
      color: var(--color-accent);
    }
  }
}
</style>
