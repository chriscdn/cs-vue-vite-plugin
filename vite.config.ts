import { resolve } from 'path'
import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import vue from '@vitejs/plugin-vue'
//
// https://vitejs.dev/guide/build.html#library-mode
//
export default defineConfig({
  // plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  // build: {
  //   minify: false,

  //   // https://vitejs.dev/guide/build.html#library-mode
  //   lib: {
  //     entry: path.resolve(__dirname, 'src/index.js'),
  //     name: 'CSVueVitePlugin',
  //     fileName: (format) => `bundle.${format}.js`,
  //   },
  //   rollupOptions: {
  //     // make sure to externalize deps that shouldn't be bundled into your library
  //     // external: ['vue'],
  //     external: [...Object.keys(pkg.dependencies || {})],
  //     output: {
  //       // Provide global variables to use in the UMD build for externalized deps
  //       globals: {
  //         vue: 'Vue',
  //       },
  //     },
  //   },
  // },

  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      // name: 'MyLib',
      formats: ['es'],
      fileName: 'index',
    },
  },
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
    }),
  ],

  define: {
    'process.env': {},
  },
  server: {
    proxy: {
      '/Livelink100/': {
        target: 'http://localhost/',
      },
      '/img/': {
        target: 'http://localhost/',
      },
    },
  },
  optimizeDeps: {
    // include: ['util'],
  },
})
