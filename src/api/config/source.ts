import request from "@/utils/request";
import { Source, PageQuery, PageResult } from "app";

export const fetchSourceList = (params: PageQuery<Partial<Source>>) => {
  return request<PageResult<Source>>({
    url: "/source",
    method: "get",
    params,
  });
};

export const getSource = (id: number) => {
  return request<Source>({
    url: `/source/${id}`,
    method: "get",
  });
};

export const createSource = (data: Source) => {
  return request<Source>({
    url: "/source",
    method: "post",
    data,
  });
};

export const updateSource = (data: Source) => {
  return request<Source>({
    url: `/source/${data.id}`,
    method: "put",
    data,
  });
};

export const deleteSource = (id: number) => {
  return request<Source>({
    url: `/source/${id}`,
    method: "delete",
  });
};

export const allSource = () => {
  return request<Source[]>({
    url: "/source/all",
    method: "get",
  });
};

export const exportSource = (data: Partial<Source>) => {
  return request<Blob>({
    url: "/source/export",
    method: "post",
    data,
    responseType: "blob",
  });
};
