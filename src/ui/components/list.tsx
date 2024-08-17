import Card from "@/ui/components/card";

type Props = {
  pageTitle: string;
  resultCounts: string;
};

const List: React.FC<Props> = ({ pageTitle, resultCounts }) => {
  return (
    <div>
      <div className="border-b pb-4 flex justify-between items-end">
        <h2 className="text-4xl font-bold">{pageTitle}</h2>
        <p className="text-lg opacity-50">{resultCounts}</p>
      </div>
      <div className="pt-4 grid grid-cols-1 gap-2">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default List;
