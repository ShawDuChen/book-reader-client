declare module "app" {
  import type { RouteObject } from "react-router-dom";
  interface LoginFieldType {
    username: string;
    password: string;
  }

  type AppRouteObject = RouteObject & {
    meta?: {
      title?: string;
      icon?: React.ReactDOM | React.JSX;
      hidden?: boolean;
    };
    children?: AppRouteObject[];
  };

  type PageQuery<T = unknown> = {
    page: number;
    limit: number;
  } & T;

  type PageResult<T = unknown> = {
    total: number;
    lists: T[];
  };

  interface CommonStruct {
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
  }
}
