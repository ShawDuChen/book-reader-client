import type { CrudProps } from "@/components";
import { SEX_LIST } from "@/utils/constants";
import { Input, Select } from "antd";
import { Author } from "app";

const searchs: CrudProps<Author>["searchs"] = [
  {
    name: "name",
    label: "作者名",
    formItem: <Input placeholder="请输入" allowClear />,
  },
  {
    name: "sex",
    label: "性别",
    formItem: (
      <Select
        placeholder="请选择"
        style={{ width: 120 }}
        allowClear
        showSearch
        options={SEX_LIST}
      />
    ),
  },
  {
    name: "tel",
    label: "手机号",
    formItem: <Input placeholder="请输入" allowClear />,
  },
];

export default searchs;
