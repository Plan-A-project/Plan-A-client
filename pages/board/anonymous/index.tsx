import { Box } from "@chakra-ui/layout";
import { useRouter } from "next/router";

import BoardBanner from "@/components/board/BoardBanner";
import BoardFAB from "@/components/board/BoardFAB";
import PostsList from "@/components/board/PostsList";
import { AppContainer, Header } from "@/components/common";
import SearchModal from "@/components/common/SearchModal";
import Navbar from "@/components/layout/Navbar";
import { searchFunctionFactory, testAutocompleteFunction } from "@/utils/utils";

function Anonymous() {
  const testSearchFunction = searchFunctionFactory("익명게시판");
  const router = useRouter();
  return (
    <AppContainer>
      <Navbar />
      <Header
        leftTitle
        title="익명게시판"
        rightNode={
          <SearchModal
            autocompleteFunction={testAutocompleteFunction}
            searchFunction={testSearchFunction}
          />
        }
      />
      <BoardBanner>게시판 이용 규칙 안내</BoardBanner>
      <Box mt={4}>
        <PostsList boardName={"익명게시판"} />
      </Box>
      <BoardFAB
        bottom={"70px"}
        onClick={() => router.push(`/board/form?boardId=4&postType=NORMAL`)}
      />
      <Box w={"full"} h={"64px"} />
    </AppContainer>
  );
}

export default Anonymous;
