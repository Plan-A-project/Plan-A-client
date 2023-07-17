import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";

import BoardFAB from "@/components/board/BoardFAB";
import BoardItem from "@/components/board/BoardItem";
import BoardItemContent from "@/components/board/BoardItemContent";
import BoardStack from "@/components/board/BoardStack";
import BoardTab from "@/components/board/BoardTabs";
import FreeBoardItem from "@/components/board/FreeBoardItem";
import FreeBoardTab from "@/components/board/FreeBoardTabs";
import { AppContainer, Header } from "@/components/common";
import IconSearch from "@/components/icons/IconSearch";

function ClubMain() {
  const [clubBoardList, setClubBoardList] = useState<any[]>([]);
  useEffect(() => {
    (async function () {
      await setTimeout(() => {
        setClubBoardList([
          {
            id: 1,
            title: "제목",
            description: "본문",
            comments: 24,
            likes: 3,
            date: "2022-12-12",
          },
          {
            id: 2,
            title: "제목",
            description: "본문",
            comments: 24,
            likes: 3,
            date: "2022-12-12",
          },
          {
            id: 3,
            title: "제목",
            description: "본문",
            comments: 24,
            likes: 3,
            date: "2022-12-12",
          },
        ]);
      }, 1000);
    })();
  }, []);

  const router = useRouter();

  return (
    <AppContainer>
      <Header back title="학교생활" rightNode={<IconSearch />} />
      <FreeBoardTab
        leftLabel="전체"
        rightLabel="공지"
        leftTab={
          <>
            <div>
              <button>최신순</button>
              <button>인기순</button>
            </div>
            <BoardStack>
              <FreeBoardItem
                comments={24}
                likes={3}
                date="2022-12-12"
                views={100}
                title="hello"
              />
              <FreeBoardItem
                comments={24}
                likes={3}
                date="2022-12-12"
                views={100}
                title="hello"
              />
              <FreeBoardItem
                comments={24}
                likes={3}
                date="2022-12-12"
                views={100}
                title="hello"
              />
            </BoardStack>
          </>
        }
        rightTab={
          <>
            <BoardStack>
              <FreeBoardItem
                leftTag="학생회"
                comments={24}
                date="2022-12-12"
                views={100}
                title="hello"
              />
              <FreeBoardItem
                leftTag="학생회"
                comments={24}
                date="2022-12-12"
                views={100}
                title="hello"
              />
              <FreeBoardItem
                leftTag="학생회"
                comments={24}
                date="2022-12-12"
                views={100}
                title="hello"
              />
            </BoardStack>
          </>
        }
      />
      <BoardFAB />
    </AppContainer>
  );
}

export default ClubMain;
