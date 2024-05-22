import type { CrudProps } from "@/components";
import { SEX_LIST } from "@/utils/constants";
import { Input, Select } from "antd";
import { Author } from "app";

const forms: CrudProps<Author>["forms"] = [
  {
    name: "name",
    label: "作者名",
    formItem: <Input placeholder="请输入" allowClear />,
    rules: [{ required: true, message: "请输入作者名" }],
  },
  {
    name: "sex",
    label: "性别",
    formItem: (
      <Select placeholder="请选择" allowClear showSearch>
        {SEX_LIST.map((item) => (
          <Select.Option key={item.value} value={item.value}>
            {item.label}
          </Select.Option>
        ))}
      </Select>
    ),
    rules: [{ required: true, message: "请选择性别" }],
  },
  {
    name: "tel",
    label: "手机号",
    formItem: <Input placeholder="请输入" allowClear maxLength={11} />,
    rules: [{ min: 11, max: 11, message: "请输入11位手机号" }],
  },
  {
    name: "remark",
    label: "备注",
    formItem: (
      <Input.TextArea placeholder="请输入" rows={3} maxLength={200} showCount />
    ),
  },
];

export default forms;
