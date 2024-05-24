import { CrudProps } from "@/components";
import { Input, Select } from "antd";
import { Book, Chapter } from "app";

const searchs: (_?: Book[]) => CrudProps<Chapter>["searchs"] = (books) => [
  {
    name: "title",
    label: "章节名",
    formItem: <Input placeholder="请输入" allowClear />,
  },
  {
    name: "book_id",
    label: "所属书籍",
    formItem: (
      <Select
        placeholder="请选择"
        allowClear
        options={books?.map((item) => ({ value: item.id, label: item.name }))}
        style={{ width: 120 }}
      />
    ),
  },
];

export default searchs;
