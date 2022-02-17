import { type UserConfig } from 'vitepress'
export interface ThemeConfig {
  name?: string,
  waline?: string,
}
export default {
  lang: 'zh-CN',
  base: '/vitepress-theme-sakura/',
  // from https://codybontecou.com/tailwindcss-with-vitepress.html
  head: [
    ['script', { src: 'https://cdn.jsdelivr.net/npm/@waline/client' }],
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.0.0/css/regular.min.css' }],
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.0.0/css/all.min.css' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Serif+SC' }]
  ],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    name: 'flaribbit',
    waline: 'https://blog-waline-e7jqcxb9s-flaribbit.vercel.app/',
  }
} as UserConfig<ThemeConfig>
