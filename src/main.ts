import { createApp, Directive } from "vue";
import App from "./App.vue";
import router from "@/router";
import { setupStore } from "@/store";
import ElementPlus from "element-plus";
// 国际化
import i18n from "@/lang/index";

import "@/styles/index.scss";
import "element-plus/theme-chalk/index.css";

const app = createApp(App);

// 全局挂载
setupStore(app);

app.use(router).use(ElementPlus).use(i18n).mount("#app");
