import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { setupStore } from "@/store";

import ElementPlus from "element-plus";

// 国际化
import i18n from "@/language/index";

import "@/styles/index.scss";
import "element-plus/theme-chalk/index.css";



const app = createApp(App);

setupStore(app);


app.use(i18n).use(router).use(ElementPlus).mount("#app");
