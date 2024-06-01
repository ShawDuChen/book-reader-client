import { CrudProps } from "@/components";
import { Input } from "antd";
import { Source } from "app";

const searchs: CrudProps<Source>["searchs"] = [
  { name: "remark", label: "备注", formItem: <Input placeholder="请输入" /> },
  {
    name: "created_at",
    label: "创建日期",
    formItem: <Input placeholder="请输入" />,
  },
  {
    name: "created_by",
    label: "创建人",
    formItem: <Input placeholder="请输入" />,
  },
  {
    name: "updated_at",
    label: "更新日期",
    formItem: <Input placeholder="请输入" />,
  },
  {
    name: "updated_by",
    label: "最后操作人",
    formItem: <Input placeholder="请输入" />,
  },
  { name: "id", label: "ID", formItem: <Input placeholder="请输入" /> },
  { name: "url", label: "资源路径", formItem: <Input placeholder="请输入" /> },
  { name: "type", label: "资源类型", formItem: <Input placeholder="请输入" /> },
  {
    name: "user_id",
    label: "用户ID",
    formItem: <Input placeholder="请输入" />,
  },
];

export default searchs;
