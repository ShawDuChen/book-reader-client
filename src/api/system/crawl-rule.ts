import request from "@/utils/request";
import { CrawlRule, PageQuery, PageResult } from "app";

export const fetchCrawlRuleList = (params: PageQuery<Partial<CrawlRule>>) => {
  return request<PageResult<CrawlRule>>({
    url: "/crawl_rule",
    method: "get",
    params,
  });
};

export const getCrawlRule = (id: number) => {
  return request<CrawlRule>({
    url: `/crawl_rule/${id}`,
    method: "get",
  });
};

export const createCrawlRule = (data: CrawlRule) => {
  return request<CrawlRule>({
    url: "/crawl_rule",
    method: "post",
    data,
  });
};

export const updateCrawlRule = (data: CrawlRule) => {
  return request<CrawlRule>({
    url: `/crawl_rule/${data.id}`,
    method: "put",
    data,
  });
};

export const deleteCrawlRule = (id: number) => {
  return request<CrawlRule>({
    url: `/crawl_rule/${id}`,
    method: "delete",
  });
};

export const allCrawlRule = () => {
  return request<CrawlRule[]>({
    url: "/crawl_rule/all",
    method: "get",
  });
};

export const exportCrawlRule = (data: Partial<CrawlRule>) => {
  return request<Blob>({
    url: "/crawl_rule/export",
    method: "post",
    data,
    responseType: "blob",
  });
};
