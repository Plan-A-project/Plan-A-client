import { useRef } from "react";

import { Box } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

import BoardStack from "@/components/board/BoardStack";
import AppContainer from "@/components/common/AppContainer";
import FAB from "@/components/common/FAB";
import CaretLeft from "@/components/icons/CaretLeft";
import SearchIcon from "@/components/icons/SearchIcon";
import Filter from "@/components/recruiting/Filter";
import RecruitingItemContent from "@/components/recruiting/RecruitingItemContent";
import Title from "@/components/recruiting/Title";
import { useDropdown } from "@/hooks/useDropdown";
import useLineTab from "@/hooks/useLineTab";

import RecruitingItem from "../../components/recruiting/RecruitingItem";

export default function Home() {
  const [activatedTab, LineTab] = useLineTab(["전체", "모집"]);
  const router = useRouter();
  const ref = useRef<HTMLButtonElement>(null);
  const [dropdown, toggle] = useDropdown({
    menus: ["일반글 쓰기", "모집글 쓰기"],
    xGap: 230, // 정렬 위치로 부터 x 거리
    yGap: -110, // 정렬 위치로 부터 y 거리
    hAlign: "left", // ref의 왼쪽에 정렬
    vAlign: "top", // ref 보다 위에 정렬
    onMenuClick: menu => {
      console.log(menu);
      if (menu === 1) router.push("/recruiting/create/recruit");
      else router.push("/recruiting/create/general");
    },
    ref,
  });

  return (
    <AppContainer>
      <Title left={<CaretLeft />} right={<SearchIcon />} title={"채용"} />
      <LineTab />
      <Filter />
      {activatedTab === 0 ? (
        <BoardStack>
          <Link href="/recruiting/posts/1">
            <RecruitingItem
              dday={24}
              watched={3}
              date="5.1~5.7"
              isScrapped={true}
            >
              <RecruitingItemContent
                title="제목이 들어갈 자리"
                member="관리자"
              />
            </RecruitingItem>
          </Link>
          <Link href="/recruiting/posts/1">
            <RecruitingItem
              dday={24}
              watched={3}
              date="5.1~5.7"
              isScrapped={true}
            >
              <RecruitingItemContent title="제목이 들어갈 자리" member="기업" />
            </RecruitingItem>
          </Link>
        </BoardStack>
      ) : (
        <BoardStack>
          <Link href="/recruiting/posts/1">
            <RecruitingItem
              dday={24}
              watched={3}
              date="5.1~5.7"
              isScrapped={true}
            >
              <RecruitingItemContent title="제목이 들어갈 자리" />
            </RecruitingItem>
          </Link>
        </BoardStack>
      )}

      <FAB.Add r={3} b={3} onClick={() => toggle(true)} />
      <Box ref={ref}>{dropdown}</Box>
    </AppContainer>
  );
}
