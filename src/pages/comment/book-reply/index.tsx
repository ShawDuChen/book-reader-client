import {
  createBookReply,
  deleteBookReply,
  fetchBookReplyList,
  updateBookReply,
} from "@/api/comment/book-reply";
import { Crud } from "@/components";
import { BookReply, ReplyActionType } from "app";
import columns from "./modules/columns";
import searchs from "./modules/search";
import forms from "./modules/forms";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { allUser } from "@/api/system/user";
import { allBookComment } from "@/api/comment/book-comment";
import { Button } from "antd";
import { DislikeOutlined, LikeOutlined } from "@ant-design/icons";
import { createBookReplyAction } from "@/api/comment/book-reply.action";
export default function BookReplyPage() {
  const queryClient = useQueryClient();

  const { data: users } = useQuery({
    queryKey: ["all-user"],
    queryFn: allUser,
  });

  const { data: bookComments } = useQuery({
    queryKey: ["all-book-comment"],
    queryFn: allBookComment,
  });

  const actionReply = (reply_id: number, action: ReplyActionType) => {
    createBookReplyAction({ reply_id, action }).then(() => {
      queryClient.invalidateQueries({ queryKey: ["book_reply"] });
    });
  };

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
      renderAction={(record) => (
        <>
          <Button
            type="link"
            icon={<LikeOutlined />}
            onClick={() => actionReply(record.id, "LIKE")}
          />
          <Button
            type="link"
            icon={<DislikeOutlined />}
            onClick={() => actionReply(record.id, "DISLIKE")}
          />
        </>
      )}
    />
  );
}
