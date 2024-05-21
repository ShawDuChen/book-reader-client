import { flatWithChildren } from "@/utils/flat";
import businessRoute from "./_business";
import configRoute from "./_config";
import systemRoute from "./_system";

const routes = [businessRoute, configRoute, systemRoute];

export const flatRoutes = flatWithChildren(routes);

export default routes;
