import { defineConfig } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";
import { dependencies } from "./package.json";

// https://jivancic.com/posts/build-a-component-library.html
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@/": new URL("./src/", import.meta.url).pathname,
    },
  },
  build: {
    target: "esnext",
    lib: {
      formats: ["es"],
      entry: path.resolve(__dirname, "src/index.ts"),
      fileName: (format) => `bundle.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled into your library
      external: [...Object.keys(dependencies || [])],
      output: {
        // NO! we use external, above
        // manualChunks: Object.keys(dependencies).reduce((a, dep) => {
        //   a[dep] = [dep];
        //   return a;
        // }, [] as any),
        // preserveModules: true,

        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
