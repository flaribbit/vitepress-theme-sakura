const fs = require('fs')
const vue = require('@vitejs/plugin-vue')
const { build } = require('vite')
const externals = ['vue', 'vitepress', '../posts.data']

async function run() {
  await build({
    plugins: [vue()],
    build: {
      outDir: './dist',
      emptyOutDir: true,
      lib: {
        formats: ['es'],
        entry: './build/lib.js',
        fileName: (format) => `lib.js`,
      },
      rollupOptions: {
        external: externals,
      }
    }
  })
  fs.copyFileSync('./build/lib.d.ts', './dist/lib.d.ts')
}

run()
