import request from "@/utils/request";
import { BookCommentAction, PageQuery, PageResult } from "app";

export const fetchBookCommentActionList = (
  params: PageQuery<Partial<BookCommentAction>>,
) => {
  return request<PageResult<BookCommentAction>>({
    url: "/book_comment_action",
    method: "get",
    params,
  });
};

export const getBookCommentAction = (id: number) => {
  return request<BookCommentAction>({
    url: `/book_comment_action/${id}`,
    method: "get",
  });
};

export const createBookCommentAction = (data: BookCommentAction) => {
  return request<BookCommentAction>({
    url: "/book_comment_action",
    method: "post",
    data,
  });
};

export const updateBookCommentAction = (data: BookCommentAction) => {
  return request<BookCommentAction>({
    url: `/book_comment_action/${data.id}`,
    method: "put",
    data,
  });
};

export const deleteBookCommentAction = (id: number) => {
  return request<BookCommentAction>({
    url: `/book_comment_action/${id}`,
    method: "delete",
  });
};

export const allBookCommentAction = () => {
  return request<BookCommentAction[]>({
    url: "/book_comment_action/all",
    method: "get",
  });
};
