import { resetPassword } from "@/api/system/user";
import {
  CloseCircleOutlined,
  LockOutlined,
  PhoneOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Card, Form, Input, message } from "antd";
import { useForm } from "antd/es/form/Form";
import { FormProps } from "antd/lib";
import { User } from "app";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ForgetPasswordPage() {
  const navigate = useNavigate();
  const [form] = useForm<User>();
  const [loading, setLoading] = useState(false);
  const onFinish: FormProps<User>["onFinish"] = async (value) => {
    setLoading(true);
    await resetPassword(value).catch(() => setLoading(false));
    message.success("密码重置成功，请登录系统", 2, () => {
      form.resetFields();
      navigate("/login");
    });
  };

  return (
    <section className="h-screen gradient-container">
      <div className="size-container flex items-center justify-center h-full">
        <Card
          title={
            <h1 className="text-xl font-bold flex justify-between items-center">
              <span>重置密码</span>
              <CloseCircleOutlined
                className=" cursor-pointer"
                onClick={() => navigate("/login")}
              />
            </h1>
          }
          className="md:w-[480px] w-full mx-auto">
          <Form form={form} onFinish={onFinish}>
            <Form.Item
              name={"username"}
              rules={[
                { required: true, type: "email", message: "请输入邮箱格式" },
                { min: 8, max: 20, message: "用户名长度为8-20" },
              ]}>
              <Input placeholder="请输入用户名" prefix={<UserOutlined />} />
            </Form.Item>
            <Form.Item
              name={"tel"}
              rules={[
                { required: true, message: "请输入手机号" },
                { min: 11, max: 11, message: "请输入11位手机号" },
              ]}>
              <Input
                placeholder="请输入手机号"
                prefix={<PhoneOutlined />}
                maxLength={11}
              />
            </Form.Item>
            <Form.Item
              name={"password"}
              rules={[
                { required: true, message: "请输入密码" },
                { min: 8, max: 20, message: "密码长度为8-20" },
              ]}>
              <Input.Password
                placeholder="请输入密码"
                prefix={<LockOutlined />}
              />
            </Form.Item>
            <Button
              loading={loading}
              type="primary"
              htmlType="submit"
              className="w-full">
              重置密码
            </Button>
          </Form>
        </Card>
      </div>
    </section>
  );
}
