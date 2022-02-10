import type { SiteData, HeadConfig } from 'vitepress'
export default {
  lang: 'zh-CN',
  // from https://codybontecou.com/tailwindcss-with-vitepress.html
  head: [
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto Serif SC' }]
  ] as HeadConfig[],
} as SiteData
