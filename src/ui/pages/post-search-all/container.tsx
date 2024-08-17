import PostSearchAllPresenter from "@/ui/pages/post-search-all/presenter";
import { searchParamSchema } from "@/validation/schema";
import { SearchParamSchema } from "@/validation/schema/types";

const MAX_ITEMS = 8;

/**
 * フリーワード検索結果
 *
 * Dynamic Rendring
 */
export default function PostSearchAllContainer({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  // パラメータチェック
  let parsedParams: SearchParamSchema;
  try {
    parsedParams = searchParamSchema.parse(searchParams);
  } catch {
    return <div>パラメータが不正です</div>;
  }

  const { q: query, page: currentPage } = parsedParams;

  const start = 1 + (currentPage - 1) * MAX_ITEMS;
  const end = currentPage * MAX_ITEMS;
  const resultCounts = `${start} ~ ${end}件目`;

  const basePath = "/blog/search?q=" + query;
  const pageTitle = query + "の検索結果";

  // TODO fetch data
  const totalItems = 100;

  return (
    <PostSearchAllPresenter
      pageTitle={pageTitle}
      resultCounts={resultCounts}
      totalItems={totalItems}
      currentPage={currentPage}
      maxItems={MAX_ITEMS}
      basePAth={basePath}
    />
  );
}
