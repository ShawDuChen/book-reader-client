import { CrudProps } from "@/components";
import { User } from "app";

const columns: CrudProps<User>["columns"] = [
  { dataIndex: "id", title: "ID" },
  { dataIndex: "username", title: "用户名" },
  { dataIndex: "password", title: "密码" },
  { dataIndex: "nickname", title: "用户昵称" },
  { dataIndex: "sex", title: "性别" },
  { dataIndex: "tel", title: "联系方式" },
  { dataIndex: "email", title: "电子邮箱" },
  { dataIndex: "address", title: "联系地址" },
  {
    dataIndex: "status",
    title: "状态",
    render: (val) => (val ? "可用" : "不可用"),
  },
  {
    dataIndex: "role_id",
    title: "角色",
    render: (_, record) => record.role?.name,
  },
  {
    dataIndex: "is_super",
    title: "是否超管",
    render: (val) => (val ? "是" : "否"),
  },
  { dataIndex: "remark", title: "备注" },
  { dataIndex: "created_at", title: "创建日期" },
  { dataIndex: "created_by", title: "创建人" },
  { dataIndex: "updated_at", title: "更新日期" },
  { dataIndex: "updated_by", title: "最后操作人" },
];
export default columns;
