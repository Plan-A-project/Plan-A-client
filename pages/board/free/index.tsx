import BoardFAB from "@/components/board/BoardFAB";
import FreeBoardTab from "@/components/board/FreeBoardTabs";
import PostsList from "@/components/board/PostsList";
import { AppContainer, Header } from "@/components/common";
import SearchModal from "@/components/common/SearchModal";
import { BOARD_ID_MAP } from "@/utils/boardIdMap";
import { searchFunctionFactory, testAutocompleteFunction } from "@/utils/utils";

function ClubMain() {
  const testSearchFunction = searchFunctionFactory("학교생활");
  return (
    <AppContainer>
      <Header
        back
        title="학교생활"
        rightNode={
          <SearchModal
            autocompleteFunction={testAutocompleteFunction}
            searchFunction={testSearchFunction}
          />
        }
      />
      <FreeBoardTab
        leftLabel="전체"
        rightLabel="공지"
        leftTab={<PostsList boardName={"학교생활"} />}
        rightTab={<PostsList boardName={"학교생활"} type="ANNOUNCEMENT" />}
      ></FreeBoardTab>
      <BoardFAB />
    </AppContainer>
  );
}

export default ClubMain;
