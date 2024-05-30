import request from "@/utils/request";
import { BookReply, PageQuery, PageResult } from "app";

export const fetchBookReplyList = (params: PageQuery<Partial<BookReply>>) => {
  return request<PageResult<BookReply>>({
    url: "/book_reply",
    method: "get",
    params,
  });
};

export const getBookReply = (id: number) => {
  return request<BookReply>({
    url: `/book_reply/${id}`,
    method: "get",
  });
};

export const createBookReply = (data: BookReply) => {
  return request<BookReply>({
    url: "/book_reply",
    method: "post",
    data,
  });
};

export const updateBookReply = (data: BookReply) => {
  return request<BookReply>({
    url: `/book_reply/${data.id}`,
    method: "put",
    data,
  });
};

export const deleteBookReply = (id: number) => {
  return request<BookReply>({
    url: `/book_reply/${id}`,
    method: "delete",
  });
};

export const allBookReply = () => {
  return request<BookReply[]>({
    url: "/book_reply/all",
    method: "get",
  });
};

export const exportBookReply = (data: Partial<BookReply>) => {
  return request<Blob>({
    url: "/book_reply/export",
    method: "post",
    data,
    responseType: "blob",
  });
};
