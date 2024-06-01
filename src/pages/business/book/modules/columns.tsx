import { CrudProps } from "@/components";
import { Book } from "app";

const columns: CrudProps<Book>["columns"] = [
  { dataIndex: "id", title: "ID" },
  { dataIndex: "name", title: "书名" },
  {
    dataIndex: "author_id",
    title: "作者",
    render: (_, record) => record.author?.name,
  },
  {
    dataIndex: "category_id",
    title: "分类",
    render: (_, record) => record.category?.name,
  },
  {
    dataIndex: "cover",
    title: "封面图",
    render: (text: string) =>
      text && <img src={text} alt="avatar" style={{ width: 100 }} />,
  },
  {
    dataIndex: "fetch_url",
    title: "爬取地址",
    render: (_, record) => (
      <a
        href={record.fetch_url}
        target="_blank"
        className="hover:underline text-blue-300">
        {record.fetch_url}
      </a>
    ),
  },
  {
    dataIndex: "crawl_rule_id",
    title: "爬取规则",
    render: (_, record) => record.crawl_rule?.name,
  },
  { dataIndex: "remark", title: "备注" },
  { dataIndex: "created_at", title: "创建时间" },
  { dataIndex: "created_by", title: "创建人" },
  { dataIndex: "updated_at", title: "更新时间" },
  {
    dataIndex: "updated_by",
    title: "最后操作人",
  },
];
export default columns;
