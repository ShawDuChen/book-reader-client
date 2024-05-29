import { CrudProps } from "@/components";
import { COMMENT_STATUS_LIST } from "@/utils/constants";
import { Select } from "antd";
import { Chapter, ChapterComment, User } from "app";

const searchs: (
  _0?: User[],
  _1?: Chapter[],
) => CrudProps<ChapterComment>["searchs"] = (users, books) => [
  {
    name: "user_id",
    label: "评论人",
    formItem: (
      <Select
        placeholder="请选择"
        allowClear
        showSearch
        options={users?.map((user) => ({
          value: user.id,
          label: user.nickname,
        }))}
        style={{ width: 120 }}
      />
    ),
  },
  {
    name: "chapter_id",
    label: "评论章节",
    formItem: (
      <Select
        placeholder="请输入"
        allowClear
        showSearch
        options={books?.map((book) => ({
          value: book.id,
          label: book.content,
        }))}
        style={{ width: 120 }}
      />
    ),
  },
  {
    name: "status",
    label: "审核状态",
    formItem: (
      <Select
        placeholder="请选择"
        allowClear
        options={COMMENT_STATUS_LIST}
        style={{ width: 120 }}
      />
    ),
  },
];

export default searchs;
