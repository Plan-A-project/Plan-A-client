/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";

import { AddIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

import FreeBoardTab from "@/components/board/FreeBoardTabs";
import PostsList from "@/components/board/PostsList";
import { Carousel, Header, FAB, AppContainer } from "@/components/common";
import SearchModal from "@/components/common/SearchModal";
import Navbar from "@/components/layout/Navbar";
import { useDropdown } from "@/hooks/useDropdown";
import { searchFunctionFactory, testAutocompleteFunction } from "@/utils/utils";
import { Image } from "@chakra-ui/react";
import profileApis from "@/api/profile";

function RecruitMain() {
  const router = useRouter();
  const testSearchFunction = searchFunctionFactory("채용");
  const ref = useRef<HTMLButtonElement>(null);
  const [role, setRole] = useState<string>("");

  useEffect(() => {
    async function getProfile() {
      const response = await profileApis.getProfile();
      setRole(response.data?.data.role);
    }
    getProfile();
  }, []);
  const [dropdown, toggle] = useDropdown({
    menus:
      role === "STUDENT" ? ["일반글 쓰기"] : ["일반글 쓰기", "모집글 쓰기"],
    xGap: -60, // 정렬 위치로 부터 x 거리
    yGap: 10, // 정렬 위치로 부터 y 거리
    hAlign: "left", // ref의 왼쪽에 정렬
    vAlign: "top", // ref 보다 위에 정렬
    onMenuClick: menu => {
      // menu = 인덱스 값 0 ~ 2
      menu
        ? router.push("/board/form?boardId=1&postType=RECRUITMENT")
        : router.push("/board/form?boardId=1&postType=NORMAL");
      // 클릭시 닫기도 가능
      // toggle(false);});
    },
    ref,
  });
  return (
    <AppContainer>
      <Navbar currentTab="infoBoard" />
      <Header
        py={4}
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
        <Image
          onClick={() => router.push("/posting/5/100")}
          alt="banner"
          src="/assets/infli_report.png"
        />
      </Carousel>
      <FreeBoardTab
        px={4}
        leftLabel="전체"
        rightLabel="모집"
        leftTab={<PostsList boardName={"채용"} />}
        rightTab={<PostsList boardName={"채용"} type="RECRUITMENT" />}
      ></FreeBoardTab>
      <FAB
        icon={<AddIcon boxSize={18} />}
        ref={ref}
        r={3}
        b={"70px"}
        onClick={() => toggle(true)}
      ></FAB>
      {dropdown}
    </AppContainer>
  );
}

export default RecruitMain;
