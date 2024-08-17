import List from "@/ui/components/list";
import PageNation from "@/ui/components/pagination";
import SideCategory from "@/ui/components/side-category";

type Props = {
  pageTitle: string;
  resultCounts: string;
  totalItems: number;
  currentPage: number;
  maxItems: number;
  basePAth: string;
};

const PostAllPresenter: React.FC<Props> = ({
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
          />
        </div>
      </div>
      <div className="sticky top-0 w-[280px] h-[200px] pt-16">
        <SideCategory />
      </div>
    </div>
  );
};

export default PostAllPresenter;
