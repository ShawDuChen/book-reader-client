import request from "@/utils/request";
import { Book, PageQuery, PageResult } from "app";

export const fetchBookList = (params: PageQuery<Partial<Book>>) => {
  return request<PageResult<Book>>({
    url: "/book",
    method: "get",
    params,
  });
};

export const getBook = (id: number) => {
  return request<Book>({
    url: `/book/${id}`,
    method: "get",
  });
};

export const createBook = (data: Book) => {
  return request({
    url: "/book",
    method: "post",
    data,
  });
};

export const updateBook = (data: Book) => {
  return request({
    url: `/book/${data.id}`,
    method: "put",
    data,
  });
};

export const deleteBook = (id: number) => {
  return request({
    url: `/book/${id}`,
    method: "delete",
  });
};
