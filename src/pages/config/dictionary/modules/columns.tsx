import { CrudProps } from "@/components";
import { STATUS_MAP } from "@/utils/constants";
import { Dictionary } from "app";
import { NavLink } from "react-router-dom";

const columns: CrudProps<Dictionary>["columns"] = [
  {
    dataIndex: "id",
    title: "ID",
  },
  {
    dataIndex: "name",
    title: "字典名称",
  },
  {
    dataIndex: "identify",
    title: "字典标识符",
    render: (value) => (
      <NavLink
        to={`/config/dictdata?identify=${value}`}
        className=" text-blue-400 hover:underline">
        {value}
      </NavLink>
    ),
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
