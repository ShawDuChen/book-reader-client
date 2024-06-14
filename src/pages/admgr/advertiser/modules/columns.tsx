import { CrudProps } from "@/components";
import { Advertiser } from "app";

const columns: CrudProps<Advertiser>["columns"] = [
  { dataIndex: "id", title: "ID" },
  { dataIndex: "name", title: "投放人" },
  { dataIndex: "tel", title: "联系电话" },
  { dataIndex: "address", title: "联系地址" },
  { dataIndex: "remark", title: "备注" },
  { dataIndex: "created_at", title: "创建日期" },
  { dataIndex: "created_by", title: "创建人" },
  { dataIndex: "updated_at", title: "更新日期" },
  { dataIndex: "updated_by", title: "最后操作人" },
];
export default columns;
