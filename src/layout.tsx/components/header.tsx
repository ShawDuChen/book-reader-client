import {
  LockOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Dropdown, MenuProps } from "antd";

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

  return (
    <div className="flex flex-row w-full justify-between items-center">
      <div className="text-xl cursor-pointer" onClick={props.toggle}>
        {props.collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
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
