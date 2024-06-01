import { updateUser, updateUserPassword } from "@/api/system/user";
import { ImageUpload } from "@/components";
import { useStore } from "@/store";
import { SEX_LIST } from "@/utils/constants";
import { removeToken } from "@/utils/token";
import { CloseOutlined } from "@ant-design/icons";
import {
  Button,
  Card,
  Form,
  FormProps,
  Input,
  Select,
  Spin,
  message,
} from "antd";
import { User, UserUpdatePassword } from "app";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function WorkspaceProfile() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");

  const [loading, setLoading] = useState(false);

  const { user, setUser } = useStore();
  const [form] = Form.useForm<User>();

  const update: FormProps<User>["onFinish"] = (info) => {
    setLoading(true);
    updateUser(info)
      .then(() => {
        message.success("更新成功");
        setUser(info);
      })
      .finally(() => setLoading(false));
  };

  const updatePassword: FormProps<UserUpdatePassword>["onFinish"] = (data) => {
    setLoading(true);
    updateUserPassword(data)
      .then(() => {
        message.success("修改成功，请重新登录", 2, () => {
          removeToken();
          navigate("/login");
        });
      })
      .catch(() => setLoading(false));
  };

  return (
    <Spin spinning={loading}>
      <div className="flex justify-between space-x-4">
        <Card className="flex-1" title="个人信息">
          <Form
            form={form}
            initialValues={user}
            layout="vertical"
            onFinish={update}>
            <Form.Item name="id" hidden>
              <Input />
            </Form.Item>
            <Form.Item name="username" label="用户名">
              <Input disabled />
            </Form.Item>
            <Form.Item
              name="nickname"
              label="用户昵称"
              rules={[{ required: true, message: "用户昵称不能为空" }]}>
              <Input placeholder="请输入" />
            </Form.Item>
            <Form.Item
              name="sex"
              label="性别"
              rules={[{ required: true, message: "请选择性别" }]}>
              <Select placeholder="请选择" options={SEX_LIST} />
            </Form.Item>
            <Form.Item
              name="tel"
              label="联系方式"
              rules={[{ required: true, message: "请输入联系方式" }]}>
              <Input placeholder="请输入联系方式" maxLength={11} />
            </Form.Item>
            <Form.Item
              name="email"
              label="邮箱地址"
              rules={[{ type: "email", message: "请输入正确的邮箱地址" }]}>
              <Input placeholder="请输入邮箱地址" />
            </Form.Item>
            <Form.Item name="address" label="住址">
              <Input placeholder="请输入住址" />
            </Form.Item>
            <Form.Item name="avatar" label="头像">
              <ImageUpload />
            </Form.Item>
            <div className="space-x-2">
              <Button type="primary" htmlType="submit">
                更新信息
              </Button>
              {type !== "change_password" && (
                <Button
                  type="primary"
                  danger
                  onClick={() => {
                    navigate("/workspace/profile?type=change_password");
                  }}>
                  修改密码
                </Button>
              )}
            </div>
          </Form>
        </Card>
        {type && type === "change_password" && (
          <Card
            className="flex-1"
            title={
              <div className="flex items-center justify-between">
                <span>修改密码</span>
                <CloseOutlined
                  className=" cursor-pointer"
                  onClick={() => {
                    navigate("/workspace/profile");
                  }}
                />
              </div>
            }>
            <Form layout="vertical" onFinish={updatePassword}>
              <Form.Item
                name="password"
                label="旧密码"
                rules={[
                  {
                    required: true,
                    message: "请输入密码",
                  },
                ]}>
                <Input.Password placeholder="请输入旧密码" maxLength={16} />
              </Form.Item>
              <Form.Item
                name="confirm_password"
                label="新密码"
                rules={[
                  {
                    required: true,
                    message: "请输入密码",
                  },
                  {
                    min: 8,
                    message: "密码长度不能小于8位",
                  },
                ]}>
                <Input.Password placeholder="请输入新密码" maxLength={16} />
              </Form.Item>
              <div className="space-x-2">
                <Button onClick={() => navigate("/workspace/profile")}>
                  取消
                </Button>
                <Button type="primary" htmlType="submit">
                  确认修改
                </Button>
              </div>
            </Form>
          </Card>
        )}
      </div>
    </Spin>
  );
}
