import { CrudProps } from "@/components";
import { Input } from "antd";
import { Role } from "app";

const searchs: CrudProps<Role>["searchs"] = [
  { name: "name", label: "角色名称", formItem: <Input placeholder="请输入" /> },
  {
    name: "authorities",
    label: "权限字符串",
    formItem: <Input placeholder="请输入" />,
  },
];

export default searchs;
