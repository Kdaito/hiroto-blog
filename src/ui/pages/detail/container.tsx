import PostDetailPresenter from "./presenter";

export default function PostDetailContainer({
  params,
}: {
  params: { id: string };
}) {
  const postId = params.id;
  
  return <PostDetailPresenter />;
} 