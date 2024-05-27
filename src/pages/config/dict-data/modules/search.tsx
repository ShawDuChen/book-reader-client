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
      <Select
        placeholder="请选择"
        allowClear
        style={{ width: 120 }}
        options={dict_types?.map((item) => ({
          value: item.id,
          label: item.name,
        }))}
      />
    ),
  },
  {
    name: "status",
    label: "状态",
    formItem: (
      <Select
        placeholder="请选择"
        allowClear
        style={{ width: 120 }}
        options={STATUS_LIST}
      />
    ),
  },
];

export default searchs;
