import {
  createAdvertiser,
  deleteAdvertiser,
  fetchAdvertiserList,
  updateAdvertiser,
  exportAdvertiser,
  getAdvertiser,
} from "@/api/admgr/advertiser";
import { Crud } from "@/components";
import { Advertiser } from "app";
import columns from "./modules/columns";
import searchs from "./modules/search";
import forms from "./modules/forms";
export default function AdvertiserPage() {
  return (
    <Crud<Advertiser>
      listApi={fetchAdvertiserList}
      createApi={createAdvertiser}
      updateApi={updateAdvertiser}
      deleteApi={deleteAdvertiser}
      exportApi={exportAdvertiser}
      infoApi={getAdvertiser}
      queryKey="advertiser"
      columns={columns}
      searchs={searchs}
      forms={forms}
    />
  );
}
