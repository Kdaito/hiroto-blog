import TopContainer from "@/ui/components/top-container";
import Latest from "@/ui/components/latest";
import { BlogList } from "@/type/blog";

type Props = {
  blogList: BlogList;
};

const TopPresenter: React.FC<Props> = ({ blogList }) => (
  <TopContainer>
    <Latest blogList={blogList} />
  </TopContainer>
);

export default TopPresenter;
