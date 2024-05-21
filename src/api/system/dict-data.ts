import request from "@/utils/request";
import { DictionaryData, PageQuery, PageResult } from "app";

export const fetchDictDataList = (
  params: PageQuery<Partial<DictionaryData>>,
) => {
  return request<PageResult<DictionaryData>>({
    url: "/dict_data",
    method: "get",
    params,
  });
};

export const getDictData = (id: number) => {
  return request<DictionaryData>({
    url: `/dict_data/${id}`,
    method: "get",
  });
};

export const createDictData = (data: DictionaryData) => {
  return request<DictionaryData>({
    url: "/dict_data",
    method: "post",
    data,
  });
};

export const updateDictData = (data: DictionaryData) => {
  return request<DictionaryData>({
    url: `/dict_data/${data.id}`,
    method: "put",
    data,
  });
};

export const deleteDictData = (id: number) => {
  return request({
    url: `/dict_data/${id}`,
    method: "delete",
  });
};
