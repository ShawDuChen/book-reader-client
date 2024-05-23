import {
  createCode,
  deleteCode,
  fetchCodeList,
  updateCode,
  generateCode,
} from "@/api/config/code";
import { Crud } from "@/components";
import { Code, CodeGenerateResult } from "app";
import columns from "./modules/columns";
import searchs from "./modules/search";
import forms from "./modules/forms";
import { Button } from "antd";
import { useState } from "react";
import CodeDrawer from "./modules/drawer";

export default function CodePage() {
  const [open, setOpen] = useState(false);
  const [drawerData, setDrawerData] = useState<CodeGenerateResult>();
  const toGenerateCode = (id: number) => {
    generateCode(id).then((data) => {
      setOpen(true);
      setDrawerData(data);
    });
  };

  return (
    <>
      <Crud<Code>
        listApi={fetchCodeList}
        createApi={createCode}
        updateApi={updateCode}
        deleteApi={deleteCode}
        queryKey="code"
        columns={columns}
        searchs={searchs}
        forms={forms}
        renderAction={(record) => (
          <Button type="link" onClick={() => toGenerateCode(record.id)}>
            生成
          </Button>
        )}
      />
      <CodeDrawer
        data={drawerData}
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
