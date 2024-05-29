/* eslint-disable @typescript-eslint/no-explicit-any */
import { CrudProps } from "@/components";
import { ICON_LIST } from "@/utils/constants";
import { Cascader, Input, InputNumber, Select, Switch } from "antd";
import { Menu } from "app";
import Icon from "@ant-design/icons";

const forms: (_?: Menu[]) => CrudProps<Menu>["forms"] = (menus) => [
  {
    name: "name",
    label: "菜单名称",
    formItem: <Input placeholder="请输入菜单名称" maxLength={255} />,
    rules: [{ required: true, message: "请输入菜单名称" }],
  },
  {
    name: "parent_ids",
    label: "父菜单",
    formItem: (
      <Cascader
        placeholder="请选择"
        options={[{ id: 0, name: "根布局" }, ...(menus || [])]}
        fieldNames={{ value: "id", label: "name" }}
        changeOnSelect
      />
    ),
    rules: [{ required: true, message: "请输入父菜单" }],
  },
  {
    name: "path",
    label: "菜单路由",
    formItem: <Input placeholder="请输入菜单路由" maxLength={32} />,
  },
  {
    name: "icon",
    label: "菜单图标",
    formItem: (
      <Select placeholder="请选择菜单图标" allowClear showSearch>
        {ICON_LIST?.map((item) => (
          <Select.Option key={item.value} value={item.value}>
            <div className="flex flex-row space-x-2">
              <Icon component={item.label as unknown as any} />
              <span>{item.value}</span>
            </div>
          </Select.Option>
        ))}
      </Select>
    ),
  },
  {
    name: "component",
    label: "菜单组件",
    formItem: <Input placeholder="请输入菜单组件" maxLength={255} />,
  },
  {
    name: "visible",
    label: "是否可见",
    formItem: <Switch />,
  },
  {
    name: "order",
    label: "排序",
    formItem: <InputNumber placeholder="请输入排序" max={99} min={0} />,
    rules: [{ required: true, message: "请输入排序" }],
  },
  {
    name: "remark",
    label: "备注",
    formItem: (
      <Input.TextArea
        placeholder="请输入备注"
        maxLength={255}
        rows={3}
        showCount
      />
    ),
  },
];

export default forms;
