import { CrudProps, FileUpload } from "@/components";
import { SOURCE_TYPE } from "@/utils/constants";
import { Input, Select } from "antd";
import { Source } from "app";

const searchs: CrudProps<Source>["searchs"] = [
  {
    name: "url",
    label: "资源路径",
    formItem: <FileUpload />,
    rules: [{ required: true, message: "请上传资源路径" }],
  },
  {
    name: "type",
    label: "资源类型",
    formItem: <Select placeholder="请选择" options={SOURCE_TYPE} />,
    rules: [{ required: true, message: "请选择资源类型" }],
  },
  {
    name: "remark",
    label: "备注",
    formItem: (
      <Input.TextArea placeholder="请输入" rows={3} maxLength={255} showCount />
    ),
  },
];

export default searchs;
