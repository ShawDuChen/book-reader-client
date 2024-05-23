import type { CrudProps } from "@/components";
import { Input } from "antd";
import { Code } from "app";

const searchs: CrudProps<Code>["searchs"] = [
  {
    name: "name",
    label: "表名",
    formItem: <Input placeholder="请输入" allowClear />,
  },
];

export default searchs;
