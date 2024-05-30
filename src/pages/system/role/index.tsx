import {
  createRole,
  deleteRole,
  fetchRoleList,
  updateRole,
} from "@/api/system/role";
import { Crud } from "@/components";
import { Role } from "app";
import columns from "./modules/columns";
import searchs from "./modules/search";
import forms from "./modules/forms";
import MenuDrawer from "./modules/menu-drawer";
import { useState } from "react";
import { Button } from "antd";
export default function RolePage() {
  const [drawerInfo, updateDrawerInfo] = useState({
    open: false,
    role_id: 0,
  });

  return (
    <>
      <Crud<Role>
        listApi={fetchRoleList}
        createApi={createRole}
        updateApi={updateRole}
        deleteApi={deleteRole}
        queryKey="role"
        columns={columns}
        searchs={searchs}
        forms={forms}
        renderAction={(record) => (
          <Button
            type="link"
            onClick={() =>
              updateDrawerInfo({
                role_id: record.id,
                open: true,
              })
            }>
            菜单分配
          </Button>
        )}
      />
      <MenuDrawer
        role_id={drawerInfo.role_id}
        open={drawerInfo.open}
        onClose={() => updateDrawerInfo({ open: false, role_id: 0 })}
      />
    </>
  );
}
