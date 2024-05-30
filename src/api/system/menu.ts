import request from "@/utils/request";
import { Menu, PageQuery, PageResult } from "app";

export const fetchMenuList = (params: PageQuery<Partial<Menu>>) => {
  return request<PageResult<Menu>>({
    url: "/menu",
    method: "get",
    params,
  });
};

export const getMenu = (id: number) => {
  return request<Menu>({
    url: `/menu/${id}`,
    method: "get",
  });
};

export const createMenu = (data: Menu) => {
  return request<Menu>({
    url: "/menu",
    method: "post",
    data,
  });
};

export const updateMenu = (data: Menu) => {
  return request<Menu>({
    url: `/menu/${data.id}`,
    method: "put",
    data,
  });
};

export const deleteMenu = (id: number) => {
  return request<Menu>({
    url: `/menu/${id}`,
    method: "delete",
  });
};

export const allMenu = () => {
  return request<Menu[]>({
    url: "/menu/all",
    method: "get",
  });
};

export const listTreeMenu = () => {
  return request<PageResult<Menu>>({
    url: "/menu/tree",
    method: "get",
  });
};

export const exportMenu = (data: Partial<Menu>) => {
  return request<Blob>({
    url: "/menu/export",
    method: "post",
    data,
    responseType: "blob",
  });
};

export const bindRoles = (menu_id: number, role_ids: number) => {
  return request<Menu>({
    url: `/menu/${menu_id}/bind_roles`,
    method: "post",
    data: { ids: role_ids },
  });
};
