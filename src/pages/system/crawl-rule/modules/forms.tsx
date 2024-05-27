import { CrudProps } from "@/components";
import { Input } from "antd";
import { CrawlRule } from "app";

const forms: CrudProps<CrawlRule>["forms"] = [
  {
    name: "name",
    label: "规则名称",
    formItem: <Input placeholder="请输入规则名称" maxLength={32} />,
    rules: [{ required: true, message: "请输入规则名称" }],
  },
  {
    name: "website_url",
    label: "站点地址",
    formItem: <Input placeholder="请输入站点地址" maxLength={255} />,
    rules: [
      { required: true, message: "请输入站点地址" },
      { type: "url", message: "请输入正确的URL地址" },
    ],
  },
  {
    name: "list_selector",
    label: "列表选择器",
    formItem: <Input placeholder="请输入列表选择器" maxLength={64} />,
    rules: [{ required: true, message: "请输入列表选择器" }],
  },
  {
    name: "content_selector",
    label: "内容选择器",
    formItem: <Input placeholder="请输入内容选择器" maxLength={64} />,
    rules: [{ required: true, message: "请输入内容选择器" }],
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
