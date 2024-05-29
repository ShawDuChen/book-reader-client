/* eslint-disable react-refresh/only-export-components */
import {
  BookOutlined,
  CommentOutlined,
  InboxOutlined,
} from "@ant-design/icons";
import { AppRouteObject } from "app";
import { lazy } from "react";
import { Outlet } from "react-router-dom";

const BookCommentPage = lazy(() => import("@/pages/comment/book-comment"));
const BookReplyPage = lazy(() => import("@/pages/comment/book-reply"));

const commentRoute: AppRouteObject = {
  path: "comment",
  element: <Outlet />,
  meta: {
    title: "评论管理",
    icon: <CommentOutlined />,
  },
  children: [
    {
      path: "bookc",
      element: <BookCommentPage />,
      meta: {
        title: "书籍评论",
        icon: <BookOutlined />,
      },
    },
    {
      path: "bookr",
      element: <BookReplyPage />,
      meta: {
        title: "书籍评论回复",
        icon: <InboxOutlined />,
      },
    },
  ],
};

export default commentRoute;
