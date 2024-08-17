import PostSearchAllContainer from "@/ui/pages/post-search-all/container";

export default function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return <PostSearchAllContainer searchParams={searchParams} />;
}
