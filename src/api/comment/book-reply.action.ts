import request from "@/utils/request";
import { BookReplyAction, PageQuery, PageResult } from "app";

export const fetchBookReplyActionList = (
  params: PageQuery<Partial<BookReplyAction>>,
) => {
  return request<PageResult<BookReplyAction>>({
    url: "/book_reply_action",
    method: "get",
    params,
  });
};

export const getBookReplyAction = (id: number) => {
  return request<BookReplyAction>({
    url: `/book_reply_action/${id}`,
    method: "get",
  });
};

export const createBookReplyAction = (data: BookReplyAction) => {
  return request<BookReplyAction>({
    url: "/book_reply_action",
    method: "post",
    data,
  });
};

export const updateBookReplyAction = (data: BookReplyAction) => {
  return request<BookReplyAction>({
    url: `/book_reply_action/${data.id}`,
    method: "put",
    data,
  });
};

export const deleteBookReplyAction = (id: number) => {
  return request<BookReplyAction>({
    url: `/book_reply_action/${id}`,
    method: "delete",
  });
};

export const allBookReplyAction = () => {
  return request<BookReplyAction[]>({
    url: "/book_reply_action/all",
    method: "get",
  });
};

export const exportBookReplyAction = (data: Partial<BookReplyAction>) => {
  return request<Blob>({
    url: "/book_reply_action/export",
    method: "post",
    data,
    responseType: "blob",
  });
};
