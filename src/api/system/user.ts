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

export const getUser = (id: number) => {
  return request<User>({
    url: `/user/${id}`,
    method: "get",
  });
};

export const createUser = (data: User) => {
  return request({
    url: "/user",
    method: "post",
    data,
  });
};

export const updateUser = (data: User) => {
  return request({
    url: "/user",
    method: "put",
    data,
  });
};

export const deleteUser = (id: number) => {
  return request({
    url: `/user/${id}`,
    method: "delete",
  });
};
