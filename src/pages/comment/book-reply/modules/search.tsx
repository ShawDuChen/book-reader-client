import { CrudProps } from "@/components";
import { Input, Select } from "antd";
import { BookComment, BookReply, User } from "app";

const searchs: (
  _0?: BookComment[],
  _1?: User[],
) => CrudProps<BookReply>["searchs"] = (comments, users) => [
  {
    name: "content",
    label: "回复内容",
    formItem: <Input placeholder="请输入" />,
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
        style={{ width: 120 }}
      />
    ),
  },
  {
    name: "user_id",
    label: "回复人ID",
    formItem: (
      <Select
        placeholder="请输入"
        allowClear
        showSearch
        options={users?.map((item) => ({
          value: item.id,
          label: item.nickname,
        }))}
        style={{ width: 120 }}
      />
    ),
  },
];

export default searchs;
