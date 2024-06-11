import {
  batchCrawlChapters,
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
import { useState } from "react";

export default function ChapterPage() {
  const queryClient = useQueryClient();

  const { data: books } = useQuery({
    queryKey: ["book-all"],
    queryFn: allBook,
  });

  const [loading, setLoading] = useState(false);

  const crawlContent = (id: number) => {
    crawlChapterContent(id).then(() => {
      message.success("抓取成功");
      queryClient.invalidateQueries({ queryKey: ["Chapter"] });
    });
  };

  const bacthCrawl = async (ids: number[]) => {
    setLoading(true);
    await batchCrawlChapters(ids).finally(() => {
      setLoading(false);
    });
    message.success("抓取成功");
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
      selectable
      renderAction={(record) => (
        <>
          <Button
            loading={loading}
            type="link"
            onClick={() => crawlContent(record.id)}
            ghost>
            抓取内容
          </Button>
        </>
      )}
      batchActions={(ids) => (
        <Button
          type="primary"
          color="success"
          disabled={!ids.length}
          loading={loading}
          onClick={bacthCrawl.bind(null, ids)}>
          批量抓取
        </Button>
      )}
    />
  );
}
