import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: "esnext",
    minify: "terser",
    lib: {
      entry: "src/index.ts",
      formats: ["es"],
      name: "ViteComponents",
      fileName: "vite-components",
    },
  },
  plugins: [
    // vue(),
    vue({
      template: {
        compilerOptions: {
          // 将所有包含短横线的标签作为自定义元素处理
          isCustomElement: tag => (tag.indexOf('wbcp-') !== -1)
        }
      }
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
});
