import request from "@/utils/request";
import { LogItem, PageQuery, PageResult } from "app";

export function fetchLogs(params: PageQuery) {
  return request<PageResult<LogItem>>({
    url: "/log",
    method: "get",
    params: params,
  });
}

export const exportLogItem = (data: Partial<LogItem>) => {
  return request<Blob>({
    url: "/log/export",
    method: "post",
    data,
    responseType: "blob",
  });
};
