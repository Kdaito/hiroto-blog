import { CategoryList } from "@/type/category";

export type Blog = {
  id: string;
  title: string;
  author: string;
  summary: string;
  body: string;
  categories: CategoryList;
  publishedAt: string;
  updatedAt: string;
}

export type BlogList = {
  blogs: Blog[];
  totalCount: number;
}