import fs from 'node:fs'
import path from 'node:path'
import { Feed } from 'feed'
import postsData from './posts.data.mjs'
import { resolveSiteData } from 'vitepress'
const url = `https://blog.vuejs.org`

genFeed()

async function genFeed() {
  const siteData = await resolveSiteData('.')
  const posts = await postsData.load(true)
  const cwd = process.cwd()
  const feed = new Feed({
    title: siteData.title,
    description: siteData.description,
    id: url,
    link: url,
    language: siteData.lang,
    image: 'https://vuejs.org/images/logo.png',
    favicon: `${url}/favicon.ico`,
    copyright: siteData.themeConfig.name || '-',
  })

  posts.forEach((post) => {
    const file = path.resolve(cwd, `.vitepress/dist/${post.href}`)
    const rendered = fs.readFileSync(file, 'utf-8')
    const content = rendered.match(
      /<main>([\s\S]*)<\/main>/
    )

    feed.addItem({
      title: post.title,
      id: `${url}${post.href}`,
      link: `${url}${post.href}`,
      description: post.excerpt,
      content: content[1],
      author: [
        {
          name: post.data.author,
          link: post.data.twitter
            ? `https://twitter.com/${post.data.twitter}`
            : undefined
        }
      ],
      date: post.data.date
    })
  })

  fs.writeFileSync(path.resolve(cwd, '.vitepress/dist/feed.rss'), feed.rss2())
}
