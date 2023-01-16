const { defineConfig } = require("@vue/cli-service");
const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");
import * as path from "path";

const { resolve } = path;

const PATHS = {
  // Source files
  src: resolve(__dirname, "./src"),

  // Production build files
  build: resolve(__dirname, "./dist"),

  // Static files that get copied to build folder
  public: resolve(__dirname, "./public"),
};

const API_PREFIX = "/admin";
const API_HOST = "https://fansclub.happyelements.com/v3_server_test";

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        "@": PATHS.src,
        store: "/src/store",
      },
    },
    plugins: [
      require("unplugin-auto-import/webpack")({
        imports: ["vue", "vue-router"],
        dts: false,
      }),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    devServer: {
      proxy: {
        [`${API_PREFIX}`]: {
          target: API_HOST,
          pathRewrite: { [`^${API_PREFIX}`]: "" },
        },
      },
    },
  },
});
