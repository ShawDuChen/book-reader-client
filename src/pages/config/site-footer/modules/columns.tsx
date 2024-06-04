import { CrudProps } from "@/components";
import { SiteFooter } from "app";

const columns: CrudProps<SiteFooter>["columns"] = [
  { dataIndex: "id", title: "ID" },
  { dataIndex: "title", title: "标题" },
  {
    dataIndex: "link",
    title: "外连接",
    render: (link) => (
      <a href={link} target="_blank" className="text-primary hover:underline">
        {link}
      </a>
    ),
  },
  { dataIndex: "description", title: "描述" },
  { dataIndex: "type", title: "类型" },
  { dataIndex: "sub_type", title: "子类型" },
  { dataIndex: "remark", title: "备注" },
  { dataIndex: "created_at", title: "创建日期" },
  { dataIndex: "created_by", title: "创建人" },
  { dataIndex: "updated_at", title: "更新日期" },
  { dataIndex: "updated_by", title: "最后操作人" },
];
export default columns;
