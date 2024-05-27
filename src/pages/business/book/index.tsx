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

  const startCrawl = (id: number) => {
    startCrawlBook(id).then(() => {
      message.success("fetch success");
    });
  };

  return (
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
          <Button type="link" onClick={() => startCrawl(record.id)}>
            抓取
          </Button>
        </>
      )}
    />
  );
}
