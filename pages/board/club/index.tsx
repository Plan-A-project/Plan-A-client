import BoardFAB from "@/components/board/BoardFAB";
import { AppContainer, Header } from "@/components/common";
import SearchModal from "@/components/common/SearchModal";
import { searchFunctionFactory, testAutocompleteFunction } from "@/utils/utils";

import { AllPosts } from "../free";

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
      <AllPosts />
      <BoardFAB />
    </AppContainer>
  );
}

export default ClubMain;
