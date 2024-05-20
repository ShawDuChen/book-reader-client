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

  return <Menu items={items} theme="dark" mode="inline" />;
}
