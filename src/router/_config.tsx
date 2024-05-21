/* eslint-disable react-refresh/only-export-components */
import {
  BookOutlined,
  DatabaseOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { AppRouteObject } from "app";
import { lazy } from "react";
import { Outlet } from "react-router-dom";

const DictionaryPage = lazy(() => import("@/pages/config/dictionary"));
const DictDataPage = lazy(() => import("@/pages/config/dict-data"));

const configRoute: AppRouteObject = {
  path: "config",
  element: <Outlet />,
  meta: {
    title: "配置管理",
    icon: <SettingOutlined />,
  },
  children: [
    {
      path: "dictionary",
      element: <DictionaryPage />,
      meta: {
        title: "字典管理",
        icon: <BookOutlined />,
      },
    },
    {
      path: "dictdata",
      element: <DictDataPage />,
      meta: {
        title: "字典数据",
        icon: <DatabaseOutlined />,
      },
    },
  ],
};

export default configRoute;
