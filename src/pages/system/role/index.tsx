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
export default function RolePage() {
  return (
    <Crud<Role>
      listApi={fetchRoleList}
      createApi={createRole}
      updateApi={updateRole}
      deleteApi={deleteRole}
      queryKey="role"
      columns={columns}
      searchs={searchs}
      forms={forms}
    />
  );
}
