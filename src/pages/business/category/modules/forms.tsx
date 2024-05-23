import { CrudProps } from "@/components";
import { Input } from "antd";
import { Category } from "app";

const forms: CrudProps<Category>["forms"] = [
  {
    name: "name",
    label: "分类名称",
    formItem: <Input placeholder="请输入" />,
    rules: [{ required: true, message: "请输入名称" }],
  },
  {
    name: "identify",
    label: "分类标识",
    formItem: <Input placeholder="请输入" />,
    rules: [{ required: true, message: "请输入表示" }],
  },
  {
    name: "remark",
    label: "备注",
    formItem: (
      <Input.TextArea placeholder="请输入" rows={3} maxLength={200} showCount />
    ),
  },
];

export default forms;
