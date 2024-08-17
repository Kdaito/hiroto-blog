import Card from "./card";

const Latest: React.FC = () => {
  return (
    <div className="w-[80%] max-w-[1000px] mx-auto">
      <h2 className="text-4xl font-bold border-b pb-4">Latest</h2>
      <div className="pt-4 grid grid-cols-2 gap-2">
        <Card height={300} />
        <Card height={300} />
        <Card height={300} />
        <Card height={300} />
      </div>
    </div>
  );
}

export default Latest;