import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { resolve } from "path";
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@package": resolve(__dirname, "package"),
    },
  },
  build: {
    target: "esnext",
    minify: "terser",
    lib: {
      entry: "package/webcomponents/index.ts",
      // formats: ["es"],
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
