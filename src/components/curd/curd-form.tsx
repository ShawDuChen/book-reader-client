import type { FormInstance, FormProps } from "antd";
import { Modal, Form } from "antd";
import { Store } from "antd/es/form/interface";
import { FormItemCondition } from "app";

export type CrudFormProps<T> = {
  form: FormInstance<T>;
  added: boolean;
  conditions?: FormItemCondition<T>[];
  initialValues?: Store;
  onSubmit?: FormProps<T>["onFinish"];
};

function dialogForm<T>({
  form,
  added,
  conditions,
  initialValues,
  onSubmit,
}: CrudFormProps<T>) {
  Modal.confirm({
    type: "confirm",
    icon: null,
    width: 480,
    title: added ? "新增" : "编辑",
    content: (
      <Form
        form={form}
        initialValues={initialValues}
        layout="vertical"
        preserve={false}
        onFinish={(v) => onSubmit && onSubmit({ ...initialValues, ...v })}>
        {conditions?.map((condition) => (
          <Form.Item
            key={condition.name as React.Key}
            name={condition.name as string}
            label={condition.label}
            rules={condition.rules}>
            {condition.formItem}
          </Form.Item>
        ))}
      </Form>
    ),
    onOk: () => {
      return form.validateFields().then(() => {
        form.submit();
      });
    },
    onCancel: () => {
      form.resetFields();
    },
  });
}

export default {
  dialogForm,
};
