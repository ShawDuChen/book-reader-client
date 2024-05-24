/* eslint-disable react-refresh/only-export-components */
import {
  BookOutlined,
  CodeOutlined,
  DatabaseOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { AppRouteObject } from "app";
import { lazy } from "react";
import { Outlet } from "react-router-dom";

const DictionaryPage = lazy(() => import("@/pages/config/dictionary/index"));
const DictDataPage = lazy(() => import("@/pages/config/dict-data"));
const CodePage = lazy(() => import("@/pages/config/code/index"));
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
    {
      path: "code",
      element: <CodePage />,
      meta: {
        title: "代码生成",
        icon: <CodeOutlined />,
      },
    },
  ],
};

export default configRoute;
