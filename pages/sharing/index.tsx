import { Flex, Image } from "@chakra-ui/react";
import { NextPage } from "next";

import AppContainer from "@/components/common/AppContainer";
import Banner from "@/components/common/Banner";
import Carousel from "@/components/common/Carousel";
import Header from "@/components/common/Header";
import IconSearch from "@/components/icons/IconSearch";
import Wave from "@/components/icons/Wave";

const Sharing: NextPage = () => {
  return (
    <AppContainer>
      <Header leftTitle title="공유게시판" rightNode={<IconSearch />} />

      <Banner my={4}>
        <Banner.TextBanner text="게시판 이용 규칙 안내" />
      </Banner>

      <Banner my={4} p={0} overflow={"hidden"}>
        <Carousel loop>
          <Image src="https://via.placeholder.com/300x96" alt="" />
          <Image src="https://via.placeholder.com/300x96" alt="" />
          <Image src="https://via.placeholder.com/300x96" alt="" />
        </Carousel>
      </Banner>

      <Flex
        sx={{
          gap: 4,
          marginY: 8,
          flexWrap: "wrap",
          "& > *": {
            width: 0,
            flex: "1 0 35%",
          },
        }}
      >
        <Image src="/assets/board-1.png" alt="" />
        <Image src="/assets/board-2.png" alt="" />
        <Image src="/assets/board-3.png" alt="" />
        <Image src="/assets/board-4.png" alt="" />
      </Flex>
    </AppContainer>
  );
};

export default Sharing;
