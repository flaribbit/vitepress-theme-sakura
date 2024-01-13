// from https://github.com/vuejs/blog
import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import { fileURLToPath } from 'url';
import { createMarkdownRenderer } from 'vitepress'


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const cwd = process.cwd()

export default {
  watch: path.relative(__dirname, cwd + '/posts/*.md').replace(/\\/g, '/'),
  async load(asFeed = false) {
    const md = await createMarkdownRenderer(cwd)
    const postDir = path.join(cwd, 'posts')
    checkTags()
    return fs
      .readdirSync(postDir)
      .filter((file) => file.endsWith('.md'))
      .map((file) => getPost(md, file, postDir, asFeed))
      .sort((a, b) => b.create - a.create)
  }
}

const cache = new Map()

function getPost(md, file, postDir, asFeed = false) {
  const fullePath = path.join(postDir, file)
  const timestamp = Math.floor(fs.statSync(fullePath).mtimeMs)

  const cached = cache.get(fullePath)
  if (cached && timestamp === cached.timestamp) {
    return cached.post
  }

  const src = fs.readFileSync(fullePath, 'utf-8')
  const { data, excerpt } = matter(src, { excerpt: true })

  const post = {
    title: data.title,
    href: `posts/${file.replace(/\.md$/, '.html')}`,
    create: +new Date(data.date) || timestamp,
    update: timestamp,
    tags: data.tags,
    cover: data.cover,
    excerpt: md.render(excerpt)
  }
  if (asFeed) {
    // only attach these when building the RSS feed to avoid bloating the
    // client bundle size
    post.data = data
  }

  cache.set(fullePath, {
    timestamp,
    post
  })
  return post
}

function checkTags() {
  const dir = path.join(cwd, 'tags')
  if (!fs.existsSync(dir)) {
    console.log('Creating page: /tags')
    fs.mkdirSync(dir)
    fs.writeFileSync('tags/index.md', '---\ntitle: 标签\n---\n')
  }
}
