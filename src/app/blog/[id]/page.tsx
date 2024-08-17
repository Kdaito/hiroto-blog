import PostAllContainer from "@/ui/pages/post-all/container";

export default function Page({ params }: { params: { id: string } }) {
  return <PostAllContainer params={params} />;
}
