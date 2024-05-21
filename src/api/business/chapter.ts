import request from "@/utils/request";
import { Chapter, PageQuery, PageResult } from "app";

export const fetchChapterList = (params: PageQuery<Partial<Chapter>>) => {
  return request<PageResult<Chapter>>({
    url: "/chapter",
    method: "get",
    params,
  });
};

export const getChapter = (id: number) => {
  return request<Chapter>({
    url: `/chapter/${id}`,
    method: "get",
  });
};

export const createChapter = (data: Chapter) => {
  return request({
    url: "/chapter",
    method: "post",
    data,
  });
};

export const updateChapter = (data: Chapter) => {
  return request({
    url: `/chapter/${data.id}`,
    method: "put",
    data,
  });
};

export const deleteChapter = (id: number) => {
  return request({
    url: `/chapter/${id}`,
    method: "delete",
  });
};
