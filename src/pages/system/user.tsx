import { fetchUserList } from "@/api/system/user";
import { SEX_LIST } from "@/utils/constants";
import { useQuery } from "@tanstack/react-query";
import {
  Button,
  Form,
  FormProps,
  Input,
  Select,
  Spin,
  Table,
  TableProps,
} from "antd";
import { PageQuery, User } from "app";
import { useState } from "react";

export default function UserPage() {
  const [pageQuery, updatePageQuery] = useState<PageQuery<Partial<User>>>({
    page: 1,
    limit: 20,
  });

  const { data, isLoading } = useQuery({
    queryKey: ["user", pageQuery],
    queryFn: () => fetchUserList(pageQuery),
  });

  const columns: TableProps<User>["columns"] = [
    { key: "id", dataIndex: "id", title: "ID" },
    { key: "username", dataIndex: "username", title: "用户名" },
    { key: "email", dataIndex: "email", title: "邮箱地址" },
    { key: "sex", dataIndex: "sex", title: "性别" },
    { key: "address", dataIndex: "address", title: "住址" },
    { key: "tel", dataIndex: "tel", title: "联系方式" },
    { key: "is_super", dataIndex: "is_super", title: "超管" },
    { key: "created_at", dataIndex: "created_at", title: "创建时间" },
    { key: "created_by", dataIndex: "created_by", title: "创建人" },
    { key: "updated_at", dataIndex: "updated_at", title: "更新时间" },
    { key: "updated_by", dataIndex: "updated_by", title: "最后操作人" },
  ];

  const onSearch: FormProps<Partial<User>>["onFinish"] = (data) => {
    updatePageQuery((prev) => ({
      ...prev,
      ...data,
    }));
  };

  return (
    <Spin spinning={isLoading}>
      <Form layout="inline" onFinish={onSearch} className=" mb-4 space-x-2">
        <Form.Item name={"username"} label="用户名">
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item name={"email"} label="邮箱">
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item name={"sex"} label="性别">
          <Select placeholder="请选择" allowClear showSearch>
            {SEX_LIST.map((item) => (
              <Select.Option key={item.value} value={item.value}>
                {item.label}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Button htmlType="reset">重置</Button>
        <Button type="primary" htmlType="submit">
          查询
        </Button>
      </Form>
      <Table
        rowKey={"id"}
        dataSource={data?.lists}
        columns={columns}
        pagination={{
          current: pageQuery.page,
          pageSize: pageQuery.limit,
          onChange(page, pageSize) {
            updatePageQuery({
              page: page,
              limit: pageSize,
            });
          },
        }}
      />
    </Spin>
  );
}
