import type { FormInstance, FormProps } from "antd";
import { Modal, Form } from "antd";
import { Store } from "antd/es/form/interface";

function dialogForm<T>({
  form,
  added,
  initialValues,
  onSubmit,
}: {
  form: FormInstance<T>;
  added: boolean;
  initialValues?: Store;
  onSubmit?: FormProps<T>["onFinish"];
}) {
  Modal.confirm({
    width: 480,
    title: added ? "新增" : "编辑",
    content: (
      <Form
        form={form}
        initialValues={initialValues}
        layout="vertical"
        preserve={false}
        onFinish={(v) => onSubmit && onSubmit(v)}></Form>
    ),
    onOk: () => {
      form.submit();
    },
    onCancel: () => {
      form.resetFields();
    },
    okText: "确定",
    cancelText: "取消",
  });
}

export default {
  dialogForm,
};
