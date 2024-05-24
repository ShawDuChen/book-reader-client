import { Button, Form, FormProps } from "antd";
import { Store } from "antd/es/form/interface";
import { CommonStruct, FormItemCondition } from "app";
import { Key } from "react";

export type CrudSearchProps<T> = {
  onChange?: (_: T) => void;
  conditions?: FormItemCondition<T>[];
  initSearch?: Store;
};

function CrudSearch<T extends CommonStruct>(props: CrudSearchProps<T>) {
  const { onChange, conditions } = props;
  const [form] = Form.useForm();

  const onFinish: FormProps<T>["onFinish"] = (data) => {
    onChange && onChange(data);
  };

  return (
    <Form
      form={form}
      initialValues={props.initSearch}
      layout="inline"
      className="space-x-2"
      onFinish={onFinish}>
      {conditions?.map((item) => (
        <Form.Item
          key={item.name as Key}
          name={item.name as string}
          label={item.label}>
          {item.formItem}
        </Form.Item>
      ))}
      <Button htmlType="reset">重置</Button>
      <Button type="primary" htmlType="submit">
        查询
      </Button>
    </Form>
  );
}

export default CrudSearch;
