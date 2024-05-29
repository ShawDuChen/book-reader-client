import { CrudProps } from "@/components";
import { Input, Select } from "antd";
import { ChapterComment, ChapterReply, User } from "app";

const forms: (
  _0?: ChapterComment[],
  _1?: User[],
) => CrudProps<ChapterReply>["forms"] = (comments, users) => [
  {
    name: "content",
    label: "回复内容",
    formItem: (
      <Input.TextArea
        placeholder="请输入回复内容"
        maxLength={255}
        rows={3}
        showCount
      />
    ),
    rules: [{ required: true, message: "请输入回复内容" }],
  },
  {
    name: "comment_id",
    label: "评论",
    formItem: (
      <Select
        placeholder="请选择评论"
        allowClear
        showSearch
        options={comments?.map((item) => ({
          value: item.id,
          label: item.content,
        }))}
      />
    ),
    rules: [{ required: true, message: "请选择评论" }],
  },
  {
    name: "user_id",
    label: "回复人",
    formItem: (
      <Select
        placeholder="请选择回复人"
        allowClear
        showSearch
        options={users?.map((item) => ({
          value: item.id,
          label: item.nickname,
        }))}
      />
    ),
    rules: [{ required: true, message: "请选择回复人" }],
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
