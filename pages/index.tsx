import { Key, useEffect, useState } from "react";

import { Box, Image, Link } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { isCertificatedState } from "@/state/atoms/auth/loginAtom";
import formatDateRange from "@/utils/formatDateRange";
import checkDday from "@/utils/checkDday";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import boardApis from "@/api/board";
import { BoxButton, Carousel, Banner } from "@/components/common";
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
import certificationApis from "@/api/certification";

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
  postType: string;
};

type BoardListType = BoardType[];

export default function Main() {
  const [onOpen, ButtonDrawer, onClose] = useDrawer(props);
  const initialBoardList: BoardListType = [
    { title: "채용", boards: [], boardId: 1, postType: "RECRUITMENT" },
    { title: "대외활동", boards: [], boardId: 2, postType: "RECRUITMENT" },
    { title: "익명", boards: [], boardId: 4, postType: "NORMAL" },
    { title: "학교생활", boards: [], boardId: 5, postType: "NORMAL" },
  ];
  const [boardList, setBoardList] = useState<any>([]);
  const [alarmContent, setAlarmContent] = useState<string>("");
  const [alarmDuration, setAlarmDuration] = useState<number>(3000);
  const [isActivated, activateSnackbar, Snackbar] = useSnackbar(
    alarmContent,
    alarmDuration,
  );
  const [isCertificate, setIsCertificate] = useState<boolean>(true);
  useEffect(() => {
    async function fetchCertification() {
      const response = await certificationApis.getVerificationInfo();

      if (response.data.status !== "SUCCESS") {
        setIsCertificate(false);
      }
    }
    fetchCertification();

    const isFirstCertificate = localStorage.getItem("isFirstCertif");

    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
      setAlarmContent(`${isLoggedIn}님! 인플리에 오신걸 환영합니다!`);
      activateSnackbar();
      localStorage.removeItem("isLoggedIn");
    }

    if (isFirstCertificate) {
      setAlarmContent("인증이 완료되었어요!");
      setAlarmDuration(7000);
      localStorage.removeItem("isFirstCertif");
    }
  }, []);

  useEffect(() => {
    const fetchBoards = async () => {
      if (true) {
        initialBoardList.forEach(el => {
          (async function () {
            const response = await boardApis.getBoardList(
              el.boardId,
              el.postType,
              1,
              "recent",
              5,
            );

            setBoardList((p: any) => {
              if (response.data) {
                return { ...p, [el.title]: response.data.data.posts };
              }
            });
          })();
        });
        // const response = await boardApis.checkBoardsExist(token);
      }
    };
    fetchBoards();
  }, []);

  const router = useRouter();

  return (
    <Layout>
      {isActivated && <Snackbar />}
      <Box bg={"#F7F8FA"} paddingX="4.2%">
        {!isCertificate && <Box height={6} />}
        {!isCertificate && (
          <Banner alert onClick={() => router.push("/certificationCenter")}>
            <Banner.AlertBanner
              notice={`지금은 일부 열람만 가능해요\n모든 기능을 사용하려면`}
              text="학생 인증하기"
            />
          </Banner>
        )}
        <Box height={"5px"} />
        <MainBanner />
        <Box marginTop="-55" zIndex="99">
          <DeviderWave />
        </Box>
        <Box mt={"32px"} />
        <HyperLinks />
        <Box mt={"48px"} />
        <Carousel>
          <Link href="https://www.instagram.com/infli_official/">
            <Image alt="banner" src="/assets/infli_instagram.jpg" />
          </Link>
        </Carousel>
        <Box mb={"48px"} />
        <TextBanner />
        {initialBoardList.map((el: any) => (
          <Box key={el} mb={5} mt={5}>
            <MainBoardTitle title={el.title} />
            <MainBoardStack>
              {boardList[el.title]?.map(
                (el2: {
                  postId: number;
                  commentCount: number | undefined;
                  likeCount: number | undefined;
                  viewCount: number;
                  title: string;
                  createdAt: string;
                  recruitmentStartDate: any;
                  recruitmentEndDate: any;
                }) => {
                  const date = el2.recruitmentStartDate
                    ? formatDateRange(
                        el2.recruitmentStartDate,
                        el2.recruitmentEndDate,
                      )
                    : formatDate(el2.createdAt);
                  return (
                    <MainBoardItem
                      key={el2.postId}
                      date={date}
                      comments={el2.commentCount}
                      likes={el2.likeCount}
                      views={el2.viewCount}
                      title={el2.title}
                      dday={
                        !el2.recruitmentStartDate
                          ? null
                          : checkDday(
                              el2.recruitmentStartDate,
                              el2.recruitmentEndDate,
                            )
                      }
                      onClick={() =>
                        router.push(`/posting/${el.boardId}/${el2.postId}`)
                      }
                    />
                  );
                },
              )}
            </MainBoardStack>
          </Box>
        ))}
        <Box mt={10} />
        {/* <Box mb={8} onClick={() => activateSnackbar()}>
          <BoxButton btnContent={"홈 설정"} type={"Filled"} onOpen={onOpen} />
        </Box> */}
        <ButtonDrawer />
      </Box>
    </Layout>
  );
}
