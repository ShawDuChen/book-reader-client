import {
  createDictionary,
  deleteDictionary,
  fetchDictionaryList,
  updateDictionary,
} from "@/api/config/dictionary";
import { Crud } from "@/components";
import { Dictionary } from "app";
import columns from "./modules/columns";
import searchs from "./modules/search";
import forms from "./modules/forms";
export default function CodePage() {
  return (
    <Crud<Dictionary>
      listApi={fetchDictionaryList}
      createApi={createDictionary}
      updateApi={updateDictionary}
      deleteApi={deleteDictionary}
      queryKey="code"
      columns={columns}
      searchs={searchs}
      forms={forms}
    />
  );
}
