# vitepress-theme-sakura

comming s∞n

[preview](https://flaribbit.github.io/vitepress-theme-sakura/)

## Quick start

Install dependencies

```sh
pnpm add vitepress vitepress-theme-sakura sass
```

Create config files

`.vitepress/config.ts`
```ts
import { ThemeConfig } from 'vitepress-theme-sakura'
import { defineConfigWithTheme } from 'vitepress'
export default defineConfigWithTheme<ThemeConfig>({
  lang: 'zh-CN',
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
    // ...
  }
})
```

To see all configurable options in `themeConfig`, click `ThemeConfig` in the first line to jump to the definition.

`.vitepress/theme/index.ts`
```ts
export { default } from 'vitepress-theme-sakura'
```

Then write articles and save to `posts/*.md`, then run `vitepress dev` for preview, run `vitepress build` for release.

## thanks
- [wordpress-theme-sakura](https://github.com/mashirozx/sakura)
- [hexo-theme-yun](https://github.com/YunYouJun/hexo-theme-yun)
- [vuejs/blog](https://github.com/vuejs/blog)
- [wordpress-theme-Sakurairo](https://github.com/mirai-mamori/Sakurairo)
