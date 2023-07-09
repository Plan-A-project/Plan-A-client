import { useState } from "react";

import { Text } from "@chakra-ui/react";

import BoardBaseForm from "@/components/board/BoardBaseForm";
import BoardComment from "@/components/board/BoardComment";
import BoardCommentList from "@/components/board/BoardCommentList";
import BoardStack from "@/components/board/BoardStack";
import AppContainer from "@/components/common/AppContainer";
import CommentBar from "@/components/common/CommentBar";
import FAB from "@/components/common/FAB";
import CaretLeft from "@/components/icons/CaretLeft";
import SearchIcon from "@/components/icons/SearchIcon";
import Filter from "@/components/recruiting/Filter";
import GeneralPostForm from "@/components/recruiting/GeneralPostForm";
import PostingView from "@/components/recruiting/PostingView";
import RecruitingComment from "@/components/recruiting/RecruitingComment";
import RecruitingItemContent from "@/components/recruiting/RecruitingItemContent";
import RecruitingPostForm from "@/components/recruiting/RecruitingPostForm";
import RecruitingTab from "@/components/recruiting/RecruitingTabs";
import Title from "@/components/recruiting/Title";

import RecruitingItem from "../../components/recruiting/RecruitingItem";

export default function Home() {
  const [isBtnActive, setBtnActive] = useState(false);

  return (
    <AppContainer>
      <Title left={<CaretLeft />} right={<SearchIcon />} title={"채용"} />
      <Filter />
      <RecruitingTab
        leftTab={
          <BoardStack>
            <RecruitingItem
              dday={24}
              watched={3}
              date="5.1~5.7"
              isScrapped={true}
            >
              <RecruitingItemContent title="제목이 들어갈 자리" />
            </RecruitingItem>
            <RecruitingItem
              dday={24}
              watched={3}
              date="5.1~5.7"
              isScrapped={true}
            >
              <RecruitingItemContent
                title="제목이 들어갈 자리"
                member="기업"
                description="본문이 들어갈 자리"
              />
            </RecruitingItem>
            <RecruitingItem
              dday={24}
              watched={3}
              date="5.1~5.7"
              isScrapped={false}
            >
              <RecruitingItemContent
                title="제목이 들어갈 자리"
                member="관리자"
                description="본문이 들어갈 자리"
              />
            </RecruitingItem>
            <RecruitingItem
              dday={24}
              watched={3}
              date="5.1~5.7"
              isScrapped={false}
            >
              <RecruitingItemContent title="제목이 들어갈 자리" member="일반" />
            </RecruitingItem>
          </BoardStack>
        }
        rightTab={<></>}
      />
      <FAB.Add r={3} b={3} />

      <PostingView
        cname="기업명"
        title="제목"
        dday={10}
        author="닉네임"
        watched={23}
        range="2022.04.04 ~ 2023.05.21"
        datePosted="2023.05.11"
        content={`본문이 들어갈 자리입니다. 본문이 들어갈 자리입니다. 본문이 들어갈 자리입니다. 본문이 들어갈 자리입니다. 본문이 들어갈 자리입니다.`}
        images={[
          "https://via.placeholder.com/300x120",
          "https://via.placeholder.com/300x120",
          "https://via.placeholder.com/300x120",
        ]}
      />

      <BoardCommentList>
        <RecruitingComment
          profileImage="https://via.placeholder.com/150"
          username="푸미르"
          time="1시간 전"
          depth={1}
          likes={2}
          content="댓글입니다."
          withProfile
        />
        <RecruitingComment
          username="나는아름다운나비"
          time="1일 전"
          likes={4}
          depth={1}
          content="댓글입니다."
          withProfile
        />
      </BoardCommentList>

      {/* <CommentBar
        // withoutDummy
        // replyTo="안녕"
        onCommentSend={(text: string) => console.log(text)}
      /> */}

      <Title
        title="모집글 쓰기"
        left={<CaretLeft />}
        right={
          isBtnActive ? <Text color={"blue"}>등록</Text> : <Text>등록</Text>
        }
      />
      <RecruitingPostForm setBtnActive={setBtnActive} />

      <Title
        title="글쓰기"
        left={<CaretLeft />}
        right={
          isBtnActive ? <Text color={"blue"}>등록</Text> : <Text>등록</Text>
        }
      />
      <GeneralPostForm setBtnActive={setBtnActive} />
    </AppContainer>
  );
}
