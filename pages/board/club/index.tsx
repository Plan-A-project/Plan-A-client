import BoardFAB from "@/components/board/BoardFAB";
import PostsList from "@/components/board/PostsList";
import { AppContainer, Header } from "@/components/common";
import SearchModal from "@/components/common/SearchModal";
import { searchFunctionFactory, testAutocompleteFunction } from "@/utils/utils";

function ClubMain() {
  const testSearchFunction = searchFunctionFactory("동아리");

  return (
    <AppContainer>
      <Header
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
      <BoardFAB />
    </AppContainer>
  );
}

export default ClubMain;
