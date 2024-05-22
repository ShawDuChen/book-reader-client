/* eslint-disable react-refresh/only-export-components */
import { AppRouteObject } from "app";
import { lazy } from "react";
import { Outlet } from "react-router-dom";

const WorkspaceProfile = lazy(() => import("@/pages/workspace/profile"));

export const _blankRoute: AppRouteObject = {
  path: "workspace",
  element: <Outlet />,
  meta: {
    hidden: true,
    title: "工作空间",
  },
  children: [
    {
      path: "profile",
      element: <WorkspaceProfile />,
      meta: {
        title: "个人中心",
      },
    },
  ],
};
