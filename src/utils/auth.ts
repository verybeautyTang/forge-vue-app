// 保存用户的cookie
import Cookies from "js-cookie";

const TokenKey = "HeSession";

export function getToken() {
  return Cookies.get(TokenKey) ?? false;
}

export function getChooseApp() {
  return Cookies.get("selectApp");
}

export function setToken(token: string, cookieExpires: any) {
  return Cookies.set(TokenKey, token, { expires: cookieExpires || 1 });
}

export function removeToken() {
  return Cookies.remove(TokenKey);
}
