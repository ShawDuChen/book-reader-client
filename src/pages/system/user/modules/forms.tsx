import { CrudProps } from "@/components";
import { SEX_LIST } from "@/utils/constants";
import { Input, Select } from "antd";
import { Role, User } from "app";

const forms: (_?: Role[]) => CrudProps<User>["forms"] = (roles) => [
  {
    name: "username",
    label: "用户名",
    formItem: <Input placeholder="请输入" maxLength={32} />,
    rules: [
      { required: true, message: "请输入用户名" },
      { type: "email", message: "请输入正确的邮箱" },
    ],
  },
  {
    name: "password",
    label: "密码",
    formItem: <Input.Password placeholder="请输入" maxLength={255} />,
    rules: [{ required: true, message: "请输入密码" }],
  },
  {
    name: "nickname",
    label: "用户昵称",
    formItem: <Input placeholder="请输入" maxLength={32} />,
    rules: [{ required: true, message: "请输入用户昵称" }],
  },
  {
    name: "role_id",
    label: "角色ID",
    formItem: (
      <Select
        placeholder="请选择角色"
        options={roles?.map((item) => ({
          value: item.id,
          label: item.name,
        }))}
      />
    ),
    rules: [{ required: true, message: "请选择角色" }],
  },
  {
    name: "sex",
    label: "性别",
    formItem: <Select placeholder="请选择性别" options={SEX_LIST} />,
  },
  {
    name: "tel",
    label: "联系方式",
    formItem: <Input placeholder="请输入" maxLength={11} />,
  },
  {
    name: "email",
    label: "电子邮箱",
    formItem: <Input placeholder="请输入" maxLength={64} />,
    rules: [{ type: "email", message: "请输入正确的邮箱" }],
  },
  {
    name: "address",
    label: "联系地址",
    formItem: <Input placeholder="请输入" maxLength={255} />,
  },
  {
    name: "remark",
    label: "备注",
    formItem: (
      <Input.TextArea placeholder="请输入" maxLength={255} rows={3} showCount />
    ),
  },
];

export default forms;
