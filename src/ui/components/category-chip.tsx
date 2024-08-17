import Link from "next/link";

type Props = {
  category: Category;
};

const CategoryChip: React.FC<Props> = ({ category: { id, label } }) => {
  return (
    <Link
      href={`/blog/category/${id}/1`}
      className="text-white bg-gray-300 rounded text-sm px-3 hover:bg-gray-400 duration-200"
    >
      {label}
    </Link>
  );
};

export default CategoryChip;
