import { CrudProps } from "@/components";
import { SITE_FOOTER_SUB_TYPES, SITE_FOOTER_TYPES } from "@/utils/constants";
import { Input, Select } from "antd";
import { SiteFooter } from "app";

const searchs: CrudProps<SiteFooter>["searchs"] = [
  { name: "title", label: "标题", formItem: <Input placeholder="请输入" /> },
  {
    name: "type",
    label: "类型",
    formItem: (
      <Select
        placeholder="请选择"
        options={SITE_FOOTER_TYPES}
        style={{ width: 120 }}
      />
    ),
  },
  {
    name: "sub_type",
    label: "子类型",
    formItem: (
      <Select
        placeholder="请输入"
        options={SITE_FOOTER_SUB_TYPES}
        style={{ width: 120 }}
      />
    ),
  },
];

export default searchs;
