/* eslint-disable @typescript-eslint/no-explicit-any */
import * as AntdIcon from "@ant-design/icons";
import { SelectProps } from "antd";
import { HttpRequestHeader } from "antd/es/upload/interface";
import { getToken } from "./token";
import { SiteFooterSubType, SiteFooterType, SourceType } from "app";

export const METHODS = ["GET", "POST", "PUT", "DELETE"];
export const STATUS_CODES = [200, 201, 204, 400, 401, 403, 404, 500];
export const SEX_LIST = [
  { value: "M", label: "男" },
  { value: "F", label: "女" },
];
export const STATUS_LIST = [
  { value: 1, label: "可用" },
  { value: 0, label: "不可用" },
];

export const STATUS_MAP = STATUS_LIST.reduce(
  (prev, curr) => {
    prev[curr.value] = curr.label;
    return prev;
  },
  {} as Record<string, string>,
);

export const COMMENT_STATUS: Record<number | string, string> = {
  0: "待审核",
  1: "审核通过",
  2: "审核失败",
};

export const COMMENT_STATUS_LIST = Object.keys(COMMENT_STATUS).map((value) => ({
  value: parseInt(value),
  label: COMMENT_STATUS[value],
}));

export const ICON_LIST: SelectProps["options"] = Object.keys(AntdIcon).map(
  (key) => ({
    value: key,
    label: (AntdIcon as any)[key] as any,
  }),
);

export const ICON_MAP: Record<string, any> = Object.keys(AntdIcon).reduce(
  (prev, curr) => {
    prev[curr] = (AntdIcon as any)[curr];
    return prev;
  },
  {} as Record<string, any>,
);

export const httpHeader: HttpRequestHeader = {
  Authorization: `Bearer ${getToken()}`,
};

export const SOURCE_TYPE: { value: SourceType; label: SourceType }[] = [
  { value: "IMAGE", label: "IMAGE" },
  { value: "VIDEO", label: "VIDEO" },
  { value: "AUDIO", label: "AUDIO" },
  { value: "OTHER", label: "OTHER" },
];

export const SITE_FOOTER_TYPES: {
  value: SiteFooterType;
  label: SiteFooterType;
}[] = [
  { value: "ABOUT", label: "ABOUT" },
  { value: "CONTACT", label: "CONTACT" },
  { value: "NEWS", label: "NEWS" },
  { value: "SOCIAL", label: "SOCIAL" },
];
export const SITE_FOOTER_SUB_TYPES: {
  value: SiteFooterSubType;
  label: SiteFooterSubType;
}[] = [
  { value: "COMPANY", label: "COMPANY" },
  { value: "PLATFORM", label: "PLATFORM" },
  { value: "PAPER", label: "PAPER" },
];
