import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  AxiosInstance,
} from "axios";
import { HttpResponse } from "@/types/request";
import { ElMessage } from "element-plus";
import { userStore } from "@/store/slices/user";
// import globalConfig from "./config";
console.log("我执行了哦");

console.log(process.env.BASE_API);
const request: AxiosInstance = axios.create({
  baseURL: process.env.BASE_API + "/admin/dev", // api 的 base_url
  timeout: 15000, // request timeout
});

// 请求拦截
// request interceptor
request.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    if (config.url && config.url.indexOf("/tools/resetEsIndex") > -1) {
      config.timeout = 300 * 1000;
    }
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

// 响应拦截
request.interceptors.response.use(
  // response => response,
  /**
   * 下面的注释为通过在response里，自定义code来标示请求状态
   * 当code返回如下情况则说明权限有问题，登出并返回到登录页
   * 如想通过 xmlhttprequest 来状态码标识 逻辑可写在下面error中
   * 以下代码均为样例，请结合自生需求加以修改，若不需要，则可删除
   */
  (response: AxiosResponse<HttpResponse<any>>) => {
    const { data } = response;
    console.log(data);
    const { code, msg = "服务器异常", data: responseData } = data;
    if (code !== 0) {
      if (code === -32768) {
        ElMessage.info("登录失效，请重新登录，1s后进行跳转");
        setTimeout(() => {
          const store = userStore();
          store.feLogOut();
          // 跳转到飞书登录
          // window.location.href =
          //   process.env.BASE_API +
          //   "/admin/agent/login?callback=" +
          //   encodeURIComponent(window.btoa(location.href));
        }, 1000);
        return;
      }
      ElMessage.error(msg);
      Promise.reject(responseData);
    }
  },
  (error: AxiosError) => {
    console.log("err" + error); // for debug
    ElMessage({
      message: error.message,
      type: "error",
      duration: 5 * 1000,
    });
    return Promise.reject(error);
  }
);

export default request;
