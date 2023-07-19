import { NextPage } from "next";
import Link from "next/link";

import BoardBanner from "@/components/board/BoardBanner";
import BoardFAB from "@/components/board/BoardFAB";
import BoardItem from "@/components/board/BoardItem";
import BoardItemContent from "@/components/board/BoardItemContent";
import BoardStack from "@/components/board/BoardStack";
import BoardTab from "@/components/board/BoardTabs";
import AppContainer from "@/components/common/AppContainer";
import Header from "@/components/common/Header";
import IconSearch from "@/components/icons/IconSearch";

function getAllPosts() {
  return (
    <BoardStack>
      <Link href={"/anonymous/read"}>
        <BoardItem date="2023.04.11" likes={240} comments={16}>
          <BoardItemContent
            title="제목"
            description="내용"
            image="https://via.placeholder.com/100"
          />
        </BoardItem>
      </Link>
      <Link href={"/anonymous/read"}>
        <BoardItem date="2023.04.11" likes={240} comments={16}>
          <BoardItemContent title="제목" />
        </BoardItem>
      </Link>
      <BoardItem date="2023.04.11" likes={240} comments={16}>
        <BoardItemContent
          title="제목"
          description="내용"
          image="https://via.placeholder.com/100"
        />
      </BoardItem>
    </BoardStack>
  );
}

function getPopularPosts() {}

const Anonymous: NextPage = () => {
  return (
    <AppContainer>
      <Header leftTitle title="익명게시판" rightNode={<IconSearch />} />

      <BoardBanner my={4}>게시판 이용 규칙 안내</BoardBanner>

      <BoardTab leftTab={getAllPosts()} rightTab={<></>} />
      <Link href="/anonymous/write">
        <BoardFAB />
      </Link>
    </AppContainer>
  );
};

export default Anonymous;
