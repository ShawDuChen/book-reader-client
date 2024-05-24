import type { CrudProps } from "@/components";
import { STATUS_LIST } from "@/utils/constants";
import { Input, Select } from "antd";
import { Dictionary } from "app";

const searchs: CrudProps<Dictionary>["searchs"] = [
  {
    name: "name",
    label: "名称",
    formItem: <Input placeholder="请输入" allowClear />,
  },
  {
    name: "identify",
    label: "标识符",
    formItem: <Input placeholder="请输入" allowClear />,
  },
  {
    name: "status",
    label: "状态",
    formItem: (
      <Select placeholder="请选择" allowClear style={{ width: 120 }}>
        {STATUS_LIST.map((item) => (
          <Select.Option key={item.value} value={item.value}>
            {item.label}
          </Select.Option>
        ))}
      </Select>
    ),
  },
];

export default searchs;
