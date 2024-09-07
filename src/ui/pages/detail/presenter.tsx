import RichTextRenderer from "@/ui/components/rich-text-renderer";
import ClientBackButton from "@/ui/components/client-back-button";
import { Blog } from "@/type/blog";
import CategoryChip from "@/ui/components/category-chip";

type Props = {
  blog: Blog;
};

const PostDetailPresenter: React.FC<Props> = ({ blog }) => (
  <div className="bg-white rounded px-8 py-12">
    <h2 className="text-4xl font-bold pb-4">{blog.title}</h2>
    <div className="pb-4">
      {blog.categories.map((category) => (
        <CategoryChip key={category.id} category={category} />
      ))}
    </div>
    <p className="text-sm text-gray-500 pb-8">公開日: {blog.publishedAt}</p>
    <RichTextRenderer content={blog.body} />
    <div className="flex justify-center pt-8 pb-12">
      <ClientBackButton />
    </div>
  </div>
);

export default PostDetailPresenter;
