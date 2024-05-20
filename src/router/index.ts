import { flatWithChildren } from "@/utils/flat";
import businessRoute from "./_business";
import systemRoute from "./_system";

const routes = [businessRoute, systemRoute];

export const flatRoutes = flatWithChildren(routes);

export default routes;
