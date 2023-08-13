import { Key, useEffect, useState } from "react";

import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";

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
import useSnackbar from "@/hooks/useSnackbar";
import formatDate from "@/utils/formatDate";

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

type BoardType = {
  title: string;
  boards: any[];
  boardId: number;
};

type BoardListType = BoardType[];

export default function Main() {
  const [onOpen, ButtonDrawer] = useDrawer(props);
  const initialBoardList: BoardListType = [
    { title: "채용", boards: [], boardId: 1 },
    { title: "대외활동", boards: [], boardId: 2 },
    { title: "익명", boards: [], boardId: 4 },
    { title: "학교생활", boards: [], boardId: 5 },
  ];
  const [boardList, setBoardList] = useState<any>([]);
  const [token, setToken] = useState<string | null>(null);
  const [isActivated, activateSnackbar, Snackbar] =
    useSnackbar("인증이 완료되었어요!");

  useEffect(() => {
    const currentToken = localStorage.getItem("accessToken");
    setToken(currentToken);
    const isFirstCertificate = localStorage.getItem("certComplt");
    if (isFirstCertificate) {
      activateSnackbar();
      localStorage.removeItem("certComplt");
    }
  }, []);

  useEffect(() => {
    const fetchBoards = async () => {
      if (token) {
        initialBoardList.forEach(el => {
          (async function () {
            const response = await boardApis.getBoardList(
              token,
              el.boardId,
              "NORMAL",
              1,
              "recent",
            );
            setBoardList((p: any) => {
              if (response.data) {
                return { ...p, [el.title]: response.data.data.data.posts };
              }
            });

            // console.log(111, response.data.data.data.posts);
          })();
        });
        // const response = await boardApis.checkBoardsExist(token);
      }
    };
    fetchBoards();
  }, [token]);

  const router = useRouter();

  return (
    <Layout>
      {isActivated && <Snackbar />}
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
        {initialBoardList.map((el: any) => (
          <Box key={el} mb={5} mt={5}>
            <MainBoardTitle title={el.title} />
            <MainBoardStack>
              {boardList[el.title]?.map(
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
        ))}

        <Box mb={8} onClick={() => activateSnackbar()}>
          <BoxButton btnContent={"홈 설정"} type={"Filled"} onOpen={onOpen} />
        </Box>
        <ButtonDrawer />
      </Box>
    </Layout>
  );
}
