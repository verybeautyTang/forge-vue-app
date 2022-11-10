import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import htmlTemplate from "vite-plugin-html-template";
import EnvironmentPlugin from "vite-plugin-environment";

// const { defineConfig } = require("vite");
// const vue = require("@vitejs/plugin-vue");
// const htmlTemplate = require("vite-plugin-html-template");
// const EnvironmentPlugin = require("vite-plugin-environment");
// const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  resolve: {
    alias: {
      "@": "/src",
      store: "/src/store",
    },
  },
  plugins: [
    vue(),
    htmlTemplate(),
    EnvironmentPlugin("all", { prefix: "VUE_APP_" }),
  ],
  // host: "0.0.0.0",
});

// 不需要插件的写法
// import { defineConfig } from "vite";
// // ...
// export default defineConfig({
//   // ...
//   define: {
//     "process.env": {
//       VUE_APP_API_URL: "https://www.baidu.com",
//     },
//   },
// });
