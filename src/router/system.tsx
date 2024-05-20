/* eslint-disable react-refresh/only-export-components */
import type { RouteObject } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { lazy } from "react";

const UserPage = lazy(() => import("@/pages/system/user"));
const RolePage = lazy(() => import("@/pages/system/role"));
const LogPage = lazy(() => import("@/pages/system/log"));

const systemRoute: RouteObject = {
  path: "system",
  element: <Outlet />,
  children: [
    {
      path: "user",
      element: <UserPage />,
    },
    {
      path: "role",
      element: <RolePage />,
    },
    {
      path: "log",
      element: <LogPage />,
    },
  ],
};

export default systemRoute;
