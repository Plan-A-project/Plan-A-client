import { Divider, Flex, Tag } from "@chakra-ui/react";

import BoardBanner from "@/components/board/BoardBanner";
import BoardBaseForm from "@/components/board/BoardBaseForm";
import BoardCategory from "@/components/board/BoardCategory";
import BoardCheckOption from "@/components/board/BoardCheckOption";
import BoardComment from "@/components/board/BoardComment";
import BoardCommentList from "@/components/board/BoardCommentList";
import BoardFAB from "@/components/board/BoardFAB";
import BoardItem from "@/components/board/BoardItem";
import BoardItemContent from "@/components/board/BoardItemContent";
import BoardStack from "@/components/board/BoardStack";
import BoardTabs from "@/components/board/BoardTabs";
import BoardView from "@/components/board/BoardView";
import AppContainer from "@/components/common/AppContainer";
import Header from "@/components/common/Header";

export default function Home() {
  return (
    <AppContainer>
      <Header leftTitle title="테스트" />

      <BoardBanner my={4}>배너 버튼</BoardBanner>

      <BoardTabs
        leftTab={
          <BoardStack>
            <BoardItem comments={24} likes={3} date="2022-12-12">
              <BoardItemContent title="제목이 들어갈 자리" />
            </BoardItem>
            <BoardItem comments={24} likes={3} date="2022-12-12">
              <BoardItemContent
                title="제목이 들어갈 자리"
                description="본문이 들어갈 자리"
              />
            </BoardItem>
            <BoardItem comments={24} likes={3} date="2022-12-12">
              <BoardItemContent
                title="제목이 들어갈 자리"
                description="본문이 들어갈 자리"
                image="https://via.placeholder.com/150"
              />
            </BoardItem>
            <BoardItem comments={24} likes={3} date="2022-12-12">
              <BoardItemContent
                title="제목이 들어갈 자리"
                leftTag={<Tag>하이</Tag>}
              />
            </BoardItem>
          </BoardStack>
        }
        rightTab={<></>}
      />
      <BoardFAB />
      <Divider h={"120px"} />
      <BoardView
        title="제목"
        date="2022.04.04"
        content={`본문이 들어갈 자리입니다. 본문이 들어갈 자리입니다. 본문이 들어갈 자리입니다. 본문이 들어갈 자리입니다. 본문이 들어갈 자리입니다.`}
        images={[
          "https://via.placeholder.com/300x120",
          "https://via.placeholder.com/300x120",
          "https://via.placeholder.com/300x120",
        ]}
      />
      <Divider h={"120px"} />
      <BoardView
        title="제목"
        date="2022.04.04"
        content={`본문이 들어갈 자리입니다. 본문이 들어갈 자리입니다. 본문이 들어갈 자리입니다. 본문이 들어갈 자리입니다. 본문이 들어갈 자리입니다. `}
      />
      <Divider h={"120px"} />
      <BoardBaseForm />

      <Divider h={"120px"} />
      <Flex direction={"column"}>
        <BoardCategory categories={["취업1", "취업2"]} />
        <BoardCheckOption label="공지로 올리기" />
        <BoardBaseForm />
      </Flex>
      <Divider h={"120px"} />

      <BoardCommentList>
        <BoardComment
          profileImage="https://via.placeholder.com/150"
          username="하이"
          depth={0}
          content="댓글입니다."
          withProfile
        />
        <BoardComment
          username="하이"
          depth={0}
          content="댓글입니다."
          withProfile
        />
        <BoardComment username="하이" depth={0} content="댓글입니다." />
      </BoardCommentList>
    </AppContainer>
  );
}
