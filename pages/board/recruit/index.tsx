/* eslint-disable @next/next/no-img-element */
import BoardFAB from "@/components/board/BoardFAB";
import FreeBoardTab from "@/components/board/FreeBoardTabs";
import PostsList from "@/components/board/PostsList";
import { Carousel, Header } from "@/components/common";
import SearchModal from "@/components/common/SearchModal";
import { searchFunctionFactory, testAutocompleteFunction } from "@/utils/utils";

function RecruitMain() {
  const testSearchFunction = searchFunctionFactory("채용");
  return (
    <div>
      <Header
        p={4}
        back
        title="채용"
        rightNode={
          <SearchModal
            autocompleteFunction={testAutocompleteFunction}
            searchFunction={testSearchFunction}
          />
        }
      />
      <Carousel>
        <img
          style={{ padding: "0 8px" }}
          alt="banner"
          src="/assets/banner.png"
        />
        <img
          style={{ padding: "0 8px" }}
          alt="banner"
          src="/assets/banner.png"
        />
        <img
          style={{ padding: "0 8px" }}
          alt="banner"
          src="/assets/banner.png"
        />
      </Carousel>
      <FreeBoardTab
        px={4}
        leftLabel="전체"
        rightLabel="모집"
        leftTab={<PostsList boardName={"채용"} />}
        rightTab={<PostsList boardName={"채용"} type="RECRUITMENT" />}
      ></FreeBoardTab>
      <BoardFAB />
    </div>
  );
}

export default RecruitMain;
