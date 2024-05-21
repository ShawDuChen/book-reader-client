import request from "@/utils/request";
import { PageQuery, PageResult, Role } from "app";

export const fetchRoleList = (params: PageQuery<Partial<Role>>) => {
  return request<PageResult<Role>>({
    url: "/role",
    method: "get",
    params,
  });
};
