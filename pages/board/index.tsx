/* eslint-disable @next/next/no-img-element */

import { Flex, Heading, SimpleGrid } from "@chakra-ui/layout";
import { useRouter } from "next/router";

import NewBoardBanner from "@/components/board/NewBoardBanner";
import { Carousel, Header as MyHeader } from "@/components/common";
import SearchModal from "@/components/common/SearchModal";
import IconForward from "@/components/icons/IconForward";
import IconNotice from "@/components/icons/IconNotice";
import Navbar from "@/components/layout/Navbar";
import { testAutocompleteFunction, searchFunctionFactory } from "@/utils/utils";

function BoardMain() {
  const router = useRouter();
  const testSearchFunction = searchFunctionFactory("익명게시판");

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
        <NewBoardBanner justify={"space-between"}>
          <Flex>
            <IconNotice />
            <Heading
              onClick={() => router.push("/posting/notice")}
              color={"black"}
              fontSize={"18px"}
              ml={2}
            >
              게시판 이용 규칙 안내
            </Heading>
          </Flex>
          <IconForward />
        </NewBoardBanner>
      </Flex>

      <Carousel>
        <img
          style={{ padding: "0 8px" }}
          alt="banner"
          src="/assets/banner.png"
        />
        <img
          style={{ padding: "0 8px" }}
          alt="banner"
          src="/assets/banner.png"
        />
        <img
          style={{ padding: "0 8px" }}
          alt="banner"
          src="/assets/banner.png"
        />
      </Carousel>
      <SimpleGrid columns={2} spacing={4} p={4}>
        {["recruit", "activity", "club", "free"].map(name => (
          <img
            key={name}
            style={{ objectFit: "cover", aspectRatio: 1, width: "100%" }}
            alt="banner"
            src={`/assets/boards/${name}.png`}
            onClick={() => router.push(`/board/${name}`)}
          />
        ))}
      </SimpleGrid>
    </div>
  );
}

export default BoardMain;
