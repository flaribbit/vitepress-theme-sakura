import { defineConfigWithTheme } from 'vitepress'
import * as fixKatex from './fix-katex'
export interface ThemeConfig {
  name?: string,
  cover?: string,
  hello?: string,
  motto?: string,
  social?: { icon: string, url: string }[],
  waline?: string,
}
export default defineConfigWithTheme<ThemeConfig>({
  lang: 'zh-CN',
  base: '/vitepress-theme-sakura/',
  // from https://codybontecou.com/tailwindcss-with-vitepress.html
  head: [
    // 字体支持
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.0.0/css/regular.min.css' }],
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.0.0/css/all.min.css' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Serif+SC' }],
    // waline
    ['script', { src: 'https://cdn.jsdelivr.net/npm/@waline/client@1.5.4/dist/Waline.min.js' }],
    // katex
    ['script', { src: 'https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.js' }],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/contrib/auto-render.min.js' }],
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css' }],
  ],
  markdown: {
    lineNumbers: true,
    config: (md) => {
      md.use(fixKatex)
    }
  },
  themeConfig: {
    name: 'flaribbit',
    cover: 'https://tva3.sinaimg.cn/large/0072Vf1pgy1foxk6pmjkjj31kw0w0b0v.jpg',
    social: [
      { icon: 'fa-github', url: 'github.com' },
      { icon: 'fa-twitter', url: 'twitter.com' },
      { icon: 'fa-weibo', url: 'weibo.com' },
    ],
    waline: 'https://blog-waline-e7jqcxb9s-flaribbit.vercel.app/',
  }
})
