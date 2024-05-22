import { Menu, MenuProps } from "antd";
import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import routes from "@/router";
import { AppRouteObject } from "app";
import { ItemType } from "antd/es/menu/interface";

function getMenuItem(route: AppRouteObject): ItemType {
  const { path, meta, children } = route;
  return {
    key: `${path}`,
    label: meta?.title || path,
    icon: meta?.icon,
    children:
      children && children.length
        ? children
            .filter((child) => !child.meta?.hidden)
            .map((child) => getMenuItem(child))
        : undefined,
  };
}

export default function AppMenu() {
  const items: MenuProps["items"] = routes
    .filter((route) => !route.meta?.hidden)
    .map((route) => getMenuItem(route));

  const navigate = useNavigate();

  const { pathname } = useLocation();

  const defaultOpenKeys = useMemo(() => {
    return pathname.split("/");
  }, [pathname]);

  const defaultSelectedKeys = useMemo(() => {
    return pathname.split("/");
  }, [pathname]);

  const onMenuItemClick: MenuProps["onClick"] = ({ keyPath }) => {
    const path = keyPath.reverse().join("/");
    navigate(`/${path}`);
  };

  return (
    <Menu
      items={items}
      theme="dark"
      mode="inline"
      defaultOpenKeys={defaultOpenKeys}
      defaultSelectedKeys={defaultSelectedKeys}
      onClick={onMenuItemClick}
    />
  );
}
