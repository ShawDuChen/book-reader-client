import type { CrudProps } from "@/components";
import { STATUS_LIST } from "@/utils/constants";
import { Select } from "antd";
import { Dictionary, DictionaryData } from "app";

const searchs: (_?: Dictionary[]) => CrudProps<DictionaryData>["searchs"] = (
  dict_types,
) => [
  {
    name: "dict_type",
    label: "所属字典",
    formItem: (
      <Select placeholder="请选择" allowClear style={{ width: 120 }}>
        {dict_types?.map((dict) => (
          <Select.Option key={dict.id} value={dict.id}>
            {dict.name}
          </Select.Option>
        ))}
      </Select>
    ),
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
