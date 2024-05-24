import { CrudProps } from "@/components";
import { Input, Select } from "antd";
import { Author, Book, Category } from "app";

const forms: (_?: Author[], _2?: Category[]) => CrudProps<Book>["forms"] = (
  authors,
  categorys,
) => [
  {
    name: "name",
    label: "书名",
    formItem: <Input placeholder="请输入书名" allowClear />,
    rules: [{ required: true, message: "请输入书名" }],
  },
  {
    name: "author_id",
    label: "作者",
    formItem: (
      <Select placeholder="请选择作者" allowClear showSearch>
        {authors?.map((item) => (
          <Select.Option key={item.id} value={item.id}>
            {item.name}
          </Select.Option>
        ))}
      </Select>
    ),
    rules: [{ required: true, message: "请选择作者" }],
  },
  {
    name: "category_id",
    label: "分类",
    formItem: (
      <Select placeholder="请选择分类" allowClear showSearch>
        {categorys?.map((item) => (
          <Select.Option key={item.id} value={item.id}>
            {item.name}
          </Select.Option>
        ))}
      </Select>
    ),
    rules: [{ required: true, message: "请选择分类" }],
  },
  {
    name: "fetch_url",
    label: "爬取地址",
    formItem: <Input placeholder="请输入爬取地址" allowClear />,
    rules: [{ type: "url", message: "请输入正确的爬取地址" }],
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
