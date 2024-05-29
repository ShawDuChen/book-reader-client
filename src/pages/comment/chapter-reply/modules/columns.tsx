import { CrudProps } from "@/components";
import { ChapterReply } from "app";

const columns: CrudProps<ChapterReply>["columns"] = [
  { dataIndex: "id", title: "ID" },
  { dataIndex: "content", title: "回复内容" },
  {
    dataIndex: "comment_id",
    title: "评论",
    render: (_, record) => record.comment?.content,
  },
  {
    dataIndex: "user_id",
    title: "回复人",
    render: (_, record) => record.user?.nickname,
  },
  { dataIndex: "like_count", title: "点赞数" },
  { dataIndex: "dislike_count", title: "点踩数" },
  { dataIndex: "remark", title: "备注" },
  { dataIndex: "created_at", title: "创建日期" },
  { dataIndex: "created_by", title: "创建人" },
  { dataIndex: "updated_at", title: "更新日期" },
  { dataIndex: "updated_by", title: "最后操作人" },
];
export default columns;
