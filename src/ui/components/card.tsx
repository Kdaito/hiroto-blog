"use client";

import { Blog } from "@/type/blog";
import CategoryChip from "@/ui/components/category-chip";
import { useRouter } from "next/navigation";

type Props = {
  blog: Blog;
  height?: number;
  minHeight?: number;
};

const Card: React.FC<Props> = ({ blog, height, minHeight }) => {
  const router = useRouter();

  const onClick = () => {
    router.push(`/blog/item/${blog.id}`);
  };

  return (
    <button
      className="flex flex-col text-left w-full bg-white px-12 py-6 rounded hover:bg-slate-100 duration-200"
      style={{ height, minHeight }}
      onClick={onClick}
    >
      <h3 className="font-bold text-xl mb-2">{blog.title}</h3>
      <p className="text-sm opacity-70 my-2">公開日: {blog.publishedAt}</p>
      <div className="flex gap-2 flex-wrap overflow-hidden">
        {blog.categories.map((category) => (
          <CategoryChip key={category.id} category={category} />
        ))}
      </div>
      <p className="mt-3">{blog.summary}</p>
    </button>
  );
};

export default Card;
