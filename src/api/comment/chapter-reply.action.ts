import request from "@/utils/request";
import { ChapterReplyAction, PageQuery, PageResult } from "app";

export const fetchChapterReplyActionList = (
  params: PageQuery<Partial<ChapterReplyAction>>,
) => {
  return request<PageResult<ChapterReplyAction>>({
    url: "/chapter_reply_action",
    method: "get",
    params,
  });
};

export const getChapterReplyAction = (id: number) => {
  return request<ChapterReplyAction>({
    url: `/chapter_reply_action/${id}`,
    method: "get",
  });
};

export const createChapterReplyAction = (data: ChapterReplyAction) => {
  return request<ChapterReplyAction>({
    url: "/chapter_reply_action",
    method: "post",
    data,
  });
};

export const updateChapterReplyAction = (data: ChapterReplyAction) => {
  return request<ChapterReplyAction>({
    url: `/chapter_reply_action/${data.id}`,
    method: "put",
    data,
  });
};

export const deleteChapterReplyAction = (id: number) => {
  return request<ChapterReplyAction>({
    url: `/chapter_reply_action/${id}`,
    method: "delete",
  });
};

export const allChapterReplyAction = () => {
  return request<ChapterReplyAction[]>({
    url: "/chapter_reply_action/all",
    method: "get",
  });
};

export const exportChapterReplyAction = (data: Partial<ChapterReplyAction>) => {
  return request<Blob>({
    url: "/chapter_reply_action/export",
    method: "post",
    data,
    responseType: "blob",
  });
};
