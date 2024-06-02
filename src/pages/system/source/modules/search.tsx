import { CrudProps } from "@/components";
import { SOURCE_TYPE } from "@/utils/constants";
import { Select } from "antd";
import { Source } from "app";

const searchs: CrudProps<Source>["searchs"] = [
  {
    name: "type",
    label: "资源类型",
    formItem: (
      <Select
        placeholder="请选择"
        options={SOURCE_TYPE}
        allowClear
        showSearch
        style={{ width: 120 }}
      />
    ),
  },
];

export default searchs;
