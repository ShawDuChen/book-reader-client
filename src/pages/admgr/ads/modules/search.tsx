import { CrudProps } from "@/components";
import { STATUS_LIST } from "@/utils/constants";
import { Input, Select } from "antd";
import { Ads, Advertiser } from "app";

const searchs: (_?: Advertiser[]) => CrudProps<Ads>["searchs"] = (
  advertisers,
) => [
  {
    name: "title",
    label: "广告标题",
    formItem: <Input placeholder="请输入" />,
  },
  {
    name: "advertiser_id",
    label: "投放人",
    formItem: (
      <Select
        placeholder="请选择"
        allowClear
        showSearch
        options={advertisers?.map((item) => ({
          label: item.name,
          value: item.id,
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
        showSearch
        allowClear
        options={STATUS_LIST}
        style={{ width: 120 }}
      />
    ),
  },
];

export default searchs;
