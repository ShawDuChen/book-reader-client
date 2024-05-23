import { CrudProps } from "@/components";
import { Input } from "antd";
import { Category } from "app";

const searchs: CrudProps<Category>["searchs"] = [
  { name: "name", label: "分类名称", formItem: <Input placeholder="请输入" /> },
  {
    name: "identify",
    label: "分类标识",
    formItem: <Input placeholder="请输入" />,
  },
];

export default searchs;
