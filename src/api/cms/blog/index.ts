import type { MicroCMSListResponse } from "microcms-js-sdk";

import { getList } from "@/api/cms/client";
import type { CategoryResponse } from "@/api/cms/category/types";
import type { BlogResponse, GetBlogListRequest } from "@/api/cms/blog/types";
import type { Blog, BlogList } from "@/type/blog";
import type { CategoryList } from "@/type/category";
import { dateConverter } from "../util";

const endpoint = "blogs";

export const getBlogList = async ({
  offset,
  limit,
}: GetBlogListRequest): Promise<BlogList> => {
  // CMSからブログ一覧を取得
  const blogs = await getList<BlogResponse>(endpoint, {
    offset: offset,
    limit: limit,
    orders: "-publishedAt",
  });

  // CMSからのレスポンスをUI用に変換
  return convertResposeToBlogList(blogs);
};

/**
 * CMSから受け取ったブログ一覧レスポンスをUI用の`BlogList`に変換する
 *
 * @param response CMSから受け取ったレスポンス `MicroCMSListResponse<BlogResponse>`
 * @returns `BlogList`
 */
const convertResposeToBlogList = (
  response: MicroCMSListResponse<BlogResponse>
): BlogList => {
  const blogs: Blog[] = response.contents.map((content) => ({
    id: content.id,
    title: content.title,
    author: content.author,
    summary: content.summary,
    body: content.body,
    categories: convertCategoryResponseListToCategoryList(content.categories),
    publishedAt: dateConverter(content.publishedAt),
    updatedAt: dateConverter(content.updatedAt),
  }));

  return {
    blogs,
    totalCount: response.totalCount,
  };
};

/**
 * CMSから受け取ったカテゴリ一覧レスポンス `CategoryResponse` の配列を、UI用の`CategoryList`に変換する
 *
 * @param categoryResponseList CMSから受け取ったカテゴリ一覧
 * @returns UI用の`CategoryList`
 */
const convertCategoryResponseListToCategoryList = (
  categoryResponseList: CategoryResponse[]
): CategoryList => {
  return categoryResponseList.map((categoryResponse) => ({
    id: categoryResponse.id,
    label: categoryResponse.name,
  }));
};
