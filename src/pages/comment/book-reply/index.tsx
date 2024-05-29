import {
  createBookReply,
  deleteBookReply,
  fetchBookReplyList,
  updateBookReply,
} from "@/api/comment/book-reply";
import { Crud } from "@/components";
import { BookReply } from "app";
import columns from "./modules/columns";
import searchs from "./modules/search";
import forms from "./modules/forms";
import { useQuery } from "@tanstack/react-query";
import { allUser } from "@/api/system/user";
import { allBookComment } from "@/api/comment/book-comment";
export default function BookReplyPage() {
  const { data: users } = useQuery({
    queryKey: ["all-user"],
    queryFn: allUser,
  });

  const { data: bookComments } = useQuery({
    queryKey: ["all-book-comment"],
    queryFn: allBookComment,
  });

  return (
    <Crud<BookReply>
      listApi={fetchBookReplyList}
      createApi={createBookReply}
      updateApi={updateBookReply}
      deleteApi={deleteBookReply}
      queryKey="book_reply"
      columns={columns}
      searchs={searchs(bookComments, users)}
      forms={forms(bookComments, users)}
    />
  );
}
