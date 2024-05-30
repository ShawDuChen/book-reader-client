import request from "@/utils/request";
import { ChapterCommentAction, PageQuery, PageResult } from "app";

export const fetchChapterCommentActionList = (
  params: PageQuery<Partial<ChapterCommentAction>>,
) => {
  return request<PageResult<ChapterCommentAction>>({
    url: "/chapter_comment_action",
    method: "get",
    params,
  });
};

export const getChapterCommentAction = (id: number) => {
  return request<ChapterCommentAction>({
    url: `/chapter_comment_action/${id}`,
    method: "get",
  });
};

export const createChapterCommentAction = (data: ChapterCommentAction) => {
  return request<ChapterCommentAction>({
    url: "/chapter_comment_action",
    method: "post",
    data,
  });
};

export const updateChapterCommentAction = (data: ChapterCommentAction) => {
  return request<ChapterCommentAction>({
    url: `/chapter_comment_action/${data.id}`,
    method: "put",
    data,
  });
};

export const deleteChapterCommentAction = (id: number) => {
  return request<ChapterCommentAction>({
    url: `/chapter_comment_action/${id}`,
    method: "delete",
  });
};

export const allChapterCommentAction = () => {
  return request<ChapterCommentAction[]>({
    url: "/chapter_comment_action/all",
    method: "get",
  });
};

export const exportChapterCommentAction = (
  data: Partial<ChapterCommentAction>,
) => {
  return request<Blob>({
    url: "/chapter_comment_action/export",
    method: "post",
    data,
    responseType: "blob",
  });
};
