import { CrudProps, IconFont } from "@/components";
import { Menu } from "app";

const columns: CrudProps<Menu>["columns"] = [
  { dataIndex: "id", title: "ID", width: 120 },
  { dataIndex: "name", title: "菜单名称" },
  { dataIndex: "path", title: "菜单路由" },
  {
    dataIndex: "icon",
    title: "菜单图标",
    render: (icon) => <IconFont name={icon} />,
  },
  { dataIndex: "component", title: "菜单组件" },
  {
    dataIndex: "visible",
    title: "是否可见",
    render: (visible) => (visible ? "是" : "否"),
  },
  { dataIndex: "order", title: "排序" },
  { dataIndex: "remark", title: "备注" },
  { dataIndex: "created_at", title: "创建日期" },
  { dataIndex: "created_by", title: "创建人" },
  { dataIndex: "updated_at", title: "更新日期" },
  { dataIndex: "updated_by", title: "最后操作人" },
];
export default columns;
