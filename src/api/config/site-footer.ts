import request from "@/utils/request";
import { SiteFooter, PageQuery, PageResult } from "app";

export const fetchSiteFooterList = (params: PageQuery<Partial<SiteFooter>>) => {
  return request<PageResult<SiteFooter>>({
    url: "/site_footer",
    method: "get",
    params,
  });
};

export const getSiteFooter = (id: number) => {
  return request<SiteFooter>({
    url: `/site_footer/${id}`,
    method: "get",
  });
};

export const createSiteFooter = (data: SiteFooter) => {
  return request<SiteFooter>({
    url: "/site_footer",
    method: "post",
    data,
  });
};

export const updateSiteFooter = (data: SiteFooter) => {
  return request<SiteFooter>({
    url: `/site_footer/${data.id}`,
    method: "put",
    data,
  });
};

export const deleteSiteFooter = (id: number) => {
  return request<SiteFooter>({
    url: `/site_footer/${id}`,
    method: "delete",
  });
};

export const allSiteFooter = () => {
  return request<SiteFooter[]>({
    url: "/site_footer/all",
    method: "get",
  });
};

export const exportSiteFooter = (data: Partial<SiteFooter>) => {
  return request<Blob>({
    url: "/site_footer/export",
    method: "post",
    data,
    responseType: "blob",
  });
};
