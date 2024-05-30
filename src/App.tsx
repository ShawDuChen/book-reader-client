import AppLayout from "@/layout";
import {
  createBrowserRouter as createRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { lazy, Suspense } from "react";
import { getToken } from "@/utils/token.ts";
import routes, { menuToRoutes } from "@/router/index.ts";
import { Spin } from "antd";
import { useQuery } from "@tanstack/react-query";
import { listTreeMenu } from "./api/system/menu";
import { RoutesContext } from "./context/route-context";
import { flatWithChildren } from "./utils/flat";
import PageNotFound from "@/pages/not-found";

const LoginPage = lazy(() => import("@/pages/login.tsx"));

const AuthRoute = (props: { children: React.ReactNode }) => {
  const token = getToken();
  if (!token) {
    return <Navigate to={"/login"} />;
  }
  return props.children;
};

const FullscreenLoading = () => (
  <div className=" w-screen h-screen flex justify-center items-center">
    <Spin size="large" />
  </div>
);

function AppRouter() {
  const { isLoading, data } = useQuery({
    queryKey: ["menu-routes-tree"],
    queryFn: listTreeMenu,
    enabled: !!getToken(),
  });
  if (isLoading) return <FullscreenLoading />;

  const { lists } = data || {};

  const menuRoutes = menuToRoutes(lists || []);

  const entryRoutes = [...routes, ...menuRoutes];

  const router = createRouter([
    {
      path: "/",
      element: (
        <AuthRoute>
          <AppLayout />
        </AuthRoute>
      ),
      children: entryRoutes,
      errorElement: <PageNotFound />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
  ]);
  return (
    <Suspense fallback={<Spin />}>
      <RoutesContext.Provider
        value={{
          routes: entryRoutes,
          flatRoutes: flatWithChildren(entryRoutes),
        }}>
        <RouterProvider router={router} />
      </RoutesContext.Provider>
    </Suspense>
  );
}

export default AppRouter;
