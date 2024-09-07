import { getBlog } from "@/api/cms/blog";
import PostDetailPresenter from "./presenter";

export default async function PostDetailContainer({
  params,
}: {
  params: { id: string };
}) {
  const blogId = params.id;

  const blog = await getBlog(blogId);

  return <PostDetailPresenter blog={blog} />;
}
