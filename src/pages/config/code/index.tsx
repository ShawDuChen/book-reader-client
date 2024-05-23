import {
  createCode,
  deleteCode,
  fetchCodeList,
  updateCode,
} from "@/api/config/code";
import { Crud } from "@/components";
import { Code } from "app";
import columns from "./modules/columns";
import searchs from "./modules/search";
import forms from "./modules/forms";

export default function CodePage() {
  return (
    <Crud<Code>
      listApi={fetchCodeList}
      createApi={createCode}
      updateApi={updateCode}
      deleteApi={deleteCode}
      queryKey="code"
      columns={columns}
      searchs={searchs}
      forms={forms}
    />
  );
}
