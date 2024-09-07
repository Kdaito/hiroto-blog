import { getDetail, getList } from "@/api/cms/client";
import { CategoryResponse } from "@/api/cms/category/types";
import type { Category, CategoryList } from "@/type/category";
import { MicroCMSListResponse } from "microcms-js-sdk";

const endpoint = "categories";

/**
 * CMSからカテゴリを取得する
 * @param categoryId カテゴリID
 * 
 * @returns カテゴリ情報
 */
export const getCategory = async (categoryId: string): Promise<Category> => {
  const category = await getDetail<CategoryResponse>(endpoint, categoryId);

  return converResponseToCategory(category);
};

/**
 * CMSからカテゴリ一覧を取得する
 * 
 * @returns カテゴリ情報一覧
 */
export const getCategoryList = async (): Promise<CategoryList> => {
  const categories = await getList<CategoryResponse>(endpoint, {
    orders: "-publishedAt",
  });

  return converResponseToCategoryList(categories);
};

/**
 * CMSから受け取ったカテゴリレスポンスをUI用の`Category`に変換する
 * @param response CMSから受け取ったレスポンス `CategoryResponse`
 * @returns `Category`
 */
const converResponseToCategory = (response: CategoryResponse): Category => ({
  id: response.id,
  label: response.name,
});

/**
 * CMSから受け取ったカテゴリ一覧レスポンスをUI用の`CategoryList`に変換する
 *
 * @param response CMSから受け取ったレスポンス `MicroCMSListResponse<CategoryResponse>`
 * @returns `CategoryList`
 */
const converResponseToCategoryList = (
  response: MicroCMSListResponse<CategoryResponse>
): CategoryList =>
  response.contents.map((content) => ({
    id: content.id,
    label: content.name,
  }));
