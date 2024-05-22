import { flatRoutes } from "@/router";
import {
  LockOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, BreadcrumbProps, Dropdown, MenuProps } from "antd";
import { useMemo } from "react";
import { useMatches } from "react-router-dom";

export default function AppHeader(props: {
  collapsed: boolean;
  toggle: () => void;
}) {
  const items: MenuProps["items"] = [
    {
      key: "profile",
      label: "User Profile",
      icon: <UserOutlined />,
    },
    {
      key: "change_password",
      label: "Change Password",
      icon: <LockOutlined />,
    },
    {
      type: "divider",
    },
    {
      key: "logout",
      label: "Logout",
      icon: <LogoutOutlined />,
    },
  ];

  const macthed = useMatches();

  const breadcrumnItems: BreadcrumbProps["items"] = useMemo(() => {
    return macthed
      .filter((item) => item.pathname !== "/")
      .map(({ pathname }) => {
        const title = pathname.slice(pathname.lastIndexOf("/") + 1);
        const find = flatRoutes.find((r) => r.path === title);
        return {
          key: pathname,
          title: find?.meta?.title || title,
        };
      });
  }, [macthed]);

  return (
    <div className="flex flex-row w-full justify-between items-center px-8">
      <div className="flex items-center space-x-2">
        <div className="text-xl cursor-pointer" onClick={props.toggle}>
          {props.collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </div>
        <Breadcrumb items={breadcrumnItems} style={{ color: "white" }} />
      </div>
      <Dropdown menu={{ items }}>
        <div className="cursor-pointer space-x-2">
          <UserOutlined />
          <span>Admin</span>
        </div>
      </Dropdown>
    </div>
  );
}
