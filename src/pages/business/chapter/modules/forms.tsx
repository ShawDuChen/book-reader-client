import { CrudProps } from "@/components";
import { Input, Select } from "antd";
import { Book, Chapter } from "app";

const forms: (_?: Book[]) => CrudProps<Chapter>["forms"] = (books) => [
  {
    name: "no",
    label: "章节编号",
    formItem: <Input placeholder="请输入章节编号" />,
    rules: [{ required: true, message: "请输入章节编号" }],
  },
  {
    name: "title",
    label: "章节标题",
    formItem: <Input placeholder="请输入章节标题" />,
    rules: [{ required: true, message: "请输入章节标题" }],
  },
  {
    name: "content",
    label: "章节内容",
    formItem: (
      <Input.TextArea
        placeholder="请输入章节内容"
        rows={10}
        maxLength={10000}
        showCount
        allowClear
      />
    ),
    rules: [{ required: true, message: "请输入章节内容" }],
  },
  {
    name: "book_id",
    label: "所属书籍",
    formItem: (
      <Select
        placeholder="请选择所属书籍"
        allowClear
        showSearch
        options={books?.map((item) => ({ label: item.name, value: item.id }))}
      />
    ),
    rules: [{ required: true, message: "请选择所属书籍" }],
  },
  {
    name: "url",
    label: "地址",
    formItem: <Input placeholder="请输入地址" />,
    rules: [{ type: "url", message: "请输入正确的地址" }],
  },
];

export default forms;
