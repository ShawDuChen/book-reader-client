import { CrudProps } from "@/components";
import { Input } from "antd";
import { Advertiser } from "app";

const forms: CrudProps<Advertiser>["forms"] = [
  {
    name: "name",
    label: "投放人",
    formItem: <Input placeholder="请输入投放人" maxLength={255} />,
    rules: [{ required: true, message: "请输入投放人" }],
  },
  {
    name: "tel",
    label: "联系电话",
    formItem: <Input placeholder="请输入联系电话" maxLength={11} />,
    rules: [{ required: true, message: "请输入联系电话" }],
  },
  {
    name: "address",
    label: "联系地址",
    formItem: <Input placeholder="请输入联系地址" maxLength={255} />,
  },
  {
    name: "remark",
    label: "备注",
    formItem: (
      <Input.TextArea
        placeholder="请输入备注"
        maxLength={255}
        rows={3}
        showCount
      />
    ),
  },
];

export default forms;
