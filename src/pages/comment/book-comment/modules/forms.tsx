import { CrudProps } from "@/components";
import { COMMENT_STATUS_LIST } from "@/utils/constants";
import { Input, Select } from "antd";
import { Book, BookComment } from "app";

const forms: (_?: Book[]) => CrudProps<BookComment>["forms"] = (books) => [
  {
    name: "content",
    label: "评论内容",
    formItem: (
      <Input.TextArea
        placeholder="请输入评论内容"
        maxLength={255}
        rows={5}
        showCount
      />
    ),
    rules: [{ required: true, message: "请输入评论内容" }],
  },
  {
    name: "book_id",
    label: "评论书籍",
    formItem: (
      <Select
        placeholder="请选择评论书籍"
        maxLength={32}
        options={books?.map((item) => ({
          value: item.id,
          label: item.name,
        }))}
      />
    ),
    rules: [{ required: true, message: "请选择评论书籍" }],
  },
  {
    name: "status",
    label: "审核状态",
    formItem: (
      <Select placeholder="请选择审核状态" options={COMMENT_STATUS_LIST} />
    ),
    rules: [{ required: true, message: "请选择审核状态" }],
  },
  {
    name: "remark",
    label: "备注",
    formItem: (
      <Input.TextArea
        placeholder="请输入备注"
        maxLength={255}
        rows={3}
        showCount
      />
    ),
  },
];

export default forms;
