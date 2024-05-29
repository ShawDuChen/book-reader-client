import {
  createBookComment,
  deleteBookComment,
  fetchBookCommentList,
  updateBookComment,
} from "@/api/comment/book-comment";
import { Crud } from "@/components";
import { BookComment, CommentActionType } from "app";
import columns from "./modules/columns";
import searchs from "./modules/search";
import forms from "./modules/forms";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { allBook } from "@/api/business/book";
import { allUser } from "@/api/system/user";
import { Button } from "antd";
import { DislikeOutlined, LikeOutlined } from "@ant-design/icons";
import { createBookCommentAction } from "@/api/comment/book-comment-action";
export default function BookCommentPage() {
  const queryClient = useQueryClient();

  const { data: books } = useQuery({
    queryKey: ["book-all"],
    queryFn: allBook,
  });

  const { data: users } = useQuery({
    queryKey: ["user-all"],
    queryFn: allUser,
  });

  const actionComment = (comment_id: number, action: CommentActionType) => {
    createBookCommentAction({ comment_id, action }).then(() => {
      queryClient.invalidateQueries({ queryKey: ["book_comment"] });
    });
  };

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
      renderAction={(record) => (
        <>
          <Button
            type="link"
            icon={<LikeOutlined />}
            onClick={() => actionComment(record.id, "LIKE")}
          />
          <Button
            type="link"
            icon={<DislikeOutlined />}
            onClick={() => actionComment(record.id, "DISLIKE")}
          />
        </>
      )}
    />
  );
}
