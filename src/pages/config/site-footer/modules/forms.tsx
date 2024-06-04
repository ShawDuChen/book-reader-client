import { CrudProps } from "@/components";
import { SITE_FOOTER_SUB_TYPES, SITE_FOOTER_TYPES } from "@/utils/constants";
import { Input, Select } from "antd";
import { SiteFooter } from "app";

const forms: CrudProps<SiteFooter>["forms"] = [
  {
    name: "title",
    label: "标题",
    formItem: <Input placeholder="请输入标题" maxLength={255} />,
    rules: [{ required: true, message: "请输入标题" }],
  },
  {
    name: "link",
    label: "外连接",
    formItem: <Input placeholder="请输入外连接" maxLength={255} />,
    rules: [{ type: "url", message: "请输入链接格式" }],
  },
  {
    name: "description",
    label: "描述",
    formItem: (
      <Input.TextArea
        placeholder="请输入描述"
        maxLength={255}
        rows={3}
        showCount
      />
    ),
  },
  {
    name: "type",
    label: "类型",
    formItem: (
      <Select
        placeholder="请选择类型"
        maxLength={32}
        options={SITE_FOOTER_TYPES}
      />
    ),
    rules: [{ required: true, message: "请选择类型" }],
  },
  {
    name: "sub_type",
    label: "子类型",
    formItem: (
      <Select
        placeholder="请选择子类型"
        maxLength={32}
        options={SITE_FOOTER_SUB_TYPES}
      />
    ),
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
