/* eslint-disable react-refresh/only-export-components */
import { AppRouteObject } from "app";
import { lazy } from "react";
import { Outlet } from "react-router-dom";

const LoginPage = lazy(() => import("@/pages/login.tsx"));
const AgreementPage = lazy(() => import("@/pages/sys/agreement"));
const RegisterPage = lazy(() => import("@/pages/sys/register"));
const ForgetPasswordPage = lazy(() => import("@/pages/sys/forget-password"));

const sysRoutes: AppRouteObject[] = [
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/sys",
    element: <Outlet />,
    children: [
      {
        path: "agreement",
        element: <AgreementPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "forget-password",
        element: <ForgetPasswordPage />,
      },
    ],
  },
];

export default sysRoutes;
