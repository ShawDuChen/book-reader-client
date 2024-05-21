import request from "@/utils/request";
import { LoginFieldType, PageQuery, PageResult, User } from "app";

export const login = (data: LoginFieldType) => {
  return request<{ token: string }>({
    url: "/auth/login",
    method: "post",
    data,
  });
};

export const fetchUserList = (params: PageQuery<Partial<User>>) => {
  return request<PageResult<User>>({
    url: "/user",
    method: "get",
    params,
  });
};
