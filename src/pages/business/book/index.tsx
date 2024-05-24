import {
  createBook,
  deleteBook,
  fetchBookList,
  updateBook,
} from "@/api/business/book";
import { Crud } from "@/components";
import { Book } from "app";
import columns from "./modules/columns";
import searchs from "./modules/search";
import forms from "./modules/forms";
import { useQuery } from "@tanstack/react-query";
import { authorAll } from "@/api/business/author";
import { categoryAll } from "@/api/business/category";
export default function BookPage() {
  const { data: authors } = useQuery({
    queryKey: ["author-all"],
    queryFn: authorAll,
  });

  const { data: categorys } = useQuery({
    queryKey: ["category-all"],
    queryFn: categoryAll,
  });

  return (
    <Crud<Book>
      listApi={fetchBookList}
      createApi={createBook}
      updateApi={updateBook}
      deleteApi={deleteBook}
      queryKey="book"
      columns={columns}
      searchs={searchs}
      forms={forms(authors, categorys)}
    />
  );
}
