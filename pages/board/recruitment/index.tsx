import { useRouter } from "next/router";

import BoardFAB from "@/components/board/BoardFAB";
import PostsList from "@/components/board/PostsList";
import { AppContainer, Header } from "@/components/common";
import SearchModal from "@/components/common/SearchModal";
import Navbar from "@/components/layout/Navbar";
import { searchFunctionFactory, testAutocompleteFunction } from "@/utils/utils";
import { useEffect, useState } from "react";
import profileApis from "@/api/profile";

function Recruitment() {
  const testSearchFunction = searchFunctionFactory("채용");
  const router = useRouter();
  const [role, setRole] = useState<string>("");

  useEffect(() => {
    async function getProfile() {
      const response = await profileApis.getProfile();
      setRole(response.data?.data.role);
    }
    getProfile();
  }, []);

  return (
    <AppContainer margin>
      <Navbar currentTab="infoBoard" />
      <Header
        py={4}
        back
        title="채용공고"
        rightNode={
          <SearchModal
            autocompleteFunction={testAutocompleteFunction}
            searchFunction={testSearchFunction}
          />
        }
      />
      <PostsList boardName={"채용"} type="RECRUITMENT" />
      {role === "ADMIN" && (
        <BoardFAB
          bottom={"80px"}
          onClick={() =>
            router.push("/board/form?boardId=1&postType=RECRUITMENT")
          }
        />
      )}
    </AppContainer>
  );
}

export default Recruitment;
