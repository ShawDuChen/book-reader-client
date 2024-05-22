import { Button, Spin } from "antd";
import CrudSearch, { CrudSearchProps } from "./curd-search";
import CrudTable, { CrudTableProps } from "./curd-table";
import { CommonStruct, PageQuery, PageResult } from "app";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export type CrudProps<T> = {
  queryKey: string;
  listApi: (_: PageQuery<Partial<T>>) => Promise<PageResult<T>>;
  columns: CrudTableProps<T>["columns"];
  searchs?: CrudSearchProps<T>["conditions"];
  selectable?: boolean;
};

function Crud<T extends CommonStruct>(props: CrudProps<T>) {
  const [pageQuery, updatePageQuery] = useState<PageQuery<Partial<T>>>({
    page: 1,
    limit: 20,
  } as PageQuery<Partial<T>>);

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const { data, isLoading } = useQuery({
    queryKey: [props.queryKey, pageQuery],
    queryFn: () => {
      setSelectedRowKeys([]);
      return props.listApi(pageQuery);
    },
  });

  return (
    <Spin spinning={isLoading}>
      <CrudSearch
        conditions={props.searchs}
        onChange={(query) => updatePageQuery((prev) => ({ ...prev, ...query }))}
      />
      <div className=" space-x-2 my-4">
        <Button type="primary">新增</Button>
        {props.selectable && (
          <Button type="primary" danger>
            删除
          </Button>
        )}
      </div>
      <CrudTable
        dataSource={data?.lists}
        rowKey={"id"}
        columns={props.columns}
        pagination={{
          current: pageQuery.page,
          pageSize: pageQuery.limit,
          onChange: (page, limit) => {
            updatePageQuery((prev) => ({ ...prev, page, limit }));
          },
        }}
        rowSelection={
          props.selectable
            ? {
                selectedRowKeys: selectedRowKeys,
                onChange: (selectedRowKeys) => {
                  setSelectedRowKeys(selectedRowKeys);
                },
              }
            : undefined
        }
      />
    </Spin>
  );
}

export default Crud;
