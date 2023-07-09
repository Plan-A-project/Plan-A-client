import { Box } from "@chakra-ui/layout";
import { NextPage } from "next";
import Link from "next/link";

import BoardItem from "@/components/board/BoardItem";
import BoardItemContent from "@/components/board/BoardItemContent";
import BoardStack from "@/components/board/BoardStack";
import AppContainer from "@/components/common/AppContainer";
import Banner from "@/components/common/Banner";
import FAB from "@/components/common/FAB";
import Header from "@/components/common/Header";
import IconSearch from "@/components/icons/IconSearch";
import { useSorter } from "@/hooks/useSorter";

function getAllPosts() {
  return (
    <BoardStack>
      <Link href={"/anonymous/read"}>
        <BoardItem date="2023.04.11" likes={240} comments={16} views={5}>
          <BoardItemContent
            title="제목"
            description="내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. "
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

const Anonymous: NextPage = () => {
  const [getSortButton] = useSorter();

  return (
    <AppContainer>
      <Header leftTitle title="익명게시판" rightNode={<IconSearch />} />

      <Banner my={4}>
        <Banner.TextBanner text="게시판 이용 규칙 안내" />
      </Banner>
      <Box my={4}>{getSortButton()}</Box>
      {getAllPosts()}

      <Link href="/anonymous/write">
        <FAB.Add r={4} b={4} />
      </Link>
    </AppContainer>
  );
};

export default Anonymous;
