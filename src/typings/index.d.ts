declare module "app" {
  import type { RouteObject } from "react-router-dom";
  import { Rule } from "antd/es/form";
  interface LoginFieldType {
    username: string;
    password: string;
  }

  type AppRouteObject = {
    meta?: {
      title?: string;
      icon?: React.ReactDOM | React.JSX;
      hidden?: boolean;
    };
    children?: AppRouteObject[];
  } & RouteObject;

  type PageQuery<T = unknown> = {
    page: number;
    limit: number;
  } & T;

  type PageResult<T = unknown> = {
    total: number;
    lists: T[];
  };

  interface CommonStruct {
    id?: number;
    remark?: string;
    created_at?: string;
    created_by?: string;
    updated_at?: string;
    updated_by?: string;
  }

  interface LogItem extends CommonStruct {
    id: number;
    url: string;
    method: string;
    status: number;
    request_body: string;
    response_body: string;
  }

  interface User extends CommonStruct {
    id: number;
    address: string;
    email: string;
    is_super: string;
    role_id: number;
    sex: string;
    status: string | number;
    tel: string;
    username: string;
    nickname: string;
  }

  interface Role extends CommonStruct {
    id: number;
    name: string;
    authorities: string;
  }

  interface Author extends CommonStruct {
    id: number;
    name: string;
    sex: string;
    tel: string;
  }

  interface Book extends CommonStruct {
    id: number;
    name: string;
    category_id: number;
    author_id: number;
  }

  interface Category extends CommonStruct {
    id: number;
    name: string;
    identify: string;
    remark: string;
  }

  interface Chapter extends CommonStruct {
    id: number;
    no: string;
    title: string;
    content: string;
    url: string;
    book_id: number;
  }

  interface Dictionary extends CommonStruct {
    id: number;
    name: string;
    identify: string;
    status: number;
    remark: string;
  }

  interface DictionaryData extends CommonStruct {
    id: number;
    value: string;
    label: string;
    dict_type: number;
    status: number;
    remark: string;
  }

  interface UserUpdatePassword {
    password: string;
    confirm_password: string;
  }

  type FormItemCondition<T> = {
    name: keyof T;
    label?: string;
    formItem: React.ReactNode;
    rules?: Rule[];
  };

  interface CodeColumn {
    dataIndex: string;
    title: string;
    type: string;
    searchable?: boolean;
    changed?: boolean;
  }

  interface Code extends CommonStruct {
    id: number;
    name: string;
    columns?: CodeColumn[];
  }

  interface CodeGenerateResult {
    table_name: string;
    columns: CodeColumn[];
    interface_code: string;
    crud_file_code: string;
    columns_file_code: string;
    search_file_code: string;
    forms_file_code: string;
    api_file_code: string;
  }
}
