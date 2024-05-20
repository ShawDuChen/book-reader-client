import {
  SettingOutlined,
  HomeOutlined,
  BranchesOutlined,
  UsergroupDeleteOutlined,
  BookOutlined,
  DatabaseOutlined,
  UserAddOutlined,
  UserSwitchOutlined,
  RobotOutlined,
} from "@ant-design/icons";
import { Menu, MenuProps } from "antd";
import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function AppMenu() {
  const items: MenuProps["items"] = [
    {
      key: "business",
      label: "Business",
      icon: <HomeOutlined />,
      children: [
        {
          key: "category",
          label: "Category",
          icon: <BranchesOutlined />,
        },
        {
          key: "author",
          label: "Author",
          icon: <UsergroupDeleteOutlined />,
        },
        {
          key: "book",
          label: "Book",
          icon: <BookOutlined />,
        },
        {
          key: "chapter",
          label: "Chapter",
          icon: <DatabaseOutlined />,
        },
      ],
    },
    {
      key: "system",
      label: "System Settings",
      icon: <SettingOutlined />,
      children: [
        {
          key: "user",
          label: "User",
          icon: <UserAddOutlined />,
        },
        {
          key: "role",
          label: "Role",
          icon: <UserSwitchOutlined />,
        },
        {
          key: "log",
          label: "Log",
          icon: <RobotOutlined />,
        },
      ],
    },
  ];

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
