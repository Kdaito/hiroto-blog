import { getBlogList } from "@/api/cms/blog";
import TopPresenter from "@/ui/pages/top/presenter";

const TOP_MAX_ITEMS = 4;

export default async function TopContainer() {
  const blogList = await getBlogList({ offset: 0, limit: TOP_MAX_ITEMS });

  return (
    <TopPresenter blogList={blogList} />
  );
}