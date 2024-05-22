import { Layout, theme } from "antd";
import { AppHeader, AppLogo, AppMenu } from "./components";
import { Suspense, useState } from "react";
import { Outlet } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";

export default function AppLayout() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout className=" h-screen">
      <Layout.Header
        style={{ padding: "0", color: colorBgContainer }}
        className="flex items-center">
        <AppLogo collapsed={collapsed} />
        <AppHeader
          collapsed={collapsed}
          toggle={() => setCollapsed(!collapsed)}
        />
      </Layout.Header>
      <Layout>
        <Layout.Sider
          collapsible
          collapsed={collapsed}
          onCollapse={setCollapsed}
          className="overflow-auto">
          <AppMenu />
        </Layout.Sider>

        <Layout>
          <Layout.Content
            style={{ background: colorBgContainer }}
            className="m-4 p-4 mb-0 overflow-auto">
            <Suspense fallback={<LoadingOutlined />}>
              <Outlet />
            </Suspense>
          </Layout.Content>
          <Layout.Footer className="px-0 py-2 text-center">
            &copy; {` `} copyright;
          </Layout.Footer>
        </Layout>
      </Layout>
    </Layout>
  );
}
