import { CrudProps } from "@/components";
import { Input } from "antd";
import { Book } from "app";

const searchs: CrudProps<Book>["searchs"] = [
  {
    name: "name",
    label: "书名",
    formItem: <Input placeholder="请输入" allowClear />,
  },
];

export default searchs;
