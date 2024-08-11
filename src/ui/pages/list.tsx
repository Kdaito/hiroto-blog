import List from "@/ui/components/list";

const MAX_ITEMS = 8;

export default function ListPage({ params }: { params: { id: string } }) {
  const id = parseInt(params.id, 10);
  const start = 1 + (id - 1) * MAX_ITEMS;
  const end = id * MAX_ITEMS;

  return (
    <List pageTitle="All Posts" resultCounts={`${start} ~ ${end}件目`}/>
  );
}
