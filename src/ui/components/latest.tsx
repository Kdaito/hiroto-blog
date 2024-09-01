import { BlogList } from "@/type/blog";
import Card from "@/ui/components/card";

type Props = {
  blogList: BlogList;
};

const Latest: React.FC<Props> = ({ blogList }) => {
  return (
    <div className="w-[80%] max-w-[1000px] mx-auto">
      <h2 className="text-4xl font-bold border-b pb-4">Latest</h2>
      <div className="pt-4 grid grid-cols-2 gap-2">
        {blogList.blogs.map((blog) => (
          <Card key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Latest;
