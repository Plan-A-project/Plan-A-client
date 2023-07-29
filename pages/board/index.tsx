/* eslint-disable @next/next/no-img-element */

import { Flex, Heading, SimpleGrid } from "@chakra-ui/layout";
import { useRouter } from "next/router";

import NewBoardBanner from "@/components/board/NewBoardBanner";
import { Carousel, Header as MyHeader } from "@/components/common";
import SearchModal from "@/components/common/SearchModal";
import IconForward from "@/components/icons/IconForward";
import IconNotice from "@/components/icons/IconNotice";
import Navbar from "@/components/layout/Navbar";
import { testAutocompleteFunction, wait } from "@/utils/utils";

function BoardMain() {
  const router = useRouter();

  const testSearchFunction = async (keyword: string) => {
    await wait(1000);
    const returnArray = [];
    const tmpItem = {
      id: 1,
      title: `제목 ${keyword}`,
      description: "본문",
      comments: 24,
      likes: 3,
      date: "2022-12-12",
    };
    returnArray.push({ ...tmpItem, id: 1, leftTag: "채용" });
    returnArray.push({ ...tmpItem, id: 2, leftTag: "대외활동" });
    returnArray.push({ ...tmpItem, id: 3, leftTag: "동아리" });
    return returnArray;
  };

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
          justify={"space-between"}
          onClick={() => alert("게시판 이용 수칙안내")}
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
