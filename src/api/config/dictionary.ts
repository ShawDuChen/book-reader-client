import request from "@/utils/request";
import { Dictionary, PageQuery, PageResult } from "app";

export const fetchDictionaryList = (params: PageQuery<Partial<Dictionary>>) => {
  return request<PageResult<Dictionary>>({
    url: "/dictionary",
    method: "get",
    params,
  });
};

export const fetchDictionary = (id: number) => {
  return request<Dictionary>({
    url: `/dictionary/${id}`,
    method: "get",
  });
};

export const createDictionary = (data: Dictionary) => {
  return request<Dictionary>({
    url: "/dictionary",
    method: "post",
    data,
  });
};

export const updateDictionary = (data: Dictionary) => {
  return request<Dictionary>({
    url: `/dictionary/${data.id}`,
    method: "put",
    data,
  });
};

export const deleteDictionary = (id: number) => {
  return request<Dictionary>({
    url: `/dictionary/${id}`,
    method: "delete",
  });
};

export const allDictionary = () => {
  return request<Dictionary[]>({
    url: "/dictionary/all",
    method: "get",
  });
};

export const exportDictionary = (data: Partial<Dictionary>) => {
  return request<Blob>({
    url: "/dictionary/export",
    method: "post",
    data,
    responseType: "blob",
  });
};
