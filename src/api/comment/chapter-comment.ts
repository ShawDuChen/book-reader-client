import request from "@/utils/request";
import { ChapterComment, PageQuery, PageResult } from "app";

export const fetchChapterCommentList = (
  params: PageQuery<Partial<ChapterComment>>,
) => {
  return request<PageResult<ChapterComment>>({
    url: "/chapter_comment",
    method: "get",
    params,
  });
};

export const getChapterComment = (id: number) => {
  return request<ChapterComment>({
    url: `/chapter_comment/${id}`,
    method: "get",
  });
};

export const createChapterComment = (data: ChapterComment) => {
  return request<ChapterComment>({
    url: "/chapter_comment",
    method: "post",
    data,
  });
};

export const updateChapterComment = (data: ChapterComment) => {
  return request<ChapterComment>({
    url: `/chapter_comment/${data.id}`,
    method: "put",
    data,
  });
};

export const deleteChapterComment = (id: number) => {
  return request<ChapterComment>({
    url: `/chapter_comment/${id}`,
    method: "delete",
  });
};

export const allChapterComment = () => {
  return request<ChapterComment[]>({
    url: "/chapter_comment/all",
    method: "get",
  });
};
