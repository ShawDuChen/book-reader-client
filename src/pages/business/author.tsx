import { fetchAuthorList } from "@/api/business/author";
import { Crud } from "@/components";
import type { CrudProps } from "@/components";
import { SEX_LIST } from "@/utils/constants";
import { Input, Select } from "antd";
import { Author } from "app";

export default function AuthorPage() {
  const columns: CrudProps<Author>["columns"] = [
    {
      dataIndex: "id",
      title: "ID",
    },
    {
      dataIndex: "name",
      title: "作者名",
    },
    {
      dataIndex: "sex",
      title: "性别",
    },
    {
      dataIndex: "tel",
      title: "联系方式",
    },
    {
      dataIndex: "remark",
      title: "备注",
    },
  ];
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
          showSearch>
          {SEX_LIST.map((item) => (
            <Select.Option key={item.value} value={item.value}>
              {item.label}
            </Select.Option>
          ))}
        </Select>
      ),
    },
    {
      name: "tel",
      label: "手机号",
      formItem: <Input placeholder="请输入" allowClear />,
    },
  ];
  return (
    <Crud<Author>
      listApi={fetchAuthorList}
      queryKey="author"
      columns={columns}
      searchs={searchs}
    />
  );
}
