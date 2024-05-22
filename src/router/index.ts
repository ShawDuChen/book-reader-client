import { flatWithChildren } from "@/utils/flat";
import businessRoute from "./_business";
import configRoute from "./_config";
import systemRoute from "./_system";
import { AppRouteObject } from "app";

const routes: AppRouteObject[] = [businessRoute, configRoute, systemRoute];

export const flatRoutes = flatWithChildren(routes);

export default routes;
