import request from "@/utils/request";
import { LogItem, PageQuery, PageResult } from "app";

export function fetchLogs(params: PageQuery) {
  return request<PageResult<LogItem>>({
    url: "/log",
    method: "get",
    params: params,
  });
}
