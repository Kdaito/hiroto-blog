import { createClient } from "microcms-js-sdk";
import type { MicroCMSListResponse, MicroCMSQueries } from "microcms-js-sdk";
import { env } from "@/env";

const client = createClient({
  serviceDomain: env.MICROCMS_SERVICE_DOMAIN,
  apiKey: env.MICROCMS_API_KEY,
});

/**
 * Micro CMS のエンドポイントからリストを取得する
 * 
 * @param endpoint エンドポイント
 * @param queries クエリー
 * @returns リスト
 */
export const getList = async <T>(
  endpoint: string,
  queries?: MicroCMSQueries
): Promise<MicroCMSListResponse<T>> => {
  return await client.getList<T>({
    endpoint,
    queries,
  });
};

/**
 * Micro CMS のエンドポイントから個別のデータを取得する
 * 
 * @param endpoint エンドポイント
 * @param contentId データを取得したいコンテンツのID
 * @param queries クエリー
 * @returns `contentId` に対応するデータ
 */
export const getDetail = async <T>(
  endpoint: string,
  contentId: string,
  queries?: MicroCMSQueries
): Promise<T> => {
  return await client.getListDetail<T>({
    endpoint,
    contentId,
    queries,
  });
};
