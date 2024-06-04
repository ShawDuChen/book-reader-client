/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";

// 业务管理
const CategoryPage = lazy(() => import("@/pages/business/category/index"));
const AuthorPage = lazy(() => import("@/pages/business/author/index"));
const BookPage = lazy(() => import("@/pages/business/book/index"));
const ChapterPage = lazy(() => import("@/pages/business/chapter/index"));

// 评论管理
const BookCommentPage = lazy(() => import("@/pages/comment/book-comment"));
const BookReplyPage = lazy(() => import("@/pages/comment/book-reply"));
const ChapterCommentPage = lazy(
  () => import("@/pages/comment/chapter-comment"),
);
const ChapterReplyPage = lazy(() => import("@/pages/comment/chapter-reply"));

// 配置管理
const DictionaryPage = lazy(() => import("@/pages/config/dictionary/index"));
const DictDataPage = lazy(() => import("@/pages/config/dict-data/index"));
const CodePage = lazy(() => import("@/pages/config/code/index"));
const SiteFooterPage = lazy(() => import("@/pages/config/site-footer/index"));

// 系统管理
const UserPage = lazy(() => import("@/pages/system/user/index"));
const RolePage = lazy(() => import("@/pages/system/role/index"));
const LogPage = lazy(() => import("@/pages/system/log"));
const CrawlRulePage = lazy(() => import("@/pages/system/crawl-rule/index"));
const MenuPage = lazy(() => import("@/pages/system/menu"));
const SourcePage = lazy(() => import("@/pages/system/source/index"));

export const RouteComponentMap: Record<string, unknown> = {
  CategoryPage,
  AuthorPage,
  BookPage,
  ChapterPage,
  BookCommentPage,
  BookReplyPage,
  ChapterCommentPage,
  ChapterReplyPage,
  DictionaryPage,
  DictDataPage,
  CodePage,
  SiteFooterPage,
  UserPage,
  RolePage,
  LogPage,
  CrawlRulePage,
  MenuPage,
  SourcePage,
};

export const RouteCOmponentList = [
  "Outlet",
  ...Object.keys(RouteComponentMap),
].map((value) => ({
  value,
  label: value,
}));
