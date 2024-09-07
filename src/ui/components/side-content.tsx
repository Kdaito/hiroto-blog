import { Suspense } from "react";
import SearchBox from "@/ui/components/search-box";
import CategoryList from "@/ui/components/category-list";
import CategoryChipSuspense from "./category-list-suspense";

const SideContent: React.FC = () => {
  return (
    <div className="py-8 px-4 bg-white rounded w-full">
      <div className="mb-6">
        <SearchBox />
      </div>
      <h3 className="text-sm font-bold border-b pb-1 mb-3">Categories</h3>
      <Suspense fallback={<CategoryChipSuspense />}>
        <CategoryList />
      </Suspense>
    </div>
  );
};

export default SideContent;
