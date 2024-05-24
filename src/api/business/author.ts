import request from "@/utils/request";
import { Author, PageQuery, PageResult } from "app";

export const fetchAuthorList = (params: PageQuery<Partial<Author>>) => {
  return request<PageResult<Author>>({
    url: "/author",
    method: "get",
    params,
  });
};

export const getAuthor = (id: number) => {
  return request<Author>({
    url: `/author/${id}`,
    method: "get",
  });
};

export const createAuthor = (data: Author) => {
  return request<Author>({
    url: "/author",
    method: "post",
    data,
  });
};

export const updateAuthor = (data: Author) => {
  return request<Author>({
    url: `/author/${data.id}`,
    method: "put",
    data,
  });
};

export const deleteAuthor = (id: number) => {
  return request<Author>({
    url: `/author/${id}`,
    method: "delete",
  });
};

export const authorAll = () => {
  return request<Author[]>({
    url: "/author/all",
    method: "get",
  });
};
