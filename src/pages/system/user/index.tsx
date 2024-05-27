import {
  createUser,
  deleteUser,
  fetchUserList,
  updateUser,
} from "@/api/system/user";
import { Crud } from "@/components";
import { User } from "app";
import columns from "./modules/columns";
import searchs from "./modules/search";
import forms from "./modules/forms";
export default function UserPage() {
  return (
    <Crud<User>
      listApi={fetchUserList}
      createApi={createUser}
      updateApi={updateUser}
      deleteApi={deleteUser}
      queryKey="user"
      columns={columns}
      searchs={searchs}
      forms={forms([])}
    />
  );
}
