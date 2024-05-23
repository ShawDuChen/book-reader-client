import request from "@/utils/request";
import { Code, PageQuery, PageResult } from "app";

export const fetchCodeList = (params: PageQuery<Partial<Code>>) => {
  return request<PageResult<Code>>({
    url: "/code",
    method: "get",
    params,
  });
};

export const getCode = (id: number) => {
  return request<Code>({
    url: `/code/${id}`,
    method: "get",
  });
};

export const createCode = (data: Code) => {
  return request<Code>({
    url: "/code",
    method: "post",
    data,
  });
};

export const updateCode = (data: Code) => {
  return request<Code>({
    url: `/code/${data.id}`,
    method: "put",
    data,
  });
};

export const deleteCode = (id: number) => {
  return request<Code>({
    url: `/code/${id}`,
    method: "delete",
  });
};
