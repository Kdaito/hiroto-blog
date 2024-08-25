import { getList } from "@/api/cms/client";
import { CategoryResponse } from "@/api/cms/category/types";
import type { CategoryList } from "@/type/category";
import { MicroCMSListResponse } from "microcms-js-sdk";

const endpoint = "categories";

export const getCategoryList = async (): Promise<CategoryList> => {
  const categories = await getList<CategoryResponse>(endpoint, {
    orders: "-publishedAt",
  });

  return converResponseToCategoryList(categories);
};

/**
 * CMSから受け取ったカテゴリ一覧レスポンスをUI用の`CategoryList`に変換する
 *
 * @param response CMSから受け取ったレスポンス `MicroCMSListResponse<CategoryResponse>`
 * @returns `CategoryList`
 */
const converResponseToCategoryList = (
  response: MicroCMSListResponse<CategoryResponse>
): CategoryList => {
  return response.contents.map((content) => ({
    id: content.id,
    label: content.name,
  }));
};
