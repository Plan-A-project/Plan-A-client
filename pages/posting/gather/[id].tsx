import { Stack } from "@chakra-ui/layout";

import BoardCommentList from "@/components/board/BoardCommentList";
import AppContainer from "@/components/common/AppContainer";
import CommentBar from "@/components/common/CommentBar";
import CaretLeft from "@/components/icons/CaretLeft";
import PostingView from "@/components/recruiting/PostingView";
import RecruitingComment from "@/components/recruiting/RecruitingComment";
import Title from "@/components/recruiting/Title";

function PostingGather() {
  return (
    <AppContainer>
      <Stack>
        <Title left={<CaretLeft />} />
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

        <CommentBar
          // withoutDummy
          // replyTo="안녕"
          onCommentSend={(text: string) => console.log(text)}
        />
      </Stack>
    </AppContainer>
  );
}

export default PostingGather;
