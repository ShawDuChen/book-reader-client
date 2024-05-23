import type { FormInstance, FormProps, ModalFuncProps } from "antd";
import { Modal, Form } from "antd";
import { Store } from "antd/es/form/interface";
import { FormItemCondition } from "app";
import { useEffect } from "react";

export type CrudFormProps<T> = {
  form: FormInstance<T>;
  conditions?: FormItemCondition<T>[];
  initialValues?: Store;
  onSubmit?: FormProps<T>["onFinish"];
};

function dialogForm<T>({
  form,
  conditions,
  initialValues,
  onSubmit,
}: CrudFormProps<T>) {
  const RenderForm = ({ initialValues }: { initialValues?: Store }) => {
    useEffect(() => {
      form.resetFields();
    }, [initialValues]);
    return (
      <Form
        form={form}
        layout="vertical"
        preserve={false}
        initialValues={initialValues}
        onFinish={(v) => onSubmit && onSubmit({ ...initialValues, ...v })}>
        {conditions?.map((condition) => (
          <Form.Item
            key={`${initialValues ? "modify" : "add"}-${condition.name as string}`}
            name={condition.name as string}
            label={condition.label}
            rules={condition.rules}>
            {condition.formItem}
          </Form.Item>
        ))}
      </Form>
    );
  };

  const options: ModalFuncProps = {
    type: "confirm",
    icon: null,
    width: 480,
    title: !initialValues ? "新增" : "编辑",
    content: <RenderForm key="edit" initialValues={initialValues} />,
    onOk: () => {
      return form.validateFields().then(() => {
        form.submit();
      });
    },
    onCancel: () => {
      destroy();
    },
  };

  const { destroy } = Modal.confirm(options);
}

export default {
  dialogForm,
};
