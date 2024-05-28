import { Button, Form, FormProps, Modal, Spin, message } from "antd";
import CrudSearch, { CrudSearchProps } from "./curd-search";
import CrudTable, { CrudTableProps } from "./curd-table";
import CrudForm, { CrudFormProps } from "./curd-form";
import { CommonStruct, PageQuery, PageResult } from "app";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

export type CrudProps<T> = {
  queryKey: string;
  listApi: (_: PageQuery<Partial<T>>) => Promise<PageResult<T>>;
  createApi?: (_: T) => Promise<T>;
  updateApi?: (_: T) => Promise<T>;
  deleteApi?: (_: number) => Promise<T>;
  infoApi?: (_: number) => Promise<T>;
  columns: CrudTableProps<T>["columns"];
  searchs?: CrudSearchProps<T>["conditions"];
  forms?: CrudFormProps<T>["conditions"];
  selectable?: boolean;
  renderAction?: (_: T) => React.ReactNode;
  initSearch?: CrudSearchProps<T>["initSearch"];
  beforeSubmit?: (_: T) => T;
};

function Crud<T extends CommonStruct>(props: CrudProps<T>) {
  const [pageQuery, updatePageQuery] = useState<PageQuery<Partial<T>>>({
    page: 1,
    limit: 20,
  } as PageQuery<Partial<T>>);

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: [props.queryKey, pageQuery],
    queryFn: () => {
      setSelectedRowKeys([]);
      return props.listApi(pageQuery);
    },
  });

  const createMutation = useMutation({
    mutationFn: (data: T) => props.createApi!(data),
    onSuccess: () => {
      message.success("创建成功");
      queryClient.invalidateQueries({
        queryKey: [props.queryKey],
      });
    },
  });

  const updateMutation = useMutation({
    mutationFn: (data: T) => props.updateApi!(data),
    onSuccess: () => {
      message.success("修改成功");
      queryClient.invalidateQueries({
        queryKey: [props.queryKey],
      });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) => props.deleteApi!(id),
    onSuccess: () => {
      message.success("删除成功");
      queryClient.invalidateQueries({
        queryKey: [props.queryKey],
      });
    },
  });

  const askDelete = (id?: number) => {
    if (!id) return;
    Modal.confirm({
      title: "删除提示",
      type: "warning",
      content: "确定删除该数据吗？",
      onOk: () => {
        deleteMutation.mutate(id);
      },
    });
  };

  const [form] = Form.useForm();

  const submitForm: FormProps<T>["onFinish"] = (values) => {
    const submitValues = props.beforeSubmit
      ? props.beforeSubmit(values)
      : values;
    if (!values.id) {
      createMutation.mutate(submitValues);
    } else {
      updateMutation.mutate(submitValues);
    }
  };

  const showFormDialog = async (initialValues?: T) => {
    const options = {
      form,
      onSubmit: submitForm,
      initialValues: initialValues,
      conditions: props.forms,
    };
    if (props.infoApi && initialValues?.id) {
      options.initialValues = await props.infoApi(initialValues.id);
    }
    CrudForm.dialogForm(options);
  };

  return (
    <Spin spinning={isLoading}>
      <CrudSearch
        conditions={props.searchs}
        initSearch={props.initSearch}
        onChange={(query) => updatePageQuery((prev) => ({ ...prev, ...query }))}
      />
      <div className=" space-x-2 my-4">
        <Button type="primary" onClick={() => showFormDialog()}>
          新增
        </Button>
        {props.selectable && (
          <Button type="primary" danger>
            删除
          </Button>
        )}
      </div>
      <CrudTable
        dataSource={data?.lists}
        rowKey={"id"}
        columns={[
          ...(props.columns || []),
          {
            key: "crud-action",
            dataIndex: "crud-action",
            title: "操作",
            render: (_, record) => (
              <div className="space-x-2">
                {props.renderAction && props.renderAction(record)}
                <Button type="link" onClick={() => showFormDialog(record)}>
                  编辑
                </Button>
                <Button type="link" danger onClick={() => askDelete(record.id)}>
                  删除
                </Button>
              </div>
            ),
          },
        ]}
        pagination={{
          current: pageQuery.page,
          pageSize: pageQuery.limit,
          onChange: (page, limit) => {
            updatePageQuery((prev) => ({ ...prev, page, limit }));
          },
        }}
        rowSelection={
          props.selectable
            ? {
                selectedRowKeys: selectedRowKeys,
                onChange: (selectedRowKeys) => {
                  setSelectedRowKeys(selectedRowKeys);
                },
              }
            : undefined
        }
      />
    </Spin>
  );
}

export default Crud;
