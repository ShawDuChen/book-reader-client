import { fetchBookChapters } from "@/api/business/book";
import { Drawer, Table, TableProps } from "antd";
import { Chapter } from "app";
import { useEffect, useState } from "react";

export default function ChapterDrawer(props: {
  id: number;
  open: boolean;
  toggle: (_: boolean) => void;
}) {
  const [chapters, setChapters] = useState<Chapter[]>([]);

  const columns: TableProps<Chapter>["columns"] = [
    { dataIndex: "id", title: "ID" },
    { dataIndex: "no", title: "章节序号" },
    {
      dataIndex: "title",
      title: "章节标题",
      render: (val, record) => (
        <a
          href={record.url}
          target="_blank"
          title={val}
          className=" text-blue-500 hover:underline">
          {val}
        </a>
      ),
    },
  ];

  const bookChapters = (id: number) => {
    if (!id) return;
    fetchBookChapters(id).then((data) => {
      setChapters(data);
    });
  };

  useEffect(() => {
    bookChapters(props.id);
  }, [props.id]);

  return (
    <Drawer
      width={"60%"}
      title="章节目录"
      open={props.open}
      onClose={() => props.toggle(!props.open)}>
      <Table
        dataSource={chapters}
        columns={columns}
        rowKey={"id"}
        pagination={{ pageSize: 100 }}
      />
    </Drawer>
  );
}
