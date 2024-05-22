import { Table } from "antd";
import type { TableProps } from "antd";
import { CommonStruct } from "app";

export interface CrudTableProps<T> extends TableProps<T> {}

function CrudTable<T extends CommonStruct>(props: CrudTableProps<T>) {
  return <Table {...props} />;
}

export default CrudTable;
