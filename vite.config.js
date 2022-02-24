import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
export default defineConfig({
  plugins: [vue()],
  build: {
    minify: 'terser',
    lib: {
      formats: ['es'],
      entry: 'lib.ts',
      fileName: (format) => `lib.${format}.js`
    },
    rollupOptions: {
      external: ['vue', 'vitepress', '../posts.data', './.vitepress/config'],
    }
  }
})
