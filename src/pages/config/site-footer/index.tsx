import {
  createSiteFooter,
  deleteSiteFooter,
  fetchSiteFooterList,
  updateSiteFooter,
  exportSiteFooter,
  getSiteFooter,
} from "@/api/config/site-footer";
import { Crud } from "@/components";
import { SiteFooter } from "app";
import columns from "./modules/columns";
import searchs from "./modules/search";
import forms from "./modules/forms";
export default function SiteFooterPage() {
  return (
    <Crud<SiteFooter>
      listApi={fetchSiteFooterList}
      createApi={createSiteFooter}
      updateApi={updateSiteFooter}
      deleteApi={deleteSiteFooter}
      exportApi={exportSiteFooter}
      infoApi={getSiteFooter}
      queryKey="site_footer"
      columns={columns}
      searchs={searchs}
      forms={forms}
    />
  );
}
