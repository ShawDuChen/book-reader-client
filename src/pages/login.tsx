import { login } from "@/api/system/user";
import { setToken } from "@/utils/token";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Card, Form, FormProps, Input, message } from "antd";
import { LoginFieldType } from "app";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginBGSrc from "@/assets/loginbg.png";
import { RoutesContext } from "@/context/route-context";

export default function LoginPage() {
  const initialFormData: FormProps<LoginFieldType>["initialValues"] = {
    username: "",
    password: "",
  };

  const navigate = useNavigate();
  const { refreshRoutes } = useContext(RoutesContext);

  const [loading, setLoading] = useState(false);

  const onFinished: FormProps<LoginFieldType>["onFinish"] = (data) => {
    setLoading(true);
    login(data)
      .then((data) => {
        setToken(data.token);

        message.success("登录成功", 2, () => {
          refreshRoutes();
          navigate("/workspace/profile");
        });
      })
      .catch(() => setLoading(false));
  };

  return (
    <section className="h-screen w-full flex">
      <section
        className="h-screen lg:w-2/3 w-1/2"
        style={{
          backgroundImage: `url(${loginBGSrc})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Card
        title={<h1 className="text-2xl font-bold text-secondary">登录</h1>}
        className="flex flex-col items-center justify-center lg:w-1/3 w-1/2">
        <Form
          initialValues={initialFormData}
          onFinish={onFinished}
          className="lg:w-96 w-auto">
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
          <h2 className="text-secondary mb-4">
            <span>登陆即表示同意</span>
            <Link to="/sys/agreement" className="text-primary">
              《用户协议》
            </Link>
          </h2>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full"
              loading={loading}>
              登录
            </Button>
          </Form.Item>
          <h2 className="text-secondary flex justify-between">
            <span>
              还没有账号？
              <Link to="/sys/register" className="text-primary">
                注册
              </Link>
            </span>
            <Link to="/sys/forget-password" className="text-primary">
              忘记密码？
            </Link>
          </h2>
        </Form>
      </Card>
    </section>
  );
}
