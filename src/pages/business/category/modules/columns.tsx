import { CrudProps } from "@/components";
import { Category } from "app";

const columns: CrudProps<Category>["columns"] = [
  { dataIndex: "id", title: "ID" },
  { dataIndex: "name", title: "分类名称" },
  { dataIndex: "identify", title: "分类标识" },
  { dataIndex: "remark", title: "备注" },
  { dataIndex: "created_at", title: "创建时间" },
  { dataIndex: "created_by", title: "创建人" },
  { dataIndex: "updated_at", title: "更新时间" },
  { dataIndex: "updated_by", title: "最后操作人" },
];

export default columns;
