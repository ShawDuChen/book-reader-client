/* eslint-disable react-refresh/only-export-components */
import { Outlet } from "react-router-dom";
import { lazy } from "react";
import { AppRouteObject } from "app";
import {
  ApartmentOutlined,
  UserAddOutlined,
  UserSwitchOutlined,
  RobotOutlined,
} from "@ant-design/icons";

const UserPage = lazy(() => import("@/pages/system/user/index"));
const RolePage = lazy(() => import("@/pages/system/role/index"));
const LogPage = lazy(() => import("@/pages/system/log"));

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
