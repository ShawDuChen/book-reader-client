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
}
