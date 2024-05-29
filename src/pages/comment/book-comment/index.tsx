import {
  createBookComment,
  deleteBookComment,
  fetchBookCommentList,
  updateBookComment,
} from "@/api/comment/book-comment";
import { Crud } from "@/components";
import { BookComment } from "app";
import columns from "./modules/columns";
import searchs from "./modules/search";
import forms from "./modules/forms";
import { useQuery } from "@tanstack/react-query";
import { allBook } from "@/api/business/book";
import { allUser } from "@/api/system/user";
export default function BookCommentPage() {
  const { data: books } = useQuery({
    queryKey: ["book-all"],
    queryFn: allBook,
  });

  const { data: users } = useQuery({
    queryKey: ["user-all"],
    queryFn: allUser,
  });

  return (
    <Crud<BookComment>
      listApi={fetchBookCommentList}
      createApi={createBookComment}
      updateApi={updateBookComment}
      deleteApi={deleteBookComment}
      queryKey="book_comment"
      columns={columns}
      searchs={searchs(users, books)}
      forms={forms(books)}
    />
  );
}
