/* eslint-disable @next/next/no-img-element */

import { Box, Flex, Heading, Link, SimpleGrid, Text } from "@chakra-ui/layout";
import { useRouter } from "next/router";

import NewBoardBanner from "@/components/board/NewBoardBanner";
import { Carousel, Header as MyHeader } from "@/components/common";
import SearchModal from "@/components/common/SearchModal";
import IconForward from "@/components/icons/IconForward";
import IconNotice from "@/components/icons/IconNotice";
import Navbar from "@/components/layout/Navbar";
import { testAutocompleteFunction, searchFunctionFactory } from "@/utils/utils";
import GridActivity from "@/components/icons/GridActivity";
import GridClub from "@/components/icons/GridClub";
import GridFree from "@/components/icons/GridFree";
import GridRecruit from "@/components/icons/GridRecruit";
import { title } from "process";
import { Image } from "@chakra-ui/react";

function BoardMain() {
  const router = useRouter();
  const testSearchFunction = searchFunctionFactory("익명게시판");
  const gridProps = [
    { name: "채용", title: <GridRecruit />, link: "recruit" },
    { name: "대외활동", title: <GridActivity />, link: "activity" },
    { name: "동아리", title: <GridClub />, link: "club" },
    { name: "학교생활", title: <GridFree />, link: "free" },
  ];

  return (
    <div>
      <Navbar currentTab="infoBoard" />
      <MyHeader
        p={4}
        leftTitle
        title="정보공유"
        rightNode={
          <SearchModal
            autocompleteFunction={testAutocompleteFunction}
            searchFunction={testSearchFunction}
          />
        }
      />
      <Flex p={4} align={"center"}>
        <NewBoardBanner
          onClick={() => router.push("/posting/notice")}
          justify={"space-between"}
        >
          <Flex>
            <IconNotice />
            <Heading color={"black"} fontSize={"18px"} ml={2}>
              게시판 이용 규칙 안내
            </Heading>
          </Flex>
          <IconForward />
        </NewBoardBanner>
      </Flex>
      <Box px={4}>
        <Carousel>
          <Link href="https://www.instagram.com/infli_official/">
            <Image alt="banner" src="/assets/infli_banner.jpg" />
          </Link>
        </Carousel>
      </Box>
      <SimpleGrid columns={2} spacing={4} p={4} mt={8}>
        {gridProps.map(el => (
          <Flex
            justify={"space-between"}
            direction={"column"}
            p={4}
            key={el.name}
            bg={"#EDF3FC"}
            style={{ objectFit: "cover", aspectRatio: 1, width: "100%" }}
            borderRadius={"16px"}
            onClick={() => router.push(`/board/${el.link}`)}
          >
            <Text textStyle={"headline2"}>{el.name}</Text>
            <Flex justify={"flex-end"}>{el.title}</Flex>
          </Flex>
        ))}
      </SimpleGrid>
    </div>
  );
}

export default BoardMain;
