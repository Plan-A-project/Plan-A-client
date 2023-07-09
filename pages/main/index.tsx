import { Box } from "@chakra-ui/react";

import { BoxButton } from "@/components/common";
import { HomeSettingList, HyperLinks, TextBanner } from "@/components/home";
import CaptionCarousel from "@/components/home/AdBanner";
import { DeviderWave, FakeBanner } from "@/components/icons";
import Layout from "@/components/layout/Layout";
import useDrawer from "@/hooks/useDrawer";

function FakeBoard({ num }: any) {
  return (
    <Box h={200} bg={"white"}>
      FakeBoard {num}
    </Box>
  );
}

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
  return (
    <Layout>
      <Box bg={"#F7F8FA"}>
        <Box height={"10px"} />
        <FakeBanner />
        <Box marginTop="-3">
          <DeviderWave />
        </Box>
        <Box mt={"32px"} />
        <HyperLinks />
        <CaptionCarousel />
        <Box mt={"50px"} />
        <TextBanner />
        <FakeBoard num={2222} />
        <FakeBoard num={1111} />
        <FakeBoard num={3333} />
        <Box mb={8}>
          <BoxButton btnContent={"홈 설정"} type={"Filled"} onOpen={onOpen} />
        </Box>
        <ButtonDrawer />
      </Box>
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
    </Layout>
  );
}
