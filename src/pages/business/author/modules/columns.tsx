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
];

export default columns;
