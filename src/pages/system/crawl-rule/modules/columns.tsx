import { CrudProps } from "@/components";
import { CrawlRule } from "app";

const columns: CrudProps<CrawlRule>["columns"] = [
  { dataIndex: "id", title: "ID" },
  { dataIndex: "name", title: "规则名称" },
  { dataIndex: "website_url", title: "站点地址" },
  { dataIndex: "list_selector", title: "列表选择器" },
  { dataIndex: "content_selector", title: "内容选择器" },
  { dataIndex: "remark", title: "备注" },
  { dataIndex: "created_at", title: "创建日期" },
  { dataIndex: "created_by", title: "创建人" },
  { dataIndex: "updated_at", title: "更新日期" },
  { dataIndex: "updated_by", title: "最后操作人" },
];
export default columns;
