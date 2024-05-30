import { Layout, theme } from "antd";
import { AppHeader, AppLogo, AppMenu } from "./components";
import { Suspense, useContext } from "react";
import { Outlet } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";
import { useStore } from "@/store";
import { useQuery } from "@tanstack/react-query";
import { getUserInfo } from "@/api/system/user";
import { RoutesContext } from "@/context/route-context";

export default function AppLayout() {
  const { routes } = useContext(RoutesContext);

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { siderCollapsed, toggleSider, setUser } = useStore();

  const { isLoading } = useQuery({
    queryKey: ["userInfo"],
    queryFn: async () => {
      const user = await getUserInfo();
      setUser(user);
      return user;
    },
  });
  return (
    <Layout className=" h-screen">
      <Layout.Header
        style={{ padding: "0", color: colorBgContainer }}
        className="flex items-center">
        <AppLogo collapsed={siderCollapsed} />
        <AppHeader collapsed={siderCollapsed} toggle={toggleSider} />
      </Layout.Header>
      <Layout>
        <Layout.Sider
          collapsible
          collapsed={siderCollapsed}
          onCollapse={toggleSider}
          className="overflow-auto">
          <AppMenu routes={routes} />
        </Layout.Sider>

        <Layout>
          <Layout.Content
            style={{ background: colorBgContainer }}
            className="m-4 p-4 mb-0 overflow-auto">
            {isLoading ? (
              <div className=" h-100 w-100 flex items-center justify-center">
                <LoadingOutlined style={{ fontSize: 50 }} />
              </div>
            ) : (
              <Suspense fallback={<LoadingOutlined />}>
                <Outlet />
              </Suspense>
            )}
          </Layout.Content>
          <Layout.Footer className="px-0 py-2 text-center">
            &copy; {` `} copyright;
          </Layout.Footer>
        </Layout>
      </Layout>
    </Layout>
  );
}
