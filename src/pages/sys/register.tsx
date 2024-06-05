import { register } from "@/api/system/user";
import {
  CloseCircleOutlined,
  LockOutlined,
  PhoneOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Card, Checkbox, Form, Input, Select, message } from "antd";
import { useForm } from "antd/es/form/Form";
import { FormProps } from "antd/lib";
import { User } from "app";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [form] = useForm<User>();
  const [loading, setLoading] = useState(false);
  const onFinish: FormProps<User>["onFinish"] = async (value) => {
    if (!value.agreement) {
      return message.warning("请确认同意并阅读《用户协议》");
    }
    setLoading(true);
    await register({ ...value, agreement: undefined }).catch(() =>
      setLoading(false),
    );
    message.success("注册成功，请登录系统", 2, () => {
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
              <span>注册新账号</span>
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
              name={"nickname"}
              rules={[
                { required: true, message: "请输入昵称" },
                { min: 4, max: 20, message: "昵称长度为4-20" },
              ]}>
              <Input placeholder="请输入昵称" prefix={<UserOutlined />} />
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
              name={"sex"}
              rules={[
                { required: true, type: "number", message: "请选择性别" },
              ]}>
              <Select placeholder="请选择性别">
                <Select.Option value={1}>男</Select.Option>
                <Select.Option value={0}>女</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              name={"address"}
              rules={[{ required: true, message: "请输入地址" }]}>
              <Input placeholder="请输入地址" />
            </Form.Item>
            <Form.Item name={"agreement"} valuePropName="checked">
              <Checkbox>
                我已阅读并同意<Link to="/sys/agreement">《用户协议》</Link>
              </Checkbox>
            </Form.Item>
            <Button
              loading={loading}
              type="primary"
              htmlType="submit"
              className="w-full">
              注册用户
            </Button>
          </Form>
        </Card>
      </div>
    </section>
  );
}
