import { Box } from "@chakra-ui/layout";
import { useRouter } from "next/router";

import BoardFAB from "@/components/board/BoardFAB";
import PostsList from "@/components/board/PostsList";
import { AppContainer, Header } from "@/components/common";
import SearchModal from "@/components/common/SearchModal";
import Navbar from "@/components/layout/Navbar";
import { searchFunctionFactory, testAutocompleteFunction } from "@/utils/utils";
function ClubMain() {
  const testSearchFunction = searchFunctionFactory("동아리");
  const router = useRouter();
  return (
    <AppContainer>
      <Navbar currentTab="infoBoard" />
      <Header
        py={4}
        back
        title="동아리"
        rightNode={
          <SearchModal
            autocompleteFunction={testAutocompleteFunction}
            searchFunction={testSearchFunction}
          />
        }
      />
      <PostsList boardName={"동아리"} />
      <BoardFAB
        bottom={"70px"}
        onClick={() => router.push("/board/form?boardId=3&postType=NORMAL")}
      />
    </AppContainer>
  );
}

export default ClubMain;
