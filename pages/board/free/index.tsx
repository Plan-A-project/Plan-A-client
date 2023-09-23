import { useRouter } from "next/router";

import BoardFAB from "@/components/board/BoardFAB";
import FreeBoardTab from "@/components/board/FreeBoardTabs";
import PostsList from "@/components/board/PostsList";
import { AppContainer, Header } from "@/components/common";
import SearchModal from "@/components/common/SearchModal";
import Navbar from "@/components/layout/Navbar";
import { BOARD_ID_MAP } from "@/utils/boardIdMap";
import { searchFunctionFactory, testAutocompleteFunction } from "@/utils/utils";

function ClubMain() {
  const testSearchFunction = searchFunctionFactory("학교생활");
  const router = useRouter();
  return (
    <AppContainer margin>
      <Navbar currentTab="infoBoard" />
      <Header
        py={4}
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
      <BoardFAB
        bottom={"80px"}
        onClick={() => router.push("/board/form?boardId=5&postType=NORMAL")}
      />
    </AppContainer>
  );
}

export default ClubMain;
