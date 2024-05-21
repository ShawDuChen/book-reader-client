import request from "@/utils/request";
import { PageQuery, PageResult, Role } from "app";

export const fetchRoleList = (params: PageQuery<Partial<Role>>) => {
  return request<PageResult<Role>>({
    url: "/role",
    method: "get",
    params,
  });
};

export const getRole = (id: number) => {
  return request<Role>({
    url: `/role/${id}`,
    method: "get",
  });
};

export const createRole = (data: Role) => {
  return request({
    url: "/role",
    method: "post",
    data,
  });
};

export const updateRole = (data: Role) => {
  return request({
    url: `/role/${data.id}`,
    method: "put",
    data,
  });
};

export const deleteRole = (id: number) => {
  return request({
    url: `/role/${id}`,
    method: "delete",
  });
};
