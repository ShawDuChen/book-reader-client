import {
  createChapterComment,
  deleteChapterComment,
  fetchChapterCommentList,
  updateChapterComment,
} from "@/api/comment/chapter-comment";
import { Crud } from "@/components";
import { ChapterComment, CommentActionType } from "app";
import columns from "./modules/columns";
import searchs from "./modules/search";
import forms from "./modules/forms";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { allChapter } from "@/api/business/chapter";
import { allUser } from "@/api/system/user";
import { Button } from "antd";
import { DislikeOutlined, LikeOutlined } from "@ant-design/icons";
import { createChapterCommentAction } from "@/api/comment/chapter-comment-action";
export default function ChapterCommentPage() {
  const queryClient = useQueryClient();

  const { data: chapters } = useQuery({
    queryKey: ["chapter-all"],
    queryFn: allChapter,
  });

  const { data: users } = useQuery({
    queryKey: ["user-all"],
    queryFn: allUser,
  });

  const actionComment = (comment_id: number, action: CommentActionType) => {
    createChapterCommentAction({ comment_id, action }).then(() => {
      queryClient.invalidateQueries({ queryKey: ["chapter_comment"] });
    });
  };

  return (
    <Crud<ChapterComment>
      listApi={fetchChapterCommentList}
      createApi={createChapterComment}
      updateApi={updateChapterComment}
      deleteApi={deleteChapterComment}
      queryKey="chapter_comment"
      columns={columns}
      searchs={searchs(users, chapters)}
      forms={forms(chapters)}
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
