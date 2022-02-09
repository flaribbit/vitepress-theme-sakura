// from https://github.com/vuejs/blog
const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')
const { createMarkdownRenderer } = require('vitepress')

const md = createMarkdownRenderer(process.cwd())

module.exports = {
  watch: '../*.md',
  load(asFeed = false) {
    const postDir = path.resolve(__dirname, '..')
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
    href: `/${file.replace(/\.md$/, '.html')}`,
    date: formatDate(data.date || timestamp),
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
