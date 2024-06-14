import {
  createBook,
  deleteBook,
  fetchBookList,
  startCrawlBook,
  updateBook,
} from "@/api/business/book";
import { Crud } from "@/components";
import { Book } from "app";
import columns from "./modules/columns";
import searchs from "./modules/search";
import forms from "./modules/forms";
import { useQuery } from "@tanstack/react-query";
import { allAuthor } from "@/api/business/author";
import { allCategory } from "@/api/business/category";
import { Button, message } from "antd";
import { allCrawlRule } from "@/api/system/crawl-rule";
import { useState } from "react";
import ChapterDrawer from "./modules/chapter-drawer";
export default function BookPage() {
  const { data: authors } = useQuery({
    queryKey: ["author-all"],
    queryFn: allAuthor,
  });

  const { data: categorys } = useQuery({
    queryKey: ["category-all"],
    queryFn: allCategory,
  });

  const { data: crawlRules } = useQuery({
    queryKey: ["crawl-rule-all"],
    queryFn: allCrawlRule,
  });

  const [crawling, setCrawling] = useState(false);

  const startCrawl = (id: number) => {
    setCrawling(true);
    startCrawlBook(id)
      .then(() => {
        message.success("fetch success");
      })
      .finally(() => setCrawling(false));
  };

  const [chapterDrawer, setChapterDrawer] = useState({
    open: false,
    id: 0,
  });
  const showChapters = (id: number) => {
    setChapterDrawer({ id, open: true });
  };

  return (
    <>
      <Crud<Book>
        listApi={fetchBookList}
        createApi={createBook}
        updateApi={updateBook}
        deleteApi={deleteBook}
        queryKey="book"
        columns={columns}
        searchs={searchs(authors, categorys, crawlRules)}
        forms={forms(authors, categorys, crawlRules)}
        renderAction={(record) => (
          <>
            <Button
              type="link"
              disabled={!record.crawl_rule?.status}
              loading={crawling}
              onClick={() => startCrawl(record.id)}>
              抓取
            </Button>
            <Button type="link" onClick={() => showChapters(record.id)}>
              章节目录
            </Button>
          </>
        )}
      />

      <ChapterDrawer
        id={chapterDrawer.id}
        open={chapterDrawer.open}
        toggle={(open) => setChapterDrawer((prev) => ({ ...prev, open }))}
      />
    </>
  );
}
