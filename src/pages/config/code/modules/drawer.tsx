import { Drawer, DrawerProps, Tabs, TabsProps } from "antd";
import { CodeGenerateResult } from "app";

export default function CodeDrawer(
  props: DrawerProps & {
    data?: CodeGenerateResult;
  },
) {
  const { data, ...restProps } = props;
  const items: TabsProps["items"] = [
    {
      key: "api",
      label: "API File",
      children: (
        <pre>
          <code lang="typescript">{data?.api_file_code}</code>
        </pre>
      ),
    },
    {
      key: "crud",
      label: "Crud File",
      children: (
        <pre>
          <code lang="typescript">{data?.crud_file_code}</code>
        </pre>
      ),
    },
    {
      key: "interface",
      label: "Interface File",
      children: (
        <pre>
          <code>{data?.interface_code}</code>
        </pre>
      ),
    },
    {
      key: "columns",
      label: "Columns File",
      children: (
        <pre>
          <code>{data?.columns_file_code}</code>
        </pre>
      ),
    },
    {
      key: "searchs",
      label: "Searchs File",
      children: (
        <pre>
          <code>{data?.search_file_code}</code>
        </pre>
      ),
    },
    {
      key: "forms",
      label: "Forms File",
      children: (
        <pre>
          <code>{data?.forms_file_code}</code>
        </pre>
      ),
    },
  ];

  return (
    <Drawer width={"60%"} title={data?.table_name} {...restProps}>
      <Tabs items={items} />
    </Drawer>
  );
}
