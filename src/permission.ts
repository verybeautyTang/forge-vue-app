import router from "@/router";
import { RouteLocationNormalized, RouteRecordRaw } from "vue-router";
import { useUserStoreHook } from "./store/modules/users";
import NProgress from "nprogress";

NProgress.configure({ showSpinner: false });

/** 白名单 */
const whiteList = ["/login", "/auth-redirect"];

const whiteListFunction = (
  to: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  if (whiteList.indexOf(to.path) !== -1) {
    next();
  }
};

router.beforeEach(async (to, from, next) => {
  NProgress.start();
  const users = useUserStoreHook();
  if (to.path === "/login") {
    next();
    NProgress.done();
  } else {
    if (users.sso === "") {
      try {
      } catch (e) {
        next("/login");
        NProgress.done();
      }
    } else {
      // i
    }
  }
});

router.afterEach(() => {
  NProgress.done();
});
