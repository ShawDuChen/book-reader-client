import { CrudProps } from "@/components";
import { Input } from "antd";
import { Role } from "app";

const forms: CrudProps<Role>["forms"] = [
  {
    name: "name",
    label: "角色名称",
    formItem: <Input placeholder="请输入" />,
    rules: [{ required: true, message: "请输入角色名称" }],
  },
  {
    name: "authorities",
    label: "权限字符串",
    formItem: <Input placeholder="请输入" />,
    rules: [{ required: true, message: "请输入权限字符串" }],
  },
  {
    name: "remark",
    label: "备注",
    formItem: (
      <Input.TextArea
        placeholder="请输入备注"
        rows={5}
        maxLength={200}
        showCount
      />
    ),
  },
];

export default forms;
