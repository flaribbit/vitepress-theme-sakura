// from https://github.com/vuejs/blog
const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')
const { createMarkdownRenderer } = require('vitepress')

const cwd = process.cwd()
const md = createMarkdownRenderer(cwd)

module.exports = {
  watch: path.relative(__dirname, cwd + '/posts/*.md').replace(/\\/g, '/'),
  load(asFeed = false) {
    const postDir = path.join(cwd, 'posts')
    checkTags()
    return fs
      .readdirSync(postDir)
      .filter((file) => file.endsWith('.md'))
      .map((file) => getPost(file, postDir, asFeed))
      .sort((a, b) => b.date.time - a.date.time)
  }
}

const cache = new Map()

function getPost(file, postDir, asFeed = false) {
  const fullePath = path.join(postDir, file)
  const timestamp = fs.statSync(fullePath).mtimeMs

  const cached = cache.get(fullePath)
  if (cached && timestamp === cached.timestamp) {
    return cached.post
  }

  const src = fs.readFileSync(fullePath, 'utf-8')
  const { data, excerpt } = matter(src, { excerpt: true })

  const post = {
    title: data.title,
    href: `posts/${file.replace(/\.md$/, '.html')}`,
    date: formatDate(data.date || timestamp),
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

function formatDate(date) {
  if (!(date instanceof Date)) {
    date = new Date(date)
  }
  return date.toLocaleDateString('sv-SE')
}

function checkTags() {
  const dir = path.join(cwd, 'tags')
  if (!fs.existsSync(dir)) {
    console.log('Creating page: /tags')
    fs.mkdirSync(dir)
    fs.writeFileSync('tags/index.md', '---\ntitle: 标签\n---\n')
  }
}
