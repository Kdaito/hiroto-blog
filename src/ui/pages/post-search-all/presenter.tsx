import List from "@/ui/components/list";
import PageNation from "@/ui/components/pagination";
import SideContent from "@/ui/components/side-content";

type Props = {
  pageTitle: string;
  resultCounts: string;
  totalItems: number;
  currentPage: number;
  maxItems: number;
  basePAth: string;
};

const PostCategoryAllPresenter: React.FC<Props> = ({
  pageTitle,
  resultCounts,
  totalItems,
  currentPage,
  maxItems,
  basePAth,
}) => {
  return (
    <div className="flex gap-5 relative">
      <div>
        <List pageTitle={pageTitle} resultCounts={resultCounts} />
        <div className="flex justify-center py-8">
          <PageNation
            total={totalItems}
            current={currentPage}
            pageSize={maxItems}
            basePath={basePAth}
            isUseQueryParam
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
