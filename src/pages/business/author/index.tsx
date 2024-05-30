import {
  createAuthor,
  deleteAuthor,
  exportAuthor,
  fetchAuthorList,
  updateAuthor,
} from "@/api/business/author";
import { Crud } from "@/components";
import { Author } from "app";
import columns from "./modules/columns";
import searchs from "./modules/search";
import forms from "./modules/forms";

export default function AuthorPage() {
  return (
    <Crud<Author>
      listApi={fetchAuthorList}
      createApi={createAuthor}
      updateApi={updateAuthor}
      deleteApi={deleteAuthor}
      exportApi={exportAuthor}
      queryKey="author"
      columns={columns}
      searchs={searchs}
      forms={forms}
    />
  );
}
