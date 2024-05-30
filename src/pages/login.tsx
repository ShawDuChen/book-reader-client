import { login } from "@/api/system/user";
import { setToken } from "@/utils/token";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useQueryClient } from "@tanstack/react-query";
import { Button, Card, Form, FormProps, Input, message } from "antd";
import { LoginFieldType } from "app";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const queryClient = useQueryClient();
  const initialFormData: FormProps<LoginFieldType>["initialValues"] = {
    username: "",
    password: "",
  };

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const onFinished: FormProps<LoginFieldType>["onFinish"] = (data) => {
    setLoading(true);
    login(data)
      .then((data) => {
        setToken(data.token);
        queryClient.invalidateQueries({
          queryKey: ["menu-routes-tree"],
        });
        message.success("登录成功", 2, () => {
          navigate("/business/category");
        });
      })
      .catch(() => setLoading(false));
  };

  return (
    <div className=" h-screen w-full flex items-center justify-center">
      <Card
        title={
          <h1 className="text-2xl font-bold text-center">
            {import.meta.env.VITE_APP_TITLE}
          </h1>
        }>
        <Form
          initialValues={initialFormData}
          onFinish={onFinished}
          className="w-96">
          <Form.Item
            name={"username"}
            rules={[
              { required: true, message: "required username!" },
              { type: "email", message: "Please input your email!" },
            ]}>
            <Input placeholder="username" prefix={<UserOutlined />} />
          </Form.Item>
          <Form.Item
            name={"password"}
            rules={[{ required: true, message: "required password!" }]}>
            <Input.Password
              placeholder="password"
              prefix={<LockOutlined />}
              autoComplete="off"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full"
              loading={loading}>
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
