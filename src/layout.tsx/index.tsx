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
      <Layout.Sider
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
        trigger={null}>
        <AppLogo collapsed={collapsed} />
        <AppMenu />
      </Layout.Sider>
      <Layout>
        <Layout.Header
          style={{ background: colorBgContainer, padding: "0 32px" }}
          className="flex items-center">
          <AppHeader
            collapsed={collapsed}
            toggle={() => setCollapsed(!collapsed)}
          />
        </Layout.Header>
        <Layout.Content
          style={{ margin: 16, padding: 16, background: colorBgContainer }}>
          <Suspense fallback={<LoadingOutlined />}>
            <Outlet />
          </Suspense>
        </Layout.Content>
        <Layout.Footer></Layout.Footer>
      </Layout>
    </Layout>
  );
}
