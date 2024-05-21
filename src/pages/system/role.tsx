import { fetchRoleList } from "@/api/role";
import { useQuery } from "@tanstack/react-query";
import { Button, Form, FormProps, Input, Spin, Table, TableProps } from "antd";
import { PageQuery, Role } from "app";
import { useState } from "react";

export default function RolePage() {
  const [pageQuery, updatePageQuery] = useState<PageQuery<Partial<Role>>>({
    page: 1,
    limit: 20,
  });

  const { isLoading, data } = useQuery({
    queryKey: ["role", pageQuery],
    queryFn: () => fetchRoleList(pageQuery),
  });

  const columns: TableProps<Role>["columns"] = [
    { dataIndex: "id", title: "ID" },
    { dataIndex: "name", title: "角色名称" },
    {
      dataIndex: "authorities",
      title: "权限",
    },
    {
      dataIndex: "created_at",
      title: "创建时间",
    },
    {
      dataIndex: "created_by",
      title: "创建人",
    },
    {
      dataIndex: "updated_at",
      title: "更新时间",
    },
    {
      dataIndex: "updated_by",
      title: "最后操作人",
    },
  ];

  const onSearch: FormProps<Partial<Role>>["onFinish"] = (data) => {
    updatePageQuery((prev) => ({ ...prev, ...data }));
  };

  return (
    <Spin spinning={isLoading}>
      <Form layout="inline" onFinish={onSearch} className="mb-4 space-x-2">
        <Form.Item name={"name"} label={"角色名称"}>
          <Input placeholder="请输入" />
        </Form.Item>
        <Button htmlType="reset">重置</Button>
        <Button type="primary" htmlType="submit">
          搜索
        </Button>
      </Form>
      <Table
        key={"id"}
        dataSource={data?.lists}
        columns={columns}
        pagination={{
          current: pageQuery.page,
          pageSize: pageQuery.limit,
          onChange: (page, limit) => {
            updatePageQuery({
              page,
              limit,
            });
          },
        }}
      />
    </Spin>
  );
}
