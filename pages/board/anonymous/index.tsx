import BoardFAB from "@/components/board/BoardFAB";
import { AppContainer, Header } from "@/components/common";
import SearchModal from "@/components/common/SearchModal";
import useBoardList from "@/hooks/board/useBoardList";
import { searchFunctionFactory, testAutocompleteFunction } from "@/utils/utils";

import { AllPosts } from "../free";

function AnonymousMain() {
  const anonymousBoardList = useBoardList(4);
  const testSearchFunction = searchFunctionFactory("익명게시판");
  console.log(anonymousBoardList);
  return (
    <AppContainer>
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
      <AllPosts boardList={anonymousBoardList} loading={false} />
      <BoardFAB />
    </AppContainer>
  );
}

export default AnonymousMain;
