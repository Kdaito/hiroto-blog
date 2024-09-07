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

const PostAllPresenter: React.FC<Props> = ({
  blogList,
  pageTitle,
  resultCounts,
  currentPage,
  maxItems,
  basePAth,
}) => (
  <div className="flex gap-5 relative">
    <div className="w-full">
      <List
        pageTitle={pageTitle}
        blogs={blogList.blogs}
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
    <div className="sticky shrink-0 top-0 w-[280] h-[200px] pt-16">
      <SideContent />
    </div>
  </div>
);

export default PostAllPresenter;
