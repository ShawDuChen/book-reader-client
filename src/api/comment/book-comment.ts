import request from "@/utils/request";
import { BookComment, PageQuery, PageResult } from "app";

export const fetchBookCommentList = (
  params: PageQuery<Partial<BookComment>>,
) => {
  return request<PageResult<BookComment>>({
    url: "/book_comment",
    method: "get",
    params,
  });
};

export const getBookComment = (id: number) => {
  return request<BookComment>({
    url: `/book_comment/${id}`,
    method: "get",
  });
};

export const createBookComment = (data: BookComment) => {
  return request<BookComment>({
    url: "/book_comment",
    method: "post",
    data,
  });
};

export const updateBookComment = (data: BookComment) => {
  return request<BookComment>({
    url: `/book_comment/${data.id}`,
    method: "put",
    data,
  });
};

export const deleteBookComment = (id: number) => {
  return request<BookComment>({
    url: `/book_comment/${id}`,
    method: "delete",
  });
};

export const allBookComment = () => {
  return request<BookComment[]>({
    url: "/book_comment/all",
    method: "get",
  });
};

export const exportBookComment = (data: Partial<BookComment>) => {
  return request<Blob>({
    url: "/book_comment/export",
    method: "post",
    data,
    responseType: "blob",
  });
};
