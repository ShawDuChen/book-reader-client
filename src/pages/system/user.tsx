import { fetchUserList } from "@/api/user";
import { useQuery } from "@tanstack/react-query";
import { Spin, Table, TableProps } from "antd";
import { PageQuery, User } from "app";
import { useState } from "react";

export default function UserPage() {
  const [pageQuery] = useState<PageQuery<Partial<User>>>({
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

  return (
    <Spin spinning={isLoading}>
      <Table rowKey={"id"} dataSource={data?.lists} columns={columns} />
    </Spin>
  );
}
