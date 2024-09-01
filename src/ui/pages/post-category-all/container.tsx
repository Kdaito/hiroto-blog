import { getBlogListByCategory } from "@/api/cms/blog";
import { getCategory } from "@/api/cms/category";
import PostCategoryAllPresenter from "@/ui/pages/post-category-all/presenter";

const MAX_ITEMS = 8;

export default async function PostCategoryAllContainer({
  params,
}: {
  params: { categoryId: string; pageId: string };
}) {
  const currentPage = parseInt(params.pageId, 10);

  const offset = (currentPage - 1) * MAX_ITEMS;
  const end = currentPage * MAX_ITEMS;
  const resultCounts = `${offset + 1} ~ ${end}件目`;

  const category = await getCategory(params.categoryId);

  const basePath = "/blog/category/" + category.id;
  const pageTitle = "Category: " + category.label;

  const blogList = await getBlogListByCategory({
    offset,
    limit: MAX_ITEMS,
    categoryId: params.categoryId,
  });

  return (
    <PostCategoryAllPresenter
      blogList={blogList}
      pageTitle={pageTitle}
      resultCounts={resultCounts}
      currentPage={currentPage}
      maxItems={MAX_ITEMS}
      basePAth={basePath}
    />
  );
}
