import { CrudProps } from "@/components";
import { Source } from "app";

const columns: CrudProps<Source>["columns"] = [
  { dataIndex: "remark", title: "备注" },
  { dataIndex: "created_at", title: "创建日期" },
  { dataIndex: "created_by", title: "创建人" },
  { dataIndex: "updated_at", title: "更新日期" },
  { dataIndex: "updated_by", title: "最后操作人" },
  { dataIndex: "id", title: "ID" },
  { dataIndex: "url", title: "资源路径" },
  { dataIndex: "type", title: "资源类型" },
  { dataIndex: "user_id", title: "用户ID" },
];
export default columns;
