import {
  createMenu,
  deleteMenu,
  getMenu,
  listTreeMenu,
  updateMenu,
} from "@/api/system/menu";
import { Crud } from "@/components";
import { Menu } from "app";
import columns from "./modules/columns";
import searchs from "./modules/search";
import forms from "./modules/forms";
import { useQuery } from "@tanstack/react-query";
export default function MenuPage() {
  const { data: menuTree } = useQuery({
    queryKey: ["menu-tree"],
    queryFn: listTreeMenu,
  });

  return (
    <Crud<Menu>
      listApi={listTreeMenu}
      createApi={createMenu}
      updateApi={updateMenu}
      deleteApi={deleteMenu}
      infoApi={getMenu}
      beforeSubmit={(data) => {
        const { parent_ids, visible, ...rest } = data;
        const parent_id = parent_ids ? parent_ids[parent_ids.length - 1] : 0;
        return { ...rest, parent_id, visible: visible ? 1 : 0 };
      }}
      queryKey="menu"
      columns={columns}
      searchs={searchs}
      forms={forms(menuTree?.lists)}
    />
  );
}
