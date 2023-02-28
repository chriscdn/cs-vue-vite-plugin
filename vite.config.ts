import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import pkg from './package.json'

// https://jivancic.com/posts/build-a-component-library.html
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@/': new URL('./src/', import.meta.url).pathname,
    },
  },
  build: {
    target: 'esnext',
    lib: {
      formats: ['es'],
      entry: path.resolve(__dirname, 'src/index.ts'),
      fileName: (format) => `bundle.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled into your library
      external: [...Object.keys(pkg.dependencies || [])],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
