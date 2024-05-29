import { AppRouteObject } from "app";
import { createContext } from "react";

export const RoutesContext = createContext<{
  routes: AppRouteObject[];
  flatRoutes: AppRouteObject[];
}>({
  routes: [],
  flatRoutes: [],
});
