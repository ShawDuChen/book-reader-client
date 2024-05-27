import {
  crawlChapterContent,
  createChapter,
  deleteChapter,
  fetchChapterList,
  getChapter,
  updateChapter,
} from "@/api/business/chapter";
import { Crud } from "@/components";
import { Chapter } from "app";
import columns from "./modules/columns";
import searchs from "./modules/search";
import forms from "./modules/forms";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { allBook } from "@/api/business/book";
import { Button, message } from "antd";

export default function ChapterPage() {
  const queryClient = useQueryClient();

  const { data: books } = useQuery({
    queryKey: ["book-all"],
    queryFn: allBook,
  });

  const crawlContent = (id: number) => {
    crawlChapterContent(id).then(() => {
      message.success("抓取成功");
      queryClient.invalidateQueries({ queryKey: ["Chapter"] });
    });
  };

  return (
    <Crud<Chapter>
      listApi={fetchChapterList}
      createApi={createChapter}
      updateApi={updateChapter}
      deleteApi={deleteChapter}
      infoApi={getChapter}
      queryKey="Chapter"
      columns={columns}
      searchs={searchs(books)}
      forms={forms(books)}
      renderAction={(record) => (
        <>
          <Button type="link" onClick={() => crawlContent(record.id)}>
            抓取内容
          </Button>
        </>
      )}
    />
  );
}
