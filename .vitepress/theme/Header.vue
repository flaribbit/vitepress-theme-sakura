<template>
  <header :class="scrolled ? 'yya' : ''">
    <div class="site-branding">
      <span class="site-title">
        <span class="logolink moe-mashiro">
          <a href="/">
            <span class="sakurasono">vitepressの</span>
            <span class="shironeko">sakura</span>
          </a>
        </span>
      </span>
    </div>
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
import { onMounted, onUnmounted, ref } from 'vue';
const base = useData().site.value.base
interface MenuItem { icon: string, name: string, url: string }
const menu: MenuItem[] = [
  { icon: 'fa-home', name: '首页', url: '' },
  { icon: 'fa-tag', name: '标签', url: 'tags/' },
  { icon: 'fa-leaf', name: '关于', url: 'readme.html' }
]
const scrolled = ref(false);

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const handleScroll = () => {
  const scrollTop = window.scrollY;
  scrolled.value = scrollTop > 100;
};
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
  z-index: 100;
  transition: all 0.4s ease;

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

.site-branding {
  float:left;
  position:relative;
  height:75px;
  line-height:75px;
  margin-left:12px;
  animation:sitetop 1s;
}


.site-title {
  margin:0
}
.site-title a {
  color:#464646;
  font-weight:400
}
.site-title a:hover {
  color:orange
}
.site-title img {
  height:40px;
  margin-top:17px;
  opacity:.75;
  -webkit-transition:color .2s ease-out,border .2s ease-out,opacity .2s ease-out;
  -moz-transition:color .2s ease-out,border .2s ease-out,opacity .2s ease-out;
  transition:color .2s ease-out,border .2s ease-out,opacity .2s ease-out
}
.site-title img:hover {
  opacity:1
}

.logolink a {
  color:#464646;
  float:left;
  font-size:20px;
  font-weight:800;
  height:56px;
  line-height:56px;
  padding-left:35px;
  padding-right:15px;
  padding-top:11px;
  text-decoration-line:none
}
.logolink .sakurasono {
  background-color:rgba(255,255,255,0.5);
  border-radius:5px;
  color:#464646;
  height:auto;
  line-height:25px;
  margin-right:5px;
  padding-bottom:0;
  padding-top:1px;
  text-size-adjust:100%;
  width:auto
}
.logolink a:hover .sakurasono {
  background-color:orange;
  color:#fff
}
.logolink a:hover .shironeko,.logolink a:hover rt {
  color:orange
}
.logolink.moe-mashiro a {
  color:#464646;
  float:left;
  font-size:28px;
  font-weight:800;
  height:56px;
  line-height:56px;
  padding-left:6px;
  padding-right:15px;
  padding-top:11px;
  text-decoration-line:none
}
.logolink.moe-mashiro .sakurasono {
  font-size:25px;
  border-radius:9px;
  padding-bottom:2px;
  padding-top:5px
}

@font-face {
  font-family: 'Gen Jyuu Gothic Monospace Bold';
  src: url("./assets/Gen Jyuu Gothic Monospace Bold.ttf");
}

.moe-mashiro {
  font-family: 'Gen Jyuu Gothic Monospace Bold', sans-serif;
}

.yya {
  position:fixed;
  left:0;
  background:rgba(255,255,255,0.95);
  box-shadow:0 1px 40px -8px rgba(0,0,0,.5)
}
</style>
