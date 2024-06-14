import request from "@/utils/request";
import { Ads, PageQuery, PageResult } from "app";

export const fetchAdsList = (params: PageQuery<Partial<Ads>>) => {
  return request<PageResult<Ads>>({
    url: "/ads",
    method: "get",
    params,
  });
};

export const getAds = (id: number) => {
  return request<Ads>({
    url: `/ads/${id}`,
    method: "get",
  });
};

export const createAds = (data: Ads) => {
  return request<Ads>({
    url: "/ads",
    method: "post",
    data,
  });
};

export const updateAds = (data: Ads) => {
  return request<Ads>({
    url: `/ads/${data.id}`,
    method: "put",
    data,
  });
};

export const deleteAds = (id: number) => {
  return request<Ads>({
    url: `/ads/${id}`,
    method: "delete",
  });
};

export const allAds = () => {
  return request<Ads[]>({
    url: "/ads/all",
    method: "get",
  });
};

export const exportAds = (data: Partial<Ads>) => {
  return request<Blob>({
    url: "/ads/export",
    method: "post",
    data,
    responseType: "blob",
  });
};
