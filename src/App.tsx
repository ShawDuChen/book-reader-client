import AppLayout from "@/layout";
import {
  createBrowserRouter as createRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { Suspense, useState } from "react";
import { getToken } from "@/utils/token.ts";
import routes, { menuToRoutes } from "@/router/index.ts";
import { Spin } from "antd";
import { useQuery } from "@tanstack/react-query";
import { RoutesContext } from "./context/route-context";
import { flatWithChildren } from "./utils/flat";
import PageNotFound from "@/pages/not-found";
import { getUserMenus } from "./api/system/user";
import sysRoutes from "./router/_sys";
import { Menu } from "app";

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

const useMenuToRoute = (menu: Menu[]) => {
  const menuRoutes = menuToRoutes(menu || []);

  const entryRoutes = [...routes, ...menuRoutes];

  const [router, setRouter] = useState(
    createRouter([
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
    ]),
  );

  const updateRouter = (data: Menu[]) => {
    const menuRoutes = menuToRoutes(data || []);
    const entryRoutes = [...routes, ...menuRoutes];
    setRouter(
      createRouter([
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
      ]),
    );
  };

  return {
    entryRoutes,
    router,
    updateRouter,
  };
};

function AppRouter() {
  const { isLoading, data } = useQuery({
    queryKey: ["menu-routes-tree"],
    queryFn: getUserMenus,
    enabled: !!getToken(),
  });
  const { entryRoutes, router, updateRouter } = useMenuToRoute(data || []);
  if (isLoading) return <FullscreenLoading />;

  return (
    <Suspense fallback={<Spin />}>
      <RoutesContext.Provider
        value={{
          routes: entryRoutes,
          flatRoutes: flatWithChildren(entryRoutes),
          refreshRoutes: () => {
            getUserMenus().then((m) => {
              updateRouter(m);
            });
          },
        }}>
        <RouterProvider router={router} />
      </RoutesContext.Provider>
    </Suspense>
  );
}

export default AppRouter;
