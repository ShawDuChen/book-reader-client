/* eslint-disable react-refresh/only-export-components */
import type { RouteObject } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { lazy } from "react";

const CategoryPage = lazy(() => import("@/pages/business/category.tsx"));
const AuthorPage = lazy(() => import("@/pages/business/author.tsx"));
const BookPage = lazy(() => import("@/pages/business/book.tsx"));
const ChapterPage = lazy(() => import("@/pages/business/chapter.tsx"));

const businessRoute: RouteObject = {
  path: "business",
  element: <Outlet />,
  children: [
    {
      path: "category",
      element: <CategoryPage />,
    },
    {
      path: "author",
      element: <AuthorPage />,
    },
    {
      path: "book",
      element: <BookPage />,
    },
    {
      path: "chapter",
      element: <ChapterPage />,
    },
  ],
};

export default businessRoute;
