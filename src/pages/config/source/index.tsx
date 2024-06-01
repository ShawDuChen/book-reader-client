import {
  createSource,
  deleteSource,
  fetchSourceList,
  updateSource,
  exportSource,
  getSource,
} from "@/api/config/source";
import { Crud } from "@/components";
import { Source } from "app";
import columns from "./modules/columns";
import searchs from "./modules/search";
import forms from "./modules/forms";
export default function SourcePage() {
  return (
    <Crud<Source>
      listApi={fetchSourceList}
      createApi={createSource}
      updateApi={updateSource}
      deleteApi={deleteSource}
      exportApi={exportSource}
      infoApi={getSource}
      queryKey="source"
      columns={columns}
      searchs={searchs}
      forms={forms}
    />
  );
}
