/* eslint-disable react-refresh/only-export-components */
import { Outlet } from "react-router-dom";
import { lazy } from "react";
import { AppRouteObject } from "app";
import {
  ApartmentOutlined,
  UserAddOutlined,
  UserSwitchOutlined,
  RobotOutlined,
  FundProjectionScreenOutlined,
  MenuOutlined,
} from "@ant-design/icons";

const UserPage = lazy(() => import("@/pages/system/user/index"));
const RolePage = lazy(() => import("@/pages/system/role/index"));
const LogPage = lazy(() => import("@/pages/system/log"));
const CrawlRulePage = lazy(() => import("@/pages/system/crawl-rule/index"));
const MenuPage = lazy(() => import("@/pages/system/menu"));

const systemRoute: AppRouteObject = {
  path: "system",
  element: <Outlet />,
  meta: {
    title: "系统管理",
    icon: <ApartmentOutlined />,
  },
  children: [
    {
      path: "role",
      element: <RolePage />,
      meta: {
        title: "角色管理",
        icon: <UserSwitchOutlined />,
      },
    },
    {
      path: "user",
      element: <UserPage />,
      meta: {
        title: "用户管理",
        icon: <UserAddOutlined />,
      },
    },
    {
      path: "crawl-rule",
      element: <CrawlRulePage />,
      meta: {
        title: "爬虫规则",
        icon: <FundProjectionScreenOutlined />,
      },
    },
    {
      path: "menu",
      element: <MenuPage />,
      meta: {
        title: "菜单管理",
        icon: <MenuOutlined />,
      },
    },
    {
      path: "log",
      element: <LogPage />,
      meta: {
        title: "日志管理",
        icon: <RobotOutlined />,
      },
    },
  ],
};

export default systemRoute;
