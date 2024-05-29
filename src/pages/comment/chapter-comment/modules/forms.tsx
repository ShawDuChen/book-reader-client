import { CrudProps } from "@/components";
import { COMMENT_STATUS_LIST } from "@/utils/constants";
import { Input, Select } from "antd";
import { Chapter, ChapterComment } from "app";

const forms: (_?: Chapter[]) => CrudProps<ChapterComment>["forms"] = (
  books,
) => [
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
    name: "chapter_id",
    label: "评论章节",
    formItem: (
      <Select
        placeholder="请选择评论章节"
        maxLength={32}
        options={books?.map((item) => ({
          value: item.id,
          label: item.content,
        }))}
      />
    ),
    rules: [{ required: true, message: "请选择评论章节" }],
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
