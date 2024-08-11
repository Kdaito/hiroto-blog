import List from "@/ui/pages/list";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <List params={params} />
  );
}
