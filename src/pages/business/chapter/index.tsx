import {
  createChapter,
  deleteChapter,
  fetchChapterList,
  updateChapter,
} from "@/api/business/chapter";
import { Crud } from "@/components";
import { Chapter } from "app";
import columns from "./modules/columns";
import searchs from "./modules/search";
import forms from "./modules/forms";
import { useQuery } from "@tanstack/react-query";
import { allBook } from "@/api/business/book";

export default function ChapterPage() {
  const { data: books } = useQuery({
    queryKey: ["book-all"],
    queryFn: allBook,
  });

  return (
    <Crud<Chapter>
      listApi={fetchChapterList}
      createApi={createChapter}
      updateApi={updateChapter}
      deleteApi={deleteChapter}
      queryKey="Chapter"
      columns={columns}
      searchs={searchs(books)}
      forms={forms(books)}
    />
  );
}
