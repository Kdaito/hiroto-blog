import { CmsDate } from "@/api/cms/types";

/**
 * カテゴリー一覧取得レスポンス
 */
export type CategoryResponse = CmsDate & {
  id: string;
  name: string;
};
