import React, { useCallback, useEffect, useState, useRef } from "react";

import { AddIcon } from "@chakra-ui/icons";
import { Badge, Center, Box } from "@chakra-ui/layout";
import { useRouter } from "next/router";

import PostsList from "@/components/board/PostsList";
import { AppContainer, Header, FAB } from "@/components/common";
import SearchModal from "@/components/common/SearchModal";
import Navbar from "@/components/layout/Navbar";
import { useDropdown } from "@/hooks/useDropdown";
import { searchFunctionFactory, testAutocompleteFunction } from "@/utils/utils";
import { Spinner } from "@chakra-ui/react";
import NoticeBanner from "@/components/board/NoticeBanner";
import profileApis from "@/api/profile";

function FliMarket() {
  const router = useRouter();
  const testSearchFunction = searchFunctionFactory("대외활동");
  const ref = useRef<HTMLButtonElement>(null);
  const [dropdown, toggle] = useDropdown({
    menus: ["판매글 쓰기", "구매글 쓰기"],
    xGap: -60, // 정렬 위치로 부터 x 거리
    yGap: 10, // 정렬 위치로 부터 y 거리
    hAlign: "left", // ref의 왼쪽에 정렬
    vAlign: "top", // ref 보다 위에 정렬
    onMenuClick: menu => {
      // menu = 인덱스 값 0 ~ 2
      const fetch = async () => {
        const response = await profileApis.getProfile();
        if (response.code === 401) {
          alert("로그인을 진행해주세요.");
          router.push("/login");
        } else {
          router.push("/board/form?boardId=5&postType=NORMAL");
        }
      };
      fetch();

      // 클릭시 닫기도 가능
      // toggle(false);});
    },
    ref,
  });
  return (
    <AppContainer margin>
      <Navbar currentTab="infoBoard" />
      <Header
        py={4}
        back
        title="FLI 마켓"
        rightNode={
          <SearchModal
            autocompleteFunction={testAutocompleteFunction}
            searchFunction={testSearchFunction}
          />
        }
      />
      <NoticeBanner
        text="FLI 마켓 이용 규칙 안내"
        onClick={() => router.push("/posting/5/1575")}
      />
      <Box mb={5} />
      <PostsList boardName={"학교생활"} />

      <FAB
        icon={<AddIcon boxSize={18} />}
        ref={ref}
        r={3}
        b={"80px"}
        onClick={() => toggle(true)}
      ></FAB>
      {dropdown}
    </AppContainer>
  );
}

export default FliMarket;
