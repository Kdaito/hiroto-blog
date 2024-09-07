import CategoryChip from "@/ui/components/category-chip";
import { getCategoryList } from "@/api/cms/category";

const CategoryList = async () => {
  const categories = await getCategoryList();
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <CategoryChip key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoryList;
