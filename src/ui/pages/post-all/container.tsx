import PostAllPresenter from "./presenter";

const MAX_ITEMS = 8;
const BASE_PATH = "/blog";
const PAGE_TITLE = "All Posts";

export default function PostAllContainer({
  params,
}: {
  params: { id: string };
}) {
  const currentPage = parseInt(params.id, 10);

  const start = 1 + (currentPage - 1) * MAX_ITEMS;
  const end = currentPage * MAX_ITEMS;
  const resultCounts = `${start} ~ ${end}件目`;

  // TODO fetch data
  const totalItems = 100;

  return (
    <PostAllPresenter
      pageTitle={PAGE_TITLE}
      resultCounts={resultCounts}
      totalItems={totalItems}
      currentPage={currentPage}
      maxItems={MAX_ITEMS}
      basePAth={BASE_PATH}
    />
  );
}
