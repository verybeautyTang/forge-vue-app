import { get, post } from "./index";
export interface RGetInfo {
  content: {
    title: string;
    value: string[];
  };
}

export interface PGetInfo {
  keyword: string;
}

// 登录
export const login = get<null, PGetInfo>("/agent/getCurrentAgentInfo");

// 退出登录

export const logOut = post<RGetInfo, PGetInfo>("/agent/logout");
