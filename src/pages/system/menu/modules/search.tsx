import { CrudProps } from "@/components";
import { Input } from "antd";
import { Menu } from "app";

const searchs: CrudProps<Menu>["searchs"] = [
  { name: "name", label: "菜单名称", formItem: <Input placeholder="请输入" /> },
  { name: "path", label: "菜单路由", formItem: <Input placeholder="请输入" /> },
];

export default searchs;
