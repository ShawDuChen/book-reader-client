import { CrudProps } from "@/components";
import { Input } from "antd";
import { CrawlRule } from "app";

const searchs: CrudProps<CrawlRule>["searchs"] = [
  { name: "name", label: "规则名称", formItem: <Input placeholder="请输入" /> },
  {
    name: "website_url",
    label: "站点地址",
    formItem: <Input placeholder="请输入" />,
  },
];

export default searchs;
