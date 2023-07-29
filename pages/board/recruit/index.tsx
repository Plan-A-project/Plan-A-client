/* eslint-disable @next/next/no-img-element */
import { useRef } from "react";

import { AddIcon } from "@chakra-ui/icons";

import BoardFAB from "@/components/board/BoardFAB";
import FreeBoardTab from "@/components/board/FreeBoardTabs";
import PostsList from "@/components/board/PostsList";
import { Carousel, Header, FAB } from "@/components/common";
import SearchModal from "@/components/common/SearchModal";
import { useDropdown } from "@/hooks/useDropdown";
import { searchFunctionFactory, testAutocompleteFunction } from "@/utils/utils";

function RecruitMain() {
  const testSearchFunction = searchFunctionFactory("채용");
  const ref = useRef<HTMLButtonElement>(null);
  const [dropdown, toggle] = useDropdown({
    menus: ["일반글 쓰기", "모집글 쓰기"],
    xGap: -60, // 정렬 위치로 부터 x 거리
    yGap: 10, // 정렬 위치로 부터 y 거리
    hAlign: "left", // ref의 왼쪽에 정렬
    vAlign: "top", // ref 보다 위에 정렬
    onMenuClick: menu => {
      // menu = 인덱스 값 0 ~ 2
      console.log(menu);
      // 클릭시 닫기도 가능
      // toggle(false);});
    },
    ref,
  });
  return (
    <div>
      <Header
        p={4}
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
        <img
          style={{ padding: "0 8px" }}
          alt="banner"
          src="/assets/banner.png"
        />
        <img
          style={{ padding: "0 8px" }}
          alt="banner"
          src="/assets/banner.png"
        />
        <img
          style={{ padding: "0 8px" }}
          alt="banner"
          src="/assets/banner.png"
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
        b={3}
        onClick={() => toggle(true)}
      ></FAB>

      {dropdown}
    </div>
  );
}

export default RecruitMain;
