import CategoryChip from "@/ui/components/category-chip";
import { mockCategories } from "@/mock/category";

const SideCategory: React.FC = () => {
  return (
    <div className="py-8 px-4 bg-white rounded w-full">
      <div className="flex mb-6">
        <input
          className="bg-slate-100 text-sm rounded-l px-4 py-2 w-[80%]"
          placeholder="キーワードを入力"
          type="text"
        />
        <button className="bg-slate-500 border w-[20%] rounded-r flex items-center justify-center">
          <img
            src="/search-icon.svg"
            alt="search"
            className="w-[20px] h-[20px]"
          />
        </button>
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

export default SideCategory;
