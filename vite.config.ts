import { defineConfig } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";
import { dependencies } from "./package.json";

// https://jivancic.com/posts/build-a-component-library.html
export default defineConfig({
  plugins: [vue()],
  build: {
    // target: "esnext",
    lib: {
      formats: ["es"],
      entry: path.resolve(__dirname, "src/index.ts"),
      // fileName: (format) => `bundle.${format}.js`,
      fileName: (format) => `index.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled into your library
      // external: ["vue"],
      external: [...Object.keys(dependencies || [])],
      // output: {
      //   preserveModules: true,
      // },
    },
  },
});
