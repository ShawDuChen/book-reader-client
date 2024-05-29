import { Menu, MenuProps } from "antd";
import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppRouteObject } from "app";
import { ItemType } from "antd/es/menu/interface";
import Icon from "@ant-design/icons";
import { ICON_MAP } from "@/utils/constants";

function getMenuItem(route: AppRouteObject): ItemType {
  const { path, meta, children } = route;
  return {
    key: `${path}`,
    label: meta?.title || path,
    icon: meta?.icon ? <Icon component={ICON_MAP[meta.icon]} /> : null,
    children:
      children && children.length
        ? children
            .filter((child) => !child.meta?.hidden)
            .map((child) => getMenuItem(child))
        : undefined,
  };
}

export default function AppMenu({ routes }: { routes: AppRouteObject[] }) {
  const items: MenuProps["items"] = routes
    .filter((route) => !route.meta?.hidden)
    .map((route) => getMenuItem(route));

  console.log("menus::::", routes, items);

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
      className="pb-12"
    />
  );
}
