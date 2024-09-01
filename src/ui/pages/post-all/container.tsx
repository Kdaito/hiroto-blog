import { getBlogList } from "@/api/cms/blog";
import PostAllPresenter from "./presenter";

const MAX_ITEMS = 8;
const BASE_PATH = "/blog";
const PAGE_TITLE = "All Posts";

export default async function PostAllContainer({
  params,
}: {
  params: { id: string };
}) {
  const currentPage = parseInt(params.id, 10);

  const offset = (currentPage - 1) * MAX_ITEMS;

  const blogList = await getBlogList({ offset: offset, limit: MAX_ITEMS });

  const end = currentPage * MAX_ITEMS;
  const resultCounts = `${offset + 1} ~ ${
    blogList.blogs.length < end ? blogList.blogs.length : end
  }件目`;

  return (
    <PostAllPresenter
      blogList={blogList}
      pageTitle={PAGE_TITLE}
      resultCounts={resultCounts}
      currentPage={currentPage}
      maxItems={MAX_ITEMS}
      basePAth={BASE_PATH}
    />
  );
}
