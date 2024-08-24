import { postDetail } from "@/mock/post-detail";
import RichTextRenderer from "../components/rich-text-renderer";
import ClientBackButton from "../components/client-back-button";

const Detail: React.FC = () => {
  return (
    <div>
      <RichTextRenderer content={postDetail} />
      <div className="flex justify-center pt-8 pb-12">
        <ClientBackButton />
      </div>
    </div>
  );
};

export default Detail;
