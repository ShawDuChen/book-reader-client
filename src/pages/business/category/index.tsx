import {
  createCategory,
  deleteCategory,
  fetchCategoryList,
  updateCategory,
} from "@/api/business/category";
import { Crud } from "@/components";
import columns from "./modules/columns";
import searchs from "./modules/search";
import { Category } from "app";
import forms from "./modules/forms";

export default function CategoryPage() {
  return (
    <Crud<Category>
      listApi={fetchCategoryList}
      createApi={createCategory}
      updateApi={updateCategory}
      deleteApi={deleteCategory}
      queryKey="category"
      columns={columns}
      searchs={searchs}
      forms={forms}
    />
  );
}
