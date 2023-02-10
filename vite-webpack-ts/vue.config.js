const { defineConfig } = require("@vue/cli-service");
const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");
// import xx  from './src/styles/element/index.scss'
const path = require("path");

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
  chainWebpack: config => {
    const cssRule = config.module.rule("css");
    cssRule.uses.clear();

    // add replacement loader(s)
    cssRule
      .use("sass-loader")
      .loader("sass-loader")
      .tap(options => {
        // modify the options...
        return options;
      });
    config.module
      .rule("worker-loader")
      .test(/\.worker\.js$/)
      .use({
        loader: "worker-loader",
        options: {
          inline: true,
        },
      })
      .loader("worker-loader")
      .end();
  },
  pages: {
    index: {
      entry: "src/main.ts",
      template: "public/index.html",
      filename: "index.html",
      title: "本地翻译平台",
      chunks: ["chunk-vendors", "chunk-common", "index"],
    },
  },
  css: {
    // css文件名是否可省略module,默认为false.
    // requireModuleExtension: false,
    // 是否使用css分离插件 默认生产环境下是true, 开发环境下是false.
    extract: false,
    // 是否为CSS开启source map.设置为true之后可能会影响构建的性能.
    sourceMap: false,
    loaderOptions: {
      sass: {
        additionalData: `@use "~/src/styles/element/index.scss"  as *;`,
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": PATHS.src,
        store: "/src/store",
      },
    },
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
        imports: ["vue", "vue-router"],
        dts: false,
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    devServer: {
      port: 3003,
      proxy: {
        [`${API_PREFIX}`]: {
          target: API_HOST,
          pathRewrite: { [`^${API_PREFIX}`]: "" },
        },
      },
    },
  },
});
