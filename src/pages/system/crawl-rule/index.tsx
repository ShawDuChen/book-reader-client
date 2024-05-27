import {
  createCrawlRule,
  deleteCrawlRule,
  fetchCrawlRuleList,
  updateCrawlRule,
} from "@/api/system/crawl-rule";
import { Crud } from "@/components";
import { CrawlRule } from "app";
import columns from "./modules/columns";
import searchs from "./modules/search";
import forms from "./modules/forms";
export default function CrawlRulePage() {
  return (
    <Crud<CrawlRule>
      listApi={fetchCrawlRuleList}
      createApi={createCrawlRule}
      updateApi={updateCrawlRule}
      deleteApi={deleteCrawlRule}
      queryKey="crawl_rule"
      columns={columns}
      searchs={searchs}
      forms={forms}
    />
  );
}
