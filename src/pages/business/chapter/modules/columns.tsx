import { CrudProps } from "@/components";
import { Chapter } from "app";

const columns: CrudProps<Chapter>["columns"] = [
  { dataIndex: "id", title: "ID" },
  { dataIndex: "no", title: "序号" },
  { dataIndex: "title", title: "章节名" },
  {
    dataIndex: "book_id",
    title: "所属书籍",
    render: (_, record) => record.book?.name,
  },
  {
    dataIndex: "url",
    title: "地址",
    render: (_, record) => (
      <a
        href={record.url}
        target="_blank"
        className=" text-blue-500 hover:underline">
        {record.url}
      </a>
    ),
  },
  { dataIndex: "created_at", title: "创建时间" },
  { dataIndex: "created_by", title: "创建人" },
  { dataIndex: "updated_at", title: "更新时间" },
  {
    dataIndex: "updated_by",
    title: "最后操作人",
  },
];
export default columns;
