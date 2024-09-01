import { getBlogListBySearch } from "@/api/cms/blog";
import PostSearchAllPresenter from "@/ui/pages/post-search-all/presenter";
import { searchParamSchema } from "@/validation/schema";
import { SearchParamSchema } from "@/validation/schema/types";

const MAX_ITEMS = 8;

/**
 * フリーワード検索結果
 *
 * Dynamic Rendring
 */
export default async function PostSearchAllContainer({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  // パラメータチェック
  let parsedParams: SearchParamSchema;
  try {
    parsedParams = searchParamSchema.parse(searchParams);
  } catch {
    // TODO エラーハンドリング
    return <div>パラメータが不正です</div>;
  }

  const { q: query, page: currentPage } = parsedParams;

  const offset = (currentPage - 1) * MAX_ITEMS;

  const blogList = await getBlogListBySearch({
    offset,
    limit: MAX_ITEMS,
    keyword: query,
  });

  const end = currentPage * MAX_ITEMS;
  const resultCounts = `${offset + 1} ~ ${
    blogList.blogs.length < end ? blogList.blogs.length : end
  }件目`;
  const basePath = "/blog/search?q=" + query;
  const pageTitle = query + "の検索結果";

  return (
    <PostSearchAllPresenter
      blogList={blogList}
      pageTitle={pageTitle}
      resultCounts={resultCounts}
      currentPage={currentPage}
      maxItems={MAX_ITEMS}
      basePAth={basePath}
    />
  );
}
