import { Key, useEffect, useState } from "react";

import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";

import authApis from "@/api/authentication";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import boardApis from "@/api/board";
import { BoxButton, Carousel } from "@/components/common";
import { DeviderWave } from "@/components/icons";
import Layout from "@/components/layout/Layout";
import {
  HomeSettingList,
  HyperLinks,
  TextBanner,
  MainBoardStack,
  MainBoardTitle,
  MainBoardItem,
  MainBanner,
} from "@/components/main";
import useDrawer from "@/hooks/useDrawer";
const props = {
  header: "홈 설정",
  subtitle: "보고싶은 게시판만 선택하고 정렬해 보세요.",
  children: (
    <HomeSettingList
      categoryList={[
        {
          content: "채용",
          id: "apple",
        },
        {
          content: "대외활동",
          id: "banana",
        },
        {
          content: "익명",
          id: "carrot",
        },
        {
          content: "동아리",
          id: "dog",
        },
      ]}
    />
  ),
  btnContent: "설정 완료",
};

export default function Main() {
  const [onOpen, ButtonDrawer] = useDrawer(props);
  const initialBoardList = ["채용", "대외활동", "익명", "학교생활"];
  const [boardList, setBoardList] = useState(initialBoardList);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const currentToken = localStorage.getItem("accessToken");
    setToken(currentToken);
    authApis.reIssue(currentToken);
  }, []);

  useEffect(() => {
    const fetchBoards = async () => {
      if (token) {
        console.log(22, token);
        const response = await boardApis.checkBoardsExist(token);
        console.log(23, token);
        console.log(11, response);
        // setBoardList(response);
      }
    };
    fetchBoards();
  }, [token]);

  const router = useRouter();
  const BoardList: any = [
    {
      id: 1,
      title: `제목`,
      description: "본문",
      comments: 24,
      likes: 3,
      date: "2022-12-12",
    },
    {
      id: 2,
      title: `제목`,
      description: "본문",
      comments: 24,
      likes: 3,
      date: "2022-12-12",
    },
    {
      id: 3,
      title: `제목`,
      description: "본문",
      comments: 24,
      likes: 3,
      date: "2022-12-12",
    },
    {
      id: 3,
      title: `제목`,
      description: "본문",
      comments: 24,
      likes: 3,
      date: "2022-12-12",
    },
    {
      id: 3,
      title: `제목`,
      description: "본문",
      comments: 24,
      likes: 3,
      date: "2022-12-12",
    },
  ];
  return (
    <Layout>
      <Box bg={"#F7F8FA"} paddingX="4.2%">
        <Box height={"10px"} />
        <MainBanner />
        <Box marginTop="-55" zIndex="99">
          <DeviderWave />
        </Box>
        <Box mt={"32px"} />
        <HyperLinks />
        <Box mt={"48px"} />
        <Carousel>
          <img alt="banner" src="/assets/banner.png" />
          <img alt="banner" src="/assets/banner.png" />
          <img alt="banner" src="/assets/banner.png" />
        </Carousel>
        <Box mb={"48px"} />
        <TextBanner />
        {boardList.map(el => {
          return (
            <Box key={el} mb={5} mt={5}>
              <MainBoardTitle title={el} />
              <MainBoardStack>
                {BoardList.map(
                  (el: {
                    id: Key | null | undefined;
                    comments: number | undefined;
                    likes: number | undefined;
                    views: number;
                    title: string;
                  }) => {
                    return (
                      <MainBoardItem
                        key={el.id}
                        comments={el.comments}
                        likes={el.likes}
                        date="2022-12-12"
                        views={el.views}
                        title={el.title}
                        onClick={() => router.push(`/board/${el.id}`)}
                      />
                    );
                  },
                )}
              </MainBoardStack>
            </Box>
          );
        })}

        <Box mb={8}>
          <BoxButton btnContent={"홈 설정"} type={"Filled"} onOpen={onOpen} />
        </Box>
        <ButtonDrawer />
      </Box>
    </Layout>
  );
}
