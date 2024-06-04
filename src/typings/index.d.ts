declare module "app" {
  import type { RouteObject } from "react-router-dom";
  import { Rule } from "antd/es/form";
  interface LoginFieldType {
    username: string;
    password: string;
  }

  type AppRouteObject = {
    meta?: {
      title?: string;
      icon?: React.ReactDOM | React.JSX;
      hidden?: boolean;
    };
    children?: AppRouteObject[];
  } & RouteObject;

  type PageQuery<T = unknown> = {
    page: number;
    limit: number;
  } & T;

  type PageResult<T = unknown> = {
    total: number;
    lists: T[];
  };

  interface CommonStruct {
    id?: number;
    remark?: string;
    created_at?: string;
    created_by?: string;
    updated_at?: string;
    updated_by?: string;
  }

  interface LogItem extends CommonStruct {
    id: number;
    url: string;
    method: string;
    status: number;
    request_body: string;
    response_body: string;
  }

  interface User extends CommonStruct {
    id: number;
    address: string;
    email: string;
    is_super: string;
    role_id: number;
    role?: Role;
    sex: string;
    status: string | number;
    tel: string;
    username: string;
    nickname: string;
    password: string;
    avatar?: string;
  }

  interface Role extends CommonStruct {
    id: number;
    name: string;
    authorities: string;
  }

  interface Author extends CommonStruct {
    id: number;
    name: string;
    sex: string;
    tel: string;
    avatar?: string;
  }

  interface Book extends CommonStruct {
    id: number;
    name: string;
    category_id: number;
    category?: Category;
    author_id: number;
    author?: Author;
    fetch_url?: string;
    crawl_rule_id: number;
    crawl_rule?: CrawlRule;
    cover?: string;
  }

  interface Category extends CommonStruct {
    id: number;
    name: string;
    identify: string;
    remark: string;
  }

  interface Chapter extends CommonStruct {
    id: number;
    no: string;
    title: string;
    content: string;
    url: string;
    book_id: number;
    book?: Book;
  }

  interface Dictionary extends CommonStruct {
    id: number;
    name: string;
    identify: string;
    status: number;
    remark: string;
  }

  interface DictionaryData extends CommonStruct {
    id: number;
    value: string;
    label: string;
    dict_type: number;
    status: number;
    remark: string;
  }

  interface UserUpdatePassword {
    password: string;
    confirm_password: string;
  }

  type FormItemCondition<T> = {
    name: keyof T;
    label?: string;
    formItem: React.ReactNode;
    rules?: Rule[];
  };

  interface CodeColumn {
    dataIndex: string;
    title: string;
    type: string;
    searchable?: boolean;
    changed?: boolean;
  }

  interface Code extends CommonStruct {
    id: number;
    name: string;
    columns?: CodeColumn[];
  }

  interface CodeGenerateResult {
    table_name: string;
    columns: CodeColumn[];
    interface_code: string;
    crud_file_code: string;
    columns_file_code: string;
    search_file_code: string;
    forms_file_code: string;
    api_file_code: string;
  }

  interface CrawlRule extends CommonStruct {
    id: number;
    name: string;
    website_url: string;
    list_selector: string;
    content_selector: string;
    books?: Book[];
  }

  interface Menu extends CommonStruct {
    id: number;
    name: string;
    parent_id: number;
    parent_ids?: number[];
    path: string;
    icon: string;
    component: string;
    visible: number;
    order: number;
    children?: Menu[];
  }

  interface BookComment extends CommonStruct {
    id: number;
    content: string;
    user_id: number;
    user?: User;
    book_id: number;
    book?: Book;
    like_count: number;
    dislike_count: number;
    status: 0 | 1 | 2;
  }

  interface ChapterComment extends CommonStruct {
    id: number;
    content: string;
    user_id: number;
    user?: User;
    chapter_id: number;
    chapter?: Chapter;
    like_count: number;
    dislike_count: number;
    status: 0 | 1 | 2;
  }

  interface BookReply extends CommonStruct {
    id: number;
    content: string;
    comment_id: number;
    comment?: BookComment;
    user_id: number;
    user?: User;
    like_count: number;
    dislike_count: number;
  }

  interface ChapterReply extends CommonStruct {
    id: number;
    content: string;
    comment_id: number;
    comment?: ChapterComment;
    user_id: number;
    user?: User;
    like_count: number;
    dislike_count: number;
  }

  type CommentActionType = "LIKE" | "DISLIKE";
  type ReplyActionType = CommentActionType;

  interface BookCommentAction extends CommonStruct {
    id?: number;
    action?: CommentActionType;
    comment_id?: number;
    user_id?: number;
  }

  interface BookReplyAction extends CommonStruct {
    id?: number;
    action?: ReplyActionType;
    reply_id?: number;
    user_id?: number;
  }

  interface ChapterCommentAction extends CommonStruct {
    id?: number;
    action?: CommentActionType;
    comment_id?: number;
    user_id?: number;
  }

  interface ChapterReplyAction extends CommonStruct {
    id?: number;
    action?: ReplyActionType;
    reply_id?: number;
    user_id?: number;
  }

  type SourceType = "IMAGE" | "VIDEO" | "AUDIO" | "OTHER";

  interface Source extends CommonStruct {
    id: number;
    url: string;
    type: SourceType;
    user_id: number;
    user?: User;
  }

  type SiteFooterType = keyof {
    ABOUT: "ABOUT";
    CONTACT: "CONTACT";
    NEWS: "NEWS";
    SOCIAL: "SOCIAL";
  };

  type SiteFooterSubType = keyof {
    PLATFORM: "PLATFORM";
    COMPANY: "COMPANY";
    PAPER: "PAPER";
  };

  interface SiteFooter extends CommonStruct {
    id: number;
    title: string;
    link: string;
    description: string;
    type: SiteFooterType;
    sub_type: SiteFooterSubType;
  }
}
