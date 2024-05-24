import request from "@/utils/request";
import { Category, PageQuery, PageResult } from "app";

export const fetchCategoryList = (params: PageQuery<Partial<Category>>) => {
  return request<PageResult<Category>>({
    url: "/category",
    method: "get",
    params,
  });
};

export const getCategory = (id: number) => {
  return request<Category>({
    url: `/category/${id}`,
    method: "get",
  });
};

export const createCategory = (data: Category) => {
  return request<Category>({
    url: "/category",
    method: "post",
    data,
  });
};

export const updateCategory = (data: Category) => {
  return request<Category>({
    url: `/category/${data.id}`,
    method: "put",
    data,
  });
};

export const deleteCategory = (id: number) => {
  return request<Category>({
    url: `/category/${id}`,
    method: "delete",
  });
};

export const categoryAll = () => {
  return request<Category[]>({
    url: "/category/all",
    method: "get",
  });
};
