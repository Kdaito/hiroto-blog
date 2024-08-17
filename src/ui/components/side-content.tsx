import CategoryChip from "@/ui/components/category-chip";
import { mockCategories } from "@/mock/category";
import SearchBox from "./search-box";

const SideContent: React.FC = () => {
  return (
    <div className="py-8 px-4 bg-white rounded w-full">
      <div className="mb-6">
        <SearchBox />
      </div>
      <h3 className="text-sm font-bold border-b pb-1 mb-3">Categories</h3>
      <div className="flex flex-wrap gap-2">
        {mockCategories.map((category) => (
          <CategoryChip key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default SideContent;
