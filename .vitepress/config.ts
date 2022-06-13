import { defineConfigWithTheme } from 'vitepress'
import fixKatex from './fix-katex'
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
  markdown: {
    lineNumbers: true,
    config: md => {
      md.use(fixKatex)
    }
  },
  themeConfig: {
    name: 'flaribbit',
    cover: 'https://tva3.sinaimg.cn/large/0072Vf1pgy1foxk6pmjkjj31kw0w0b0v.jpg',
    social: [
      { icon: 'fa-github', url: 'https://github.com' },
      { icon: 'fa-twitter', url: 'https://twitter.com' },
      { icon: 'fa-weibo', url: 'https://weibo.com' },
    ],
    waline: 'https://blog-waline-e7jqcxb9s-flaribbit.vercel.app/',
  }
})
