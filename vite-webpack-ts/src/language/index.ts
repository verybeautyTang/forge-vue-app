import { createI18n } from "vue-i18n";
import en from "./config/en";
import zh from "./config/zh";

const messages = {
  en: { ...en },
  zh: { ...zh },
};

// 浏览器语言
const lang = (navigator.language || "zh").toLocaleLowerCase();

// 存储在本地，若本地没有，采用浏览器语言
const language = localStorage.getItem("language") || lang.split("-")[0] || "zh";

localStorage.setItem("language", language);

const i18n = new createI18n({
  locale: language,
  messages,
});

export default i18n;
