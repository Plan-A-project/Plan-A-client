import { Dispatch, SetStateAction } from "react";

import { Center, HStack, Stack, Text } from "@chakra-ui/layout";

import Wiggleline from "../icons/Wiggleline";

type ILineTab = {
  activatedTab: number;
  setActivatedTab: Dispatch<SetStateAction<number>>;
  tabs: string[];
};

export default function LineTab({
  activatedTab,
  setActivatedTab,
  tabs,
}: ILineTab) {
  return (
    <HStack w={"100%"}>
      {tabs &&
        tabs.map((tab, index) => (
          <Stack w={"100%"} key={tab}>
            <Center
              onClick={() => setActivatedTab(1)}
              color={activatedTab === index ? "#3F52E4" : "#75788A"}
              fontWeight={500}
            >
              <Text>{tab}</Text>
            </Center>
            <HStack>
              <Wiggleline
                color={activatedTab === index ? "#3F52E4" : "#75788A"}
              />
            </HStack>
          </Stack>
        ))}
    </HStack>
  );
}
