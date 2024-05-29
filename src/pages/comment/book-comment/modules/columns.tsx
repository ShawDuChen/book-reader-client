import { CrudProps } from "@/components";
import { COMMENT_STATUS } from "@/utils/constants";
import { BookComment } from "app";

const columns: CrudProps<BookComment>["columns"] = [
  { dataIndex: "id", title: "ID" },
  { dataIndex: "content", title: "评论内容" },
  {
    dataIndex: "user_id",
    title: "评论人",
    render: (_, record) => record.user?.nickname,
  },
  {
    dataIndex: "book_id",
    title: "评论书籍",
    render: (_, record) => record.book?.name,
  },
  { dataIndex: "like_count", title: "点赞数" },
  { dataIndex: "dislike_count", title: "点踩数" },
  {
    dataIndex: "status",
    title: "审核状态",
    render: (value: number) => COMMENT_STATUS[value],
  },
  { dataIndex: "remark", title: "备注" },
  { dataIndex: "created_at", title: "创建日期" },
  { dataIndex: "created_by", title: "创建人" },
  { dataIndex: "updated_at", title: "更新日期" },
  { dataIndex: "updated_by", title: "最后操作人" },
];
export default columns;
