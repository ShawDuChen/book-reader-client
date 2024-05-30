import request from "@/utils/request";
import { Code, CodeGenerateResult, PageQuery, PageResult } from "app";

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

export const generateCode = (id: number) => {
  return request<CodeGenerateResult>({
    url: `/code/${id}/generate`,
    method: "get",
  });
};

export const exportCode = (data: Partial<Code>) => {
  return request<Blob>({
    url: "/code/export",
    method: "post",
    data,
    responseType: "blob",
  });
};
