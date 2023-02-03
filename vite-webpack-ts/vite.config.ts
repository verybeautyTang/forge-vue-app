import { UserConfig, ConfigEnv, loadEnv } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import htmlTemplate from "vite-plugin-html-template";
import EnvironmentPlugin from "vite-plugin-environment";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

const pathSrc = path.resolve(__dirname, "src");

export default ({ mode }: ConfigEnv): UserConfig => {
  // 获取 .env 环境配置文件
  const env = loadEnv(mode, process.cwd());
  return {
    resolve: {
      alias: {
        "@": `${pathSrc}/`,
        store: "/src/store",
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/styles/element/index.scss" as *;`,
        },
      },
    },
    //生产模式打包配置
    build: {
      outDir: "dist", //Specify the output directory (relative to project root).
    },
    plugins: [
      vue(),
      vueJsx(),
      htmlTemplate(),
      EnvironmentPlugin("all", { prefix: "VUE_APP_" }),
      Components({
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        extensions: ["vue", "md"],
        resolvers: [
          ElementPlusResolver({
            importStyle: "sass",
          }),
        ],
      }),
      AutoImport({
        imports: ["vue", "vue-router"],
        resolvers: [ElementPlusResolver()],
        // eslintrc: {
        //   enabled: true,
        // },
        // dts: "./src/types/auto-imports.d.ts",
      }),
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
        // 指定symbolId格式
        symbolId: "icon-[dir]-[name]",
      }),
    ],
    define: {
      "process.env": {
        BASE_API: "https://fansclub.happyelements.com/v3_server_test",
      },
    },
    // 本地反向代理解决浏览器跨域限制
    server: {
      host: "0.0.0.0",
      port: Number(env.VITE_APP_PORT),
      open: true, // 运行自动打开浏览器
      proxy: {
        [env.VITE_APP_BASE_API]: {
          // 线上API地址
          // target: "xxxxx.xxxx.xxx",
          // 本地API地址
          target: "http://localhost:5005",
          changeOrigin: true,
          rewrite: path =>
            path.replace(new RegExp("^" + env.VITE_APP_BASE_API), ""),
        },
      },
    },
  };
};
// export default defineConfig({
//   resolve: {
//     alias: {
//       "@": `${pathSrc}/`,
//       store: "/src/store",
//     },
//   },
//   css: {
//     preprocessorOptions: {
//       scss: {
//         additionalData: `@use "@/styles/element/index.scss" as *;`,
//       },
//     },
//   },
//   plugins: [
//     vue(),
//     htmlTemplate(),
//     EnvironmentPlugin("all", { prefix: "VUE_APP_" }),
//     Components({
//       include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
//       extensions: ["vue", "md"],
//       resolvers: [
//         ElementPlusResolver({
//           importStyle: "sass",
//         }),
//       ],
//     }),
//     AutoImport({
//       imports: ["vue", "vue-router"],
//       resolvers: [ElementPlusResolver()],
//       eslintrc: {
//         enabled: true,
//       },
//       dts: "./src/types/auto-imports.d.ts",
//     }),
//   ],
//   define: {
//     "process.env": {
//       BASE_API: "https://fansclub.happyelements.com/v3_server_test",
//     },
//   },
//   server: {
//     port: 5005,
//     proxy: {
//       "/dev": {
//         target: "https://fansclub.happyelements.com/v3_server_test",
//         changeOrigin: true,
//         rewrite: path => path.replace(/^\/dev/, ""),
//       },
//     },
//   },
// });
