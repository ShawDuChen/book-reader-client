import request from "@/utils/request";
import { ChapterReply, PageQuery, PageResult } from "app";

export const fetchChapterReplyList = (
  params: PageQuery<Partial<ChapterReply>>,
) => {
  return request<PageResult<ChapterReply>>({
    url: "/chapter_reply",
    method: "get",
    params,
  });
};

export const getChapterReply = (id: number) => {
  return request<ChapterReply>({
    url: `/chapter_reply/${id}`,
    method: "get",
  });
};

export const createChapterReply = (data: ChapterReply) => {
  return request<ChapterReply>({
    url: "/chapter_reply",
    method: "post",
    data,
  });
};

export const updateChapterReply = (data: ChapterReply) => {
  return request<ChapterReply>({
    url: `/chapter_reply/${data.id}`,
    method: "put",
    data,
  });
};

export const deleteChapterReply = (id: number) => {
  return request<ChapterReply>({
    url: `/chapter_reply/${id}`,
    method: "delete",
  });
};

export const allChapterReply = () => {
  return request<ChapterReply[]>({
    url: "/chapter_reply/all",
    method: "get",
  });
};
