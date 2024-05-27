import { CrudProps } from "@/components";
import { Input, Select } from "antd";
import { Author, Book, Category, CrawlRule } from "app";

const searchs: (
  _?: Author[],
  _2?: Category[],
  _3?: CrawlRule[],
) => CrudProps<Book>["searchs"] = (authors, categorys, crawlRules) => [
  {
    name: "name",
    label: "书名",
    formItem: <Input placeholder="请输入" allowClear />,
  },
  {
    name: "author_id",
    label: "作者",
    formItem: (
      <Select
        placeholder="请选择作者"
        allowClear
        showSearch
        options={authors?.map((item) => ({
          value: item.id,
          label: item.name,
        }))}
        style={{ width: 120 }}
      />
    ),
  },
  {
    name: "category_id",
    label: "分类",
    formItem: (
      <Select
        placeholder="请选择分类"
        allowClear
        showSearch
        options={categorys?.map((item) => ({
          value: item.id,
          label: item.name,
        }))}
        style={{ width: 120 }}
      />
    ),
  },
  {
    name: "crawl_rule_id",
    label: "爬取规则",
    formItem: (
      <Select
        placeholder="请选择规则"
        allowClear
        showSearch
        options={crawlRules?.map((item) => ({
          value: item.id,
          label: item.name,
        }))}
        style={{ width: 120 }}
      />
    ),
  },
];

export default searchs;
