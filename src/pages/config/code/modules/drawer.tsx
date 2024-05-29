import { Clipboard } from "@/components";
import { Drawer, DrawerProps, Tabs, TabsProps } from "antd";
import { CodeGenerateResult } from "app";

const CodePanel = (props: { code?: string }) => {
  return (
    <div className="relative">
      <Clipboard text={props.code} className=" absolute top-2 right-2" />
      <pre>
        <code lang="typescript">{props.code}</code>
      </pre>
    </div>
  );
};

export default function CodeDrawer(
  props: DrawerProps & {
    data?: CodeGenerateResult;
  },
) {
  const { data, ...restProps } = props;
  const items: TabsProps["items"] = [
    {
      key: "interface",
      label: "Interface File",
      children: <CodePanel code={data?.interface_code} />,
    },
    {
      key: "api",
      label: "API File",
      children: <CodePanel code={data?.api_file_code} />,
    },
    {
      key: "crud",
      label: "Crud File",
      children: <CodePanel code={data?.crud_file_code} />,
    },
    {
      key: "columns",
      label: "Columns File",
      children: <CodePanel code={data?.columns_file_code} />,
    },
    {
      key: "searchs",
      label: "Searchs File",
      children: <CodePanel code={data?.search_file_code} />,
    },
    {
      key: "forms",
      label: "Forms File",
      children: <CodePanel code={data?.forms_file_code} />,
    },
  ];

  return (
    <Drawer width={"60%"} title={data?.table_name} {...restProps}>
      <Tabs items={items} />
    </Drawer>
  );
}
