import { createApp } from "vue";

import App from "./App.vue";

// import store from "@/store";

import ElementPlus from "element-plus";

import { setupStore } from "@/store";

import "@/styles/index.scss";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import en from "element-plus/dist/locale/en.mjs";

import router from "./router";

const language = ref("zh-cn");
const locale = computed(() => (language.value === "zh-cn" ? zhCn : en));

const app = createApp(App);

// app.use(store);

setupStore(app);
console.log({ locale });

app.use(ElementPlus, { locale });

app.use(router);

app.mount("#app");
