import {
  createDictData,
  deleteDictData,
  fetchDictDataList,
  updateDictData,
} from "@/api/config/dict-data";
import { Crud } from "@/components";
import { DictionaryData } from "app";
import columns from "./modules/columns";
import searchs from "./modules/search";
import forms from "./modules/forms";
import { useQuery } from "@tanstack/react-query";
import { dictionaryAll } from "@/api/config/dictionary";
import { useSearchParams } from "react-router-dom";

export default function DictDataPage() {
  const { data } = useQuery({
    queryKey: ["dictionary-all"],
    queryFn: dictionaryAll,
  });

  const [search] = useSearchParams();

  const initSearch = {
    dict_type: search.get("dictionary")
      ? parseInt(search.get("dictionary") || "")
      : "",
  };

  return (
    <Crud<DictionaryData>
      listApi={fetchDictDataList}
      createApi={createDictData}
      updateApi={updateDictData}
      deleteApi={deleteDictData}
      queryKey="code"
      columns={columns}
      searchs={searchs(data)}
      forms={forms(data)}
      initSearch={initSearch}
    />
  );
}
