import { AppContainer } from "@/components/common";
import { Box, Text, Flex, HStack, Divider } from "@chakra-ui/layout";
import Layout from "@/components/layout/Layout";
import BadgeSet from "./BadgeSet";
import { useRef, useEffect } from "react"; // Import useRef and useEffect hooks
import PostsList from "@/components/board/PostsList";
import { Button } from "@chakra-ui/react";
import postApis from "@/api/post";
import { useRouter } from "next/router";
import KnowledgeBestBoardItem from "@/components/board/KnowledgeBestBoardItem";
import useBoardList from "@/hooks/board/useBoardList";
import { FireIcon } from "@/components/icons";
import InfoBoardBlue from "@/components/icons/InfoBoardBlue";
// 스크롤 때문에 appcontainer 뺌 - 화면 꽉 채워서 이동하는 느낌 주기 위해서
// 각 요소마다 마진값 따로 줘야함
const Knowledge = () => {
  const containerRef = useRef<HTMLDivElement>(null); // Ref for the Flex container
  const router = useRouter();
  const recentBoardlist: any = useBoardList({
    boardId: 2,
    order: "recent",
    page: 1,
    type: "NORMAL",
  });
  const handlePost = async () => {
    const response = await postApis.checkAgree();
    if (response.data?.data) {
      router.push(`/board/form?boardId=2&postType=NORMAL`);
    } else {
      // 최초 1회 공지
      if (response.code === 401) {
        alert("글을 작성하려면 로그인 해주세요!");
        router.push("/login");
      } else {
        router.push("/board/initialNotice?boardId=2&postType=NORMAL");
      }
    }
  };
  useEffect(() => {
    // Scroll to the right end of the container smoothly over 10 seconds
    const scrollRight = () => {
      if (containerRef.current) {
        const container = containerRef.current;
        const scrollWidth = container.scrollWidth - container.clientWidth;
        const duration = 30000; // 10 seconds
        const distance = scrollWidth;
        const pixelsPerSecond = distance / (duration / 1000); // Calculate pixels per second

        let startTime = performance.now();

        const animateScroll = (currentTime: number) => {
          const elapsedTime = currentTime - startTime;
          const percentage = elapsedTime / duration;
          let scrollPosition = percentage * distance;

          if (scrollPosition >= scrollWidth) {
            // Reset scroll position to the beginning
            scrollPosition = 0;
            startTime = currentTime; // Reset start time for smooth loop
          }

          container.scrollLeft = scrollPosition;

          requestAnimationFrame(animateScroll);
        };

        requestAnimationFrame(animateScroll);
      }
    };

    // Call the scrollRight function
    scrollRight();
  }, []); // Run the effect only once after the component is mounted
  function formatWithOrdinalSuffix(date: any) {
    const day = date.getDate();

    const monthNames = [
      "1월",
      "2월",
      "3월",
      "4월",
      "5월",
      "6월",
      "7월",
      "8월",
      "9월",
      "10월",
      "11월",
      "12월",
    ];

    const formattedDate = `${monthNames[date.getMonth()]} ${day}일`;
    return formattedDate;
  }

  const currentDate = new Date();
  const formattedDate = formatWithOrdinalSuffix(currentDate);
  return (
    <Layout currentTab="knowledge">
      <Flex flexDir={"column"} alignItems={"center"}>
        <Flex
          flexDir={"column"}
          alignItems={"center"}
          bg={"primary.50"}
          w={"100%"}
          pb={7}
        >
          <Box height={20} />
          <Text textStyle={"headline1"} fontSize={"2rem"} textAlign={"center"}>
            Write. Share. Fly.
          </Text>
          <Text
            textStyle={"subtitle2"}
            textAlign={"center"}
            my={4}
            color={"grey.normal"}
            mb={7}
          >
            내가 알려주고 싶고,
            <br />
            우리도 알고싶은, <br /> 수 많은 지식들 <br />
            <br /> 지식IN플리에서 시작해요.
          </Text>
          <Flex
            overflow={"scroll"}
            w={"100%"}
            css={{ "-ms-overflow-style": "none", "scrollbar-width": "none" }} // Hide scrollbar for Firefox and IE
            ref={containerRef} // Attach the ref to the Flex container
            onTouchMove={e => e.preventDefault()} // Prevent scrolling on touch
            // onWheel={e => e.preventDefault()} // Prevent scrolling on wheel
            tabIndex={-1} // Ensure the container cannot receive focus
          >
            {/* Ensure that BadgeSet components appear in one line */}
            <HStack spacing={4}>
              <BadgeSet />
              <BadgeSet />
              <BadgeSet />
              <BadgeSet />
            </HStack>
          </Flex>
          <Button
            m={4}
            my={6}
            maxWidth={"200px"}
            px={6}
            borderRadius={5}
            onClick={handlePost}
          >
            지금 시작하기
          </Button>
        </Flex>
        <Box m={4} mt={12}>
          <Flex mx={3}>
            <FireIcon />
            <Text textStyle={"headline2"} mx={1}>
              {formattedDate}, 지식IN플리 인기글
            </Text>
          </Flex>
          {recentBoardlist && (
            <KnowledgeBestBoardItem
              key={recentBoardlist[0].postId}
              comments={recentBoardlist[0].commentCount}
              postId={recentBoardlist[0].postId}
              likes={recentBoardlist[0].likeCount}
              views={recentBoardlist[0].viewCount}
              title={recentBoardlist[0].title}
              hasImage={recentBoardlist[0].hasImage}
              image={recentBoardlist[0].thumbnailUrl}
              onClick={() =>
                router.push(`/posting/2/${recentBoardlist[0].postId}`)
              }
            />
          )}
          <Divider opacity={1} mt={"-4px"} />
          <Flex mx={3} my={1} mt={8} align={"flex-end"}>
            <InfoBoardBlue />
            <Text textStyle={"headline2"} mx={1}>
              새로운 게시글
            </Text>
            <Text textStyle={"body3"} color={"grey.700"} mx={1}>
              최신순
            </Text>
          </Flex>
          <PostsList boardName={"대외활동"} />
        </Box>
      </Flex>
    </Layout>
  );
};

export default Knowledge;
