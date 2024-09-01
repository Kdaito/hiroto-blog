import PostDetailContainer from "@/ui/pages/detail/container";

export default function Page({ params }: { params: { id: string } }) {
  return <PostDetailContainer params={params} />;
}
