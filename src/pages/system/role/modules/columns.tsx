import { CrudProps } from "@/components";
import { Role } from "app";

const columns: CrudProps<Role>["columns"] = [
  { dataIndex: "id", title: "ID" },
  { dataIndex: "name", title: "角色名称" },
  { dataIndex: "authorities", title: "权限字符串" },
  { dataIndex: "remark", title: "备注" },
  { dataIndex: "created_at", title: "创建日期" },
  { dataIndex: "created_by", title: "创建人" },
  { dataIndex: "updated_at", title: "更新日期" },
  { dataIndex: "updated_by", title: "最后操作人" },
];
export default columns;
