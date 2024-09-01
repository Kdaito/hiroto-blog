import { Blog } from "@/type/blog";
import Card from "@/ui/components/card";

type Props = {
  blogs: Blog[];
  pageTitle: string;
  resultCounts: string;
};

const List: React.FC<Props> = ({ blogs, pageTitle, resultCounts }) => {
  return (
    <div>
      <div className="border-b pb-4 flex justify-between items-end">
        <h2 className="text-4xl font-bold">{pageTitle}</h2>
        <p className="text-lg opacity-50">{resultCounts}</p>
      </div>
      <div className="pt-4 grid grid-cols-1 gap-2">
        {blogs.map((blog) => (
          <Card key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default List;
