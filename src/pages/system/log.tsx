import { fetchLogs } from "@/api/system/log";
import { METHODS, STATUS_CODES } from "@/utils/constants";
import { useQuery } from "@tanstack/react-query";
import { Button, Form, FormProps, Select, Spin, Table, TableProps } from "antd";
import { LogItem, PageQuery } from "app";
import { useState } from "react";
export default function LogPage() {
  const [pageQuery, updatePageQuery] = useState<PageQuery<Partial<LogItem>>>({
    page: 1,
    limit: 20,
  });
  const { data, isLoading } = useQuery({
    queryKey: ["log", pageQuery],
    queryFn: () => fetchLogs(pageQuery),
  });

  const columns: TableProps<LogItem>["columns"] = [
    { key: "id", dataIndex: "id", title: "ID" },
    { key: "method", dataIndex: "method", title: "请求方法", width: 120 },
    { key: "url", dataIndex: "url", title: "请求地址" },
    { key: "status", dataIndex: "status", title: "状态码", width: 120 },
    { key: "request_body", dataIndex: "request_body", title: "请求参数" },
    {
      key: "response_body",
      dataIndex: "response_body",
      title: "响应参数",
      width: 120,
    },
    {
      key: "created_at",
      dataIndex: "created_at",
      title: "请求时间",
    },
    { key: "created_by", dataIndex: "created_by", title: "请求人" },
  ];

  const onSearch: FormProps<Partial<LogItem>>["onFinish"] = (searchQuery) => {
    updatePageQuery((prev) => ({ ...prev, ...searchQuery, page: 1 }));
  };

  return (
    <Spin spinning={isLoading}>
      <Form layout="inline" className="mb-4 space-x-2" onFinish={onSearch}>
        <Form.Item name="method" label="请求方法">
          <Select
            style={{ width: 120 }}
            placeholder="请选择"
            allowClear
            showSearch>
            {METHODS.map((m) => (
              <Select.Option key={m} value={m}>
                {m}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item name="status" label="状态码">
          <Select
            style={{ width: 120 }}
            placeholder="请选择"
            allowClear
            showSearch>
            {STATUS_CODES.map((code) => (
              <Select.Option key={code} value={code}>
                {code}
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
        dataSource={data?.lists}
        rowKey={"id"}
        columns={columns}
        pagination={{
          current: pageQuery.page,
          pageSize: pageQuery.limit,
          total: data?.total,
          onChange(page, limit) {
            updatePageQuery({ page, limit });
          },
        }}
      />
    </Spin>
  );
}
