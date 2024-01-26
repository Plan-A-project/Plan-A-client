import { useEffect, useState } from "react";

import { Box, Flex, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import MainBanner_v2 from "@/components/main/MainBanner_v2";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel, Banner, AppContainer } from "@/components/common";
import Layout from "@/components/layout/Layout";
import { HomeSettingList, HyperLinks, TextBanner } from "@/components/main";
import useDrawer from "@/hooks/useDrawer";
import useSnackbar from "@/hooks/useSnackbar";
import certificationApis from "@/api/certification";
import GridClub from "@/components/icons/GridClub";
import NoticeLogoIcon from "@/components/icons/NoticeLogoIcon";
import GridRecruit from "@/components/icons/GridRecruit";
import GridEvent from "@/components/icons/GridEvent";
import QuestionIcon from "@/components/icons/QuestionIcon";
import Navbar from "@/components/layout/Navbar";
import WaitingTimeTable from "@/components/icons/WaitingTimeTable";

//{ useColorMode } f import rom "@chakra-ui/react";
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
const gridProps = [
  { name: "채용공고", title: <GridRecruit />, link: "recruitment" },
  { name: "이벤트", title: <GridEvent />, link: "event" },
  { name: "coming soon", title: <GridClub />, link: "club" },
  { name: "인플리 공지", title: <NoticeLogoIcon />, link: "announcement" },
];
type BoardType = {
  title: string;
  boards: any[];
  boardId: number;
  postType: string;
  order: string;
};

type BoardListType = BoardType[];

export default function Main() {
  return (
    <AppContainer>
      <Stack gap={10} align={"center"} h={"90vh"} justify={"center"}>
        <Image boxSize={"240px"} alt="image" src="/assets/spacecraft.jpg" />
        <Text textStyle={"headline2"} fontWeight={600} lineHeight={7}>
          인플리가 새 단장 중이에요!
          <br />더 나은 모습으로 다음 학기에 만나요💙
          <br />
          (~2024.02.20)
        </Text>
      </Stack>
      <HyperLinks />
    </AppContainer>
  );
  // const [onOpen, ButtonDrawer, onClose] = useDrawer(props);
  // // const { colorMode, toggleColorMode } = useColorMode();
  // const [alarmContent, setAlarmContent] = useState<string>("");
  // const [alarmDuration, setAlarmDuration] = useState<number>(3000);
  // const [isActivated, activateSnackbar, Snackbar] = useSnackbar(
  //   alarmContent,
  //   alarmDuration,
  // );
  // const [isCertificate, setIsCertificate] = useState<boolean>(true);
  // useEffect(() => {
  //   async function fetchCertification() {
  //     const response = await certificationApis.getVerificationInfo();

  //     if (response.data.status !== "SUCCESS") {
  //       setIsCertificate(false);
  //     }
  //   }
  //   fetchCertification();

  //   const isFirstCertificate = localStorage.getItem("isFirstCertif");

  //   const isLoggedIn = localStorage.getItem("isLoggedIn");
  //   if (isLoggedIn) {
  //     setAlarmContent(`${isLoggedIn}님! 인플리에 오신걸 환영합니다!`);
  //     activateSnackbar();
  //     localStorage.removeItem("isLoggedIn");
  //   }

  //   if (isFirstCertificate) {
  //     setAlarmContent("인증이 완료되었어요!");
  //     setAlarmDuration(7000);
  //     localStorage.removeItem("isFirstCertif");
  //   }
  // }, []);

  // // useEffect(() => {
  // //   const backgroundColor = "#F7F8FA"; // 현재 배경색상을 얻는 함수
  // //   document
  // //     .querySelector('meta[name="theme-color"]')
  // //     ?.setAttribute("content", backgroundColor);
  // // }, []);

  // const router = useRouter();

  // return (
  //   <Layout>
  //     {isActivated && <Snackbar />}
  //     <MainBanner_v2 />
  //     <Box bg={"#F7F8FA"} paddingX="4.2%">
  //       {!isCertificate && <Box height={6} />}
  //       {!isCertificate && (
  //         <Banner alert onClick={() => router.push("/certificationCenter")}>
  //           <Banner.AlertBanner
  //             notice={`지금은 일부 열람만 가능해요\n모든 기능을 사용하려면`}
  //             text="학생 인증하기"
  //           />
  //         </Banner>
  //       )}
  //       {/* <Box onClick={toggleColorMode}>
  //         Toggle {colorMode === "light" ? "Dark" : "Light"}
  //       </Box> */}
  //       <Box
  //         right={0}
  //         left={0}
  //         position={"absolute"}
  //         marginTop="-55"
  //         zIndex="99"
  //       ></Box>
  //       <Box h={8} />
  //       <HyperLinks />
  //       <Box mt={"48px"} />
  //       <Carousel loop auto interval={4}>
  //         {/* <Image
  //           onClick={() =>
  //             (window.location.href = "https://infli-chat.vercel.app/")
  //           }
  //           alt="banner"
  //           src="/assets/infli_asianLogo.PNG"
  //         /> */}

  //         <Image
  //           onClick={() => router.push("/posting/2/1219")}
  //           alt="banner"
  //           src="/assets/event_banner_woodPencil_xmas.jpg"
  //         />
  //         <Image
  //           onClick={() => router.push("/posting/5/1009")}
  //           alt="banner"
  //           src="/assets/sub_logo_v3.jpg"
  //         />
  //       </Carousel>
  //       <Box mb={"26px"} />
  //       <TextBanner />
  //       <SimpleGrid columns={2} spacing={4} pb={4} mt={8}>
  //         {gridProps.map(el => (
  //           <Flex
  //             justify={"space-between"}
  //             direction={"column"}
  //             p={4}
  //             key={el.name}
  //             bg={"#fff"}
  //             style={{
  //               objectFit: "cover",
  //               aspectRatio: 1.01,
  //               width: "100%",
  //             }}
  //             borderRadius={"16px"}
  //             onClick={() => {
  //               if (el.link !== "club") {
  //                 router.push(`/board/${el.link}`);
  //               }
  //             }}
  //           >
  //             <Text textStyle={"headline2"}>{el.name}</Text>
  //             <Flex justify={"flex-end"}>{el.title}</Flex>
  //           </Flex>
  //         ))}
  //       </SimpleGrid>
  //       <Box h={10} />
  //       {/* <Box mb={8} onClick={() => activateSnackbar()}>
  //         <BoxButton btnContent={"홈 설정"} type={"Filled"} onOpen={onOpen} />
  //       </Box> */}
  //       <ButtonDrawer />
  //     </Box>
  //   </Layout>
  // );
}
