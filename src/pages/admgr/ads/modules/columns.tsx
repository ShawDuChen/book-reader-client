import { CrudProps } from "@/components";
import { Ads } from "app";

const columns: CrudProps<Ads>["columns"] = [
  { dataIndex: "id", title: "ID" },
  { dataIndex: "title", title: "广告标题" },
  { dataIndex: "link", title: "广告外链接" },
  { dataIndex: "image", title: "广告图片" },
  { dataIndex: "description", title: "广告描述" },
  { dataIndex: "advertiser_id", title: "投放人" },
  { dataIndex: "expired_at", title: "过期时间" },
  { dataIndex: "status", title: "状态" },
  { dataIndex: "remark", title: "备注" },
  { dataIndex: "created_at", title: "创建日期" },
  { dataIndex: "created_by", title: "创建人" },
  { dataIndex: "updated_at", title: "更新日期" },
  { dataIndex: "updated_by", title: "最后操作人" },
];
export default columns;
