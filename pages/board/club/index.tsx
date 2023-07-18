import BoardFAB from "@/components/board/BoardFAB";
import { AppContainer, Header } from "@/components/common";
import IconSearch from "@/components/icons/IconSearch";

import { AllPosts } from "../free";

function ClubMain() {
  return (
    <AppContainer>
      <Header back title="동아리" rightNode={<IconSearch />} />
      <AllPosts />
      <BoardFAB />
    </AppContainer>
  );
}

export default ClubMain;
