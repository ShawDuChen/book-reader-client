import { CrudProps } from "@/components";
import { Input } from "antd";
import { Advertiser } from "app";

const searchs: CrudProps<Advertiser>["searchs"] = [
  { name: "name", label: "投放人", formItem: <Input placeholder="请输入" /> },
  { name: "tel", label: "联系电话", formItem: <Input placeholder="请输入" /> },
  {
    name: "address",
    label: "联系地址",
    formItem: <Input placeholder="请输入" />,
  },
];

export default searchs;
