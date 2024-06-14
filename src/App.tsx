import AppLayout from "@/layout";
import {
  createBrowserRouter as createRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { Suspense } from "react";
import { getToken } from "@/utils/token.ts";
import routes, { menuToRoutes } from "@/router/index.ts";
import { Spin } from "antd";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { RoutesContext } from "./context/route-context";
import { flatWithChildren } from "./utils/flat";
import PageNotFound from "@/pages/not-found";
import { getUserMenus } from "./api/system/user";
import sysRoutes from "./router/_sys";

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

const queryMenuRouter = async (remote: boolean = false) => {
  const menu = remote ? await getUserMenus() : [];
  const menuRoutes = menuToRoutes(menu || []);
  const entryRoutes = [...routes, ...menuRoutes];
  const router = createRouter([
    {
      path: "/",
      element: <Navigate to={"/workspace/profile"} />,
    },
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
    ...sysRoutes,
  ]);
  return { router, entryRoutes };
};

function AppRouter() {
  const queryClient = useQueryClient();
  const { isLoading, data } = useQuery({
    queryKey: ["menu-routes-tree"],
    queryFn: () => {
      return queryMenuRouter(!!getToken());
    },
  });

  return isLoading || !data ? (
    <FullscreenLoading />
  ) : (
    <Suspense fallback={<Spin />}>
      <RoutesContext.Provider
        value={{
          routes: data?.entryRoutes || [],
          flatRoutes: flatWithChildren(data?.entryRoutes || []),
          refreshRoutes: () => {
            queryClient.invalidateQueries({
              queryKey: ["menu-routes-tree"],
            });
          },
        }}>
        <RouterProvider router={data?.router} />
      </RoutesContext.Provider>
    </Suspense>
  );
}

export default AppRouter;
