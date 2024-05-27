import request from "@/utils/request";
import {
  LoginFieldType,
  PageQuery,
  PageResult,
  User,
  UserUpdatePassword,
} from "app";

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
  return request<User>({
    url: "/user",
    method: "post",
    data,
  });
};

export const updateUser = (data: User) => {
  return request<User>({
    url: `/user/${data.id}`,
    method: "put",
    data,
  });
};

export const deleteUser = (id: number) => {
  return request<User>({
    url: `/user/${id}`,
    method: "delete",
  });
};

export const getUserInfo = () => {
  return request<User>({
    url: "/user/info",
    method: "get",
  });
};

export const updateUserPassword = (data: UserUpdatePassword) => {
  return request({
    url: "/user/update_password",
    method: "post",
    data,
  });
};

export const allUser = () => {
  return request<User[]>({
    url: "/user/all",
    method: "get",
  });
};
