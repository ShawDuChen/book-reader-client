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
  return request<Chapter>({
    url: "/chapter",
    method: "post",
    data,
  });
};

export const updateChapter = (data: Chapter) => {
  return request<Chapter>({
    url: `/chapter/${data.id}`,
    method: "put",
    data,
  });
};

export const deleteChapter = (id: number) => {
  return request<Chapter>({
    url: `/chapter/${id}`,
    method: "delete",
  });
};

export const crawlChapterContent = (id: number) => {
  return request<Chapter>({
    url: `/chapter/${id}/crawl`,
    method: "get",
  });
};

export const allChapter = () => {
  return request<Chapter[]>({
    url: "/chapter/all",
    method: "get",
  });
};
export const exportChapter = (data: Partial<Chapter>) => {
  return request<Blob>({
    url: "/chapter/export",
    method: "post",
    data,
    responseType: "blob",
  });
};

export const batchCrawlChapters = (ids: number[]) => {
  return request({
    url: "/chapter/bacth_crawl",
    method: "post",
    data: { ids },
  });
};
