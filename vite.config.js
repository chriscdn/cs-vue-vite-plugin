import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')

//
// https://vitejs.dev/guide/build.html#library-mode
//
export default defineConfig({
    plugins: [vue()],
    build: {
        // minify: true,
        lib: {
            entry: path.resolve(__dirname, 'src/index.js'),
            name: 'CSVueVitePlugin',
            fileName: (format) => `bundle.${format}.js`,
        },
        rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled into your library
            external: ['vue'],
            output: {
                // Provide global variables to use in the UMD build for externalized deps
                globals: {
                    vue: 'Vue',
                },
            },
        },
    },
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
