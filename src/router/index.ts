import { AppRouteObject, Menu } from "app";
import { _blankRoute } from "./_blank";
import { Outlet } from "react-router-dom";
import { RouteComponentMap } from "./_map";

const routes: AppRouteObject[] = [_blankRoute];

export const menuToRoutes: (_: Menu[]) => AppRouteObject[] = (menu: Menu[]) => {
  const recall: (_: Menu[]) => AppRouteObject[] = (menu) => {
    return menu.map((item) => {
      return {
        path: item.path,
        Component: RouteComponentMap[item.component] || Outlet,
        meta: {
          title: item.name,
          icon: item.icon,
          hidden: !item.visible,
        },
        children: item.children ? recall(item.children) : undefined,
      };
    }) as AppRouteObject[];
  };

  return recall(menu);
};

export default routes;
