import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const path = require('path')

export default defineConfig({
    plugins: [vue()],
    build: {
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
})
