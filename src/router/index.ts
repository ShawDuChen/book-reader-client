import { flatWithChildren } from "@/utils/flat";
import businessRoute from "./_business";
import configRoute from "./_config";
import systemRoute from "./_system";
import { AppRouteObject } from "app";
import { _blankRoute } from "./_blank";

const routes: AppRouteObject[] = [
  businessRoute,
  configRoute,
  systemRoute,
  _blankRoute,
];

export const flatRoutes = flatWithChildren(routes);

export default routes;
