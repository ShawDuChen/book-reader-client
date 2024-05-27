import request from "@/utils/request";
import { Book, Chapter, PageQuery, PageResult } from "app";

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
  return request<Book>({
    url: "/book",
    method: "post",
    data,
  });
};

export const updateBook = (data: Book) => {
  return request<Book>({
    url: `/book/${data.id}`,
    method: "put",
    data,
  });
};

export const deleteBook = (id: number) => {
  return request<Book>({
    url: `/book/${id}`,
    method: "delete",
  });
};

export const allBook = () => {
  return request<Book[]>({
    url: "/book/all",
    method: "get",
  });
};

export const startCrawlBook = (id: number) => {
  return request({
    url: `/book/${id}/startCrawl`,
    method: "get",
  });
};

export const fetchBookChapters = (id: number) => {
  return request<Chapter[]>({
    url: `/book/${id}/chapters`,
    method: "get",
  });
};
