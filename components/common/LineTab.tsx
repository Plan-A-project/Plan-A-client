import { Dispatch, SetStateAction } from "react";

import { Center, HStack, Stack, Text } from "@chakra-ui/layout";

import Wiggleline from "../icons/Wiggleline";

type ILineTab = {
  activatedTab: number;
  setActivatedTab: Dispatch<SetStateAction<number>>;
};

export default function LineTab({ activatedTab, setActivatedTab }: ILineTab) {
  return (
    <HStack w={"100%"}>
      <Stack w={"50%"}>
        <Center
          onClick={() => setActivatedTab(1)}
          color={activatedTab === 1 ? "#3F52E4" : ""}
          fontWeight={500}
        >
          <Text>전체글</Text>
        </Center>
        <Wiggleline color={activatedTab === 1 ? "#3F52E4" : "#75788A"} />
      </Stack>
      <Stack w={"50%"}>
        <Center
          onClick={() => setActivatedTab(2)}
          color={activatedTab === 2 ? "#3F52E4" : ""}
          fontWeight={500}
        >
          <Text>인기글</Text>
        </Center>
        <Wiggleline color={activatedTab === 2 ? "#3F52E4" : "#75788A"} />
      </Stack>
    </HStack>
  );
}
