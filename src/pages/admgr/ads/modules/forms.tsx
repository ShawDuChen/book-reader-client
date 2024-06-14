import { CrudProps } from "@/components";
import { STATUS_LIST } from "@/utils/constants";
import { DatePicker, Input, Select } from "antd";
import { Ads, Advertiser } from "app";

const forms: (_?: Advertiser[]) => CrudProps<Ads>["forms"] = (advertisers) => [
  {
    name: "title",
    label: "广告标题",
    formItem: <Input placeholder="请输入广告标题" maxLength={255} />,
    rules: [{ required: true, message: "请输入广告标题" }],
  },
  {
    name: "link",
    label: "广告外链接",
    formItem: <Input placeholder="请输入广告外链接" maxLength={255} />,
    rules: [{ required: true, message: "请输入广告外链接" }],
  },
  {
    name: "image",
    label: "广告图片",
    formItem: <Input placeholder="请输入广告图片" maxLength={255} />,
  },
  {
    name: "description",
    label: "广告描述",
    formItem: (
      <Input.TextArea
        placeholder="请输入广告描述"
        maxLength={255}
        rows={3}
        showCount
      />
    ),
  },
  {
    name: "advertiser_id",
    label: "投放人",
    formItem: (
      <Select
        placeholder="请选择投放人"
        allowClear
        showSearch
        options={advertisers?.map((item) => ({
          value: item.id,
          label: item.name,
        }))}
      />
    ),
    rules: [{ required: true, message: "请选择投放人" }],
  },
  {
    name: "expired_at",
    label: "过期时间",
    formItem: (
      <DatePicker
        type="date"
        showTime
        placeholder="请选择过期时间"
        format={{
          format: "YYYY-MM-DD HH:mm:ss",
        }}
      />
    ),
  },
  {
    name: "status",
    label: "状态",
    formItem: (
      <Select
        placeholder="请选择状态"
        allowClear
        showSearch
        options={STATUS_LIST}
      />
    ),
    rules: [{ required: true, message: "请选择状态" }],
  },
  {
    name: "remark",
    label: "备注",
    formItem: (
      <Input.TextArea
        placeholder="请输入备注"
        maxLength={255}
        rows={3}
        showCount
      />
    ),
  },
];

export default forms;
