import type { CrudProps } from "@/components";
import { STATUS_LIST } from "@/utils/constants";
import { Input, Select } from "antd";
import { Dictionary } from "app";

const forms: CrudProps<Dictionary>["forms"] = [
  {
    name: "name",
    label: "字典名称",
    formItem: <Input placeholder="请输入" allowClear />,
    rules: [{ required: true, message: "请输入字典名称" }],
  },
  {
    name: "identify",
    label: "标识符",
    formItem: <Input placeholder="请输入" allowClear />,
    rules: [{ required: true, message: "请输入标识符" }],
  },
  {
    name: "status",
    label: "状态",
    formItem: (
      <Select placeholder="请选择" allowClear>
        {STATUS_LIST.map((item) => (
          <Select.Option key={item.value} value={item.value}>
            {item.label}
          </Select.Option>
        ))}
      </Select>
    ),
    rules: [{ required: true, type: "number", message: "请选择状态" }],
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
