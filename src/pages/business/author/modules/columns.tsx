import { CrudProps } from "@/components";
import { Author } from "app";

const columns: CrudProps<Author>["columns"] = [
  {
    dataIndex: "id",
    title: "ID",
  },
  {
    dataIndex: "name",
    title: "作者名",
  },
  {
    dataIndex: "sex",
    title: "性别",
  },
  {
    dataIndex: "tel",
    title: "联系方式",
  },
  {
    dataIndex: "remark",
    title: "备注",
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
