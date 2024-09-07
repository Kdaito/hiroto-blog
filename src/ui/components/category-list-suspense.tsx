const CategoryChipSuspense: React.FC = async () => (
  <div className="flex flex-wrap gap-2">
    {Array.from({ length: 3 }).map((_, index) => (
      <div
        key={index}
        className="text-white bg-gray-300 rounded text-sm h-5 w-8 hover:bg-gray-400 duration-200"
      />
    ))}
  </div>
);

export default CategoryChipSuspense;
