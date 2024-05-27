import { CrudProps } from "@/components";
import { SEX_LIST } from "@/utils/constants";
import { Input, Select } from "antd";
import { User } from "app";

const searchs: CrudProps<User>["searchs"] = [
  {
    name: "username",
    label: "用户名",
    formItem: <Input placeholder="请输入" />,
  },
  {
    name: "sex",
    label: "性别",
    formItem: <Select placeholder="请选择" options={SEX_LIST} />,
  },
  { name: "tel", label: "联系方式", formItem: <Input placeholder="请输入" /> },
];

export default searchs;
