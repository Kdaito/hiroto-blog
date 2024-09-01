import { BlogList } from "@/type/blog";
import List from "@/ui/components/list";
import PageNation from "@/ui/components/pagination";
import SideContent from "@/ui/components/side-content";

type Props = {
  blogList: BlogList;
  pageTitle: string;
  resultCounts: string;
  currentPage: number;
  maxItems: number;
  basePAth: string;
};

const PostCategoryAllPresenter: React.FC<Props> = ({
  blogList,
  pageTitle,
  resultCounts,
  currentPage,
  maxItems,
  basePAth,
}) => {
  return (
    <div className="flex gap-5 relative">
      <div>
        <List
          blogs={blogList.blogs}
          pageTitle={pageTitle}
          resultCounts={resultCounts}
        />
        <div className="flex justify-center py-8">
          <PageNation
            total={blogList.totalCount}
            current={currentPage}
            pageSize={maxItems}
            basePath={basePAth}
          />
        </div>
      </div>
      <div className="sticky top-0 w-[280px] h-[200px] pt-16">
        <SideContent />
      </div>
    </div>
  );
};

export default PostCategoryAllPresenter;
