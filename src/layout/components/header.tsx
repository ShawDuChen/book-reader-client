import { flatRoutes } from "@/router";
import { useStore } from "@/store";
import { removeToken } from "@/utils/token";
import {
  LockOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, BreadcrumbProps, Dropdown, MenuProps, Modal } from "antd";
import { useMemo } from "react";
import { useMatches, useNavigate } from "react-router-dom";

export default function AppHeader(props: {
  collapsed: boolean;
  toggle: () => void;
}) {
  const { user } = useStore();

  const items: MenuProps["items"] = [
    {
      key: "profile",
      label: "个人中心",
      icon: <UserOutlined />,
    },
    {
      key: "change_password",
      label: "修改密码",
      icon: <LockOutlined />,
    },
    {
      type: "divider",
    },
    {
      key: "logout",
      label: "注销",
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

  const askLogout = () => {
    Modal.confirm({
      title: "提示",
      content: "是否退出登录？",
      onOk() {
        removeToken();
        navigate("/login");
      },
    });
  };

  const navigate = useNavigate();

  const onClick: MenuProps["onClick"] = (info) => {
    switch (info.key) {
      case "profile":
        navigate("/workspace/profile");
        break;
      case "change_password":
        navigate("/workspace/profile?type=change_password");
        break;
      case "logout":
        askLogout();
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex flex-row w-full justify-between items-center px-8">
      <div className="flex items-center space-x-2">
        <div className="text-xl cursor-pointer" onClick={props.toggle}>
          {props.collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </div>
        <Breadcrumb items={breadcrumnItems} style={{ color: "white" }} />
      </div>
      <Dropdown menu={{ items, onClick }}>
        <div className="cursor-pointer space-x-2">
          <UserOutlined />
          <span>{user.nickname}</span>
        </div>
      </Dropdown>
    </div>
  );
}
