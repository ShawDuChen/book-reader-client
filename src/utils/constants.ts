/* eslint-disable @typescript-eslint/no-explicit-any */
import * as AntdIcon from "@ant-design/icons";
import { SelectProps } from "antd";

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
