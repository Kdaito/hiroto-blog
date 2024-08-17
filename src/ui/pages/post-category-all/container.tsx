import PostCategoryAllPresenter from "@/ui/pages/post-category-all/presenter";

const MAX_ITEMS = 8;

export default function PostCategoryAllContainer({
  params,
}: {
  params: { categoryId: string; pageId: string };
}) {
  const currentPage = parseInt(params.pageId, 10);

  const start = 1 + (currentPage - 1) * MAX_ITEMS;
  const end = currentPage * MAX_ITEMS;
  const resultCounts = `${start} ~ ${end}件目`;

  // TODO fetch category data
  const cateogry = {
    id: "1",
    name: "Spring boot",
  };

  const basePath = "/blog/category/" + cateogry.id;
  const pageTitle = "Category: " + cateogry.name;

  // TODO fetch data
  const totalItems = 100;

  return (
    <PostCategoryAllPresenter
      pageTitle={pageTitle}
      resultCounts={resultCounts}
      totalItems={totalItems}
      currentPage={currentPage}
      maxItems={MAX_ITEMS}
      basePAth={basePath}
    />
  );
}
