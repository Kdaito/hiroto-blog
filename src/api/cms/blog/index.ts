import type { MicroCMSListResponse } from "microcms-js-sdk";

import { getList } from "@/api/cms/client";
import { dateConverter } from "@/api/cms/util";
import type { CategoryResponse } from "@/api/cms/category/types";
import type { BlogResponse, GetBlogListRequest } from "@/api/cms/blog/types";
import type { Blog, BlogList } from "@/type/blog";
import type { CategoryList } from "@/type/category";

const endpoint = "blogs";

/**
 * 公開日順にブログ一覧を取得する
 * @param offset 取得開始位置
 * @param limit 取得件数
 *
 * @returns ブログ一覧
 */
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
 * カテゴリを指定してブログ一覧を公開日順に取得する
 * @param offset 取得開始位置
 * @param limit 取得件数
 * @param categoryId カテゴリID
 *
 * @returns  カテゴリに紐づくブログ一覧
 */
export const getBlogListByCategory = async ({
  offset,
  limit,
  categoryId,
}: GetBlogListRequest & { categoryId: string }): Promise<BlogList> => {
  // CMSからブログ一覧を取得
  const blogs = await getList<BlogResponse>(endpoint, {
    offset: offset,
    limit: limit,
    filters: `categories[contains]${categoryId}`,
    orders: "-publishedAt",
  });

  // CMSからのレスポンスをUI用に変換
  return convertResposeToBlogList(blogs);
};

/**
 * キーワードを指定してブログ一覧を公開日順に取得する
 * @param offset 取得開始位置
 * @param limit 取得件数
 * @param keyword キーワード
 *
 * @returns キーワードに紐づくブログ一覧
 */
export const getBlogListBySearch = async ({
  offset,
  limit,
  keyword,
}: GetBlogListRequest & { keyword: string }): Promise<BlogList> => {
  // CMSからブログ一覧を取得
  const blogs = await getList<BlogResponse>(endpoint, {
    offset: offset,
    limit: limit,
    q: keyword,
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
