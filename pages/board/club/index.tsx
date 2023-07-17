import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";

import BoardFAB from "@/components/board/BoardFAB";
import BoardStack from "@/components/board/BoardStack";
import FreeBoardItem from "@/components/board/FreeBoardItem";
import { AppContainer, Header } from "@/components/common";
import IconSearch from "@/components/icons/IconSearch";

function ClubMain() {
  const [freeBoardList, setFreeBoardList] = useState<any[]>([]);
  useEffect(() => {
    (async function () {
      await setTimeout(() => {
        setFreeBoardList([
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
      <Header back title="동아리" rightNode={<IconSearch />} />
      <div>
        <button>최신순</button>
        <button>인기순</button>
      </div>
      <BoardStack>
        {freeBoardList.map(boardItem => (
          <FreeBoardItem
            key={boardItem?.id}
            views={23}
            title={boardItem?.title}
            description={boardItem?.description}
            comments={boardItem?.comments}
            likes={boardItem?.likes}
            date="2022-12-12"
            onClick={() => router.push(`/board/${boardItem?.id}`)}
          />
        ))}
      </BoardStack>
      <BoardFAB />
    </AppContainer>
  );
}

export default ClubMain;
