import PostCategoryAllContainer from "@/ui/pages/post-category-all/container";

export default function Page({ params }: { params: { categoryId: string, pageId: string } }) {
  return <PostCategoryAllContainer params={params} />;
}
