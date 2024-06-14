import {
  createAds,
  deleteAds,
  fetchAdsList,
  updateAds,
  exportAds,
  getAds,
} from "@/api/admgr/ads";
import { Crud } from "@/components";
import { Ads } from "app";
import columns from "./modules/columns";
import searchs from "./modules/search";
import forms from "./modules/forms";
import { useQuery } from "@tanstack/react-query";
import { allAdvertiser } from "@/api/admgr/advertiser";
import dayjs from "dayjs";

export default function AdsPage() {
  const { data: advertisers } = useQuery({
    queryKey: ["all-advertiser"],
    queryFn: allAdvertiser,
  });

  return (
    <Crud<Ads>
      listApi={fetchAdsList}
      createApi={createAds}
      updateApi={updateAds}
      deleteApi={deleteAds}
      exportApi={exportAds}
      infoApi={getAds}
      queryKey="ads"
      columns={columns}
      searchs={searchs(advertisers)}
      forms={forms(advertisers)}
      beforeOpenForm={(data) => {
        return {
          ...data,
          expired_at: dayjs(data.expired_at),
        };
      }}
      beforeSubmit={(data) => {
        return {
          ...data,
          expired_at: dayjs(data.expired_at).format("YYYY-MM-DD HH:mm:ss"),
        };
      }}
    />
  );
}
