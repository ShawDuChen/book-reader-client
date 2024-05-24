import type { CrudProps } from "@/components";
import { STATUS_LIST } from "@/utils/constants";
import { Input, Select } from "antd";
import { Dictionary, DictionaryData } from "app";

const forms: (_?: Dictionary[]) => CrudProps<DictionaryData>["forms"] = (
  dict_types,
) => [
  {
    name: "dict_type",
    label: "关联字典",
    formItem: (
      <Select placeholder="请选择" allowClear>
        {dict_types?.map((dict) => (
          <Select.Option key={dict.id} value={dict.id}>
            {dict.name}
          </Select.Option>
        ))}
      </Select>
    ),
    rules: [{ required: true, message: "请选择关联字典" }],
  },
  {
    name: "value",
    label: "字典value",
    formItem: <Input placeholder="请输入" allowClear />,
    rules: [{ required: true, message: "请输入字典value" }],
  },
  {
    name: "label",
    label: "字典label",
    formItem: <Input placeholder="请输入" allowClear />,
    rules: [{ required: true, message: "请输入字典label" }],
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
