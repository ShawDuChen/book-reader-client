import request from "@/utils/request";
import { Advertiser, PageQuery, PageResult } from "app";

export const fetchAdvertiserList = (params: PageQuery<Partial<Advertiser>>) => {
  return request<PageResult<Advertiser>>({
    url: "/advertiser",
    method: "get",
    params,
  });
};

export const getAdvertiser = (id: number) => {
  return request<Advertiser>({
    url: `/advertiser/${id}`,
    method: "get",
  });
};

export const createAdvertiser = (data: Advertiser) => {
  return request<Advertiser>({
    url: "/advertiser",
    method: "post",
    data,
  });
};

export const updateAdvertiser = (data: Advertiser) => {
  return request<Advertiser>({
    url: `/advertiser/${data.id}`,
    method: "put",
    data,
  });
};

export const deleteAdvertiser = (id: number) => {
  return request<Advertiser>({
    url: `/advertiser/${id}`,
    method: "delete",
  });
};

export const allAdvertiser = () => {
  return request<Advertiser[]>({
    url: "/advertiser/all",
    method: "get",
  });
};

export const exportAdvertiser = (data: Partial<Advertiser>) => {
  return request<Blob>({
    url: "/advertiser/export",
    method: "post",
    data,
    responseType: "blob",
  });
};
