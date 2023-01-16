import { defineStore } from "pinia";
import { login, logOut } from "@/api/user";
export const userStore = defineStore("users", {
  state: () => {
    return {
      userID: "10001",
      userName: "某同学",
      userInfo: {},
    };
  },
  getters: {
    fullName: state => {
      return `${state.userName}(${state.userID})`;
    },
  },
  // action 支持 async/await 的语法，可以自行添加使用
  // action 里的方法相互之间调用，直接用 this 访问即可
  actions: {
    async getUserInfo() {
      this.userInfo = await login();
      console.log(this.userInfo);
    },
    async logOut() {
      await logOut();
      this.userInfo = {};
    },
    feLogOut() {
      this.userInfo = {};
    },
  },
});
