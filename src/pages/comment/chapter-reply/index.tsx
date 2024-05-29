import {
  createChapterReply,
  deleteChapterReply,
  fetchChapterReplyList,
  updateChapterReply,
} from "@/api/comment/chapter-reply";
import { Crud } from "@/components";
import { ChapterReply, ReplyActionType } from "app";
import columns from "./modules/columns";
import searchs from "./modules/search";
import forms from "./modules/forms";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { allUser } from "@/api/system/user";
import { allChapterComment } from "@/api/comment/chapter-comment";
import { Button } from "antd";
import { DislikeOutlined, LikeOutlined } from "@ant-design/icons";
import { createChapterReplyAction } from "@/api/comment/chapter-reply.action";
export default function ChapterReplyPage() {
  const queryClient = useQueryClient();

  const { data: users } = useQuery({
    queryKey: ["all-user"],
    queryFn: allUser,
  });

  const { data: chapterComments } = useQuery({
    queryKey: ["all-chapter-comment"],
    queryFn: allChapterComment,
  });

  const actionReply = (reply_id: number, action: ReplyActionType) => {
    createChapterReplyAction({ reply_id, action }).then(() => {
      queryClient.invalidateQueries({ queryKey: ["chapter_reply"] });
    });
  };

  return (
    <Crud<ChapterReply>
      listApi={fetchChapterReplyList}
      createApi={createChapterReply}
      updateApi={updateChapterReply}
      deleteApi={deleteChapterReply}
      queryKey="chapter_reply"
      columns={columns}
      searchs={searchs(chapterComments, users)}
      forms={forms(chapterComments, users)}
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
