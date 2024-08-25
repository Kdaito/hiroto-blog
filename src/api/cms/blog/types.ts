import { CmsDate } from "@/api/cms/types";
import { CategoryResponse } from "@/api/cms/category/types";

/**
 * ブログ一覧取得リクエスト
 */
export type GetBlogListRequest = {
  offset: number;
  limit: number;
}

/**
 * ブログ詳細取得レスポンス
 */
export type BlogResponse = CmsDate & {
  id: string;
  title: string;
  author: string;
  summary: string;
  content: string;
  body: string;
  categories: CategoryResponse[];
};
