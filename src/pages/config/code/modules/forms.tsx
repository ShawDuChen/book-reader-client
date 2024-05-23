import type { CrudProps } from "@/components";
import { Input } from "antd";
import { Code } from "app";

const forms: CrudProps<Code>["forms"] = [
  {
    name: "name",
    label: "表名",
    formItem: <Input placeholder="请输入" allowClear />,
    rules: [{ required: true, message: "请输入表名" }],
  },
  {
    name: "remark",
    label: "备注",
    formItem: (
      <Input.TextArea
        placeholder="请输入"
        allowClear
        rows={3}
        maxLength={200}
        showCount
      />
    ),
  },
];

export default forms;
