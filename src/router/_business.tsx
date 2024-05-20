/* eslint-disable react-refresh/only-export-components */
import { Outlet } from "react-router-dom";
import { lazy } from "react";
import { AppRouteObject } from "app";
import {
  HomeOutlined,
  BranchesOutlined,
  UsergroupDeleteOutlined,
  BookOutlined,
  DatabaseOutlined,
} from "@ant-design/icons";
const CategoryPage = lazy(() => import("@/pages/business/category.tsx"));
const AuthorPage = lazy(() => import("@/pages/business/author.tsx"));
const BookPage = lazy(() => import("@/pages/business/book.tsx"));
const ChapterPage = lazy(() => import("@/pages/business/chapter.tsx"));

const businessRoute: AppRouteObject = {
  path: "business",
  element: <Outlet />,
  meta: {
    title: "业务管理",
    icon: <HomeOutlined />,
  },
  children: [
    {
      path: "category",
      element: <CategoryPage />,
      meta: {
        title: "类别管理",
        icon: <BranchesOutlined />,
      },
    },
    {
      path: "author",
      element: <AuthorPage />,
      meta: {
        title: "作者管理",
        icon: <UsergroupDeleteOutlined />,
      },
    },
    {
      path: "book",
      element: <BookPage />,
      meta: {
        title: "书籍管理",
        icon: <BookOutlined />,
      },
    },
    {
      path: "chapter",
      element: <ChapterPage />,
      meta: {
        title: "章节管理",
        icon: <DatabaseOutlined />,
      },
    },
  ],
};

export default businessRoute;
