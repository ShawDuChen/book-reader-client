import { CrudProps } from "@/components";
import { STATUS_MAP } from "@/utils/constants";
import { DictionaryData } from "app";

const columns: CrudProps<DictionaryData>["columns"] = [
  {
    dataIndex: "id",
    title: "ID",
  },
  {
    dataIndex: "value",
    title: "字典Value",
  },
  {
    dataIndex: "label",
    title: "字典Label",
  },
  {
    dataIndex: "status",
    title: "状态",
    render: (value) => <span>{STATUS_MAP[value]}</span>,
  },
  {
    dataIndex: "remark",
    title: "备注",
  },
  { dataIndex: "created_at", title: "创建时间" },
  { dataIndex: "created_by", title: "创建人" },
  { dataIndex: "updated_at", title: "更新时间" },
  { dataIndex: "updated_by", title: "最后操作人" },
];

export default columns;
