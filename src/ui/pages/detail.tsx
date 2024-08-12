import { postDetail } from "@/mock/post-detail";
import RichTextRenderer from "../components/rich-text-renderer";

const Detail: React.FC = () => {
  return (
    <div >
      <RichTextRenderer content={postDetail} />
    </div>
  );
};

export default Detail;
