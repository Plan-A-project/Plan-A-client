import { Dispatch, SetStateAction } from "react";

import { Center, HStack, Stack, Text } from "@chakra-ui/layout";

import WiggleLineLeft from "../icons/WigglelineLeft";
import WigglelineRight from "../icons/WigglelineRight";

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
    <HStack w={"100%"} gap={0} pt={5}>
      <Stack w={"100%"} key={tabs[0]}>
        <Center
          onClick={() => setActivatedTab(0)}
          color={activatedTab === 0 ? "#3F52E4" : "#75788A"}
          fontWeight={500}
        >
          <Text>{tabs[0]}</Text>
        </Center>
        <HStack>
          <WiggleLineLeft color={activatedTab === 0 ? "#3F52E4" : "#75788A"} />
        </HStack>
      </Stack>

      <Stack w={"100%"} key={tabs[1]}>
        <Center
          onClick={() => setActivatedTab(1)}
          color={activatedTab === 1 ? "#3F52E4" : "#75788A"}
          fontWeight={500}
        >
          <Text>{tabs[1]}</Text>
        </Center>
        <HStack>
          <WigglelineRight color={activatedTab === 1 ? "#3F52E4" : "#75788A"} />
        </HStack>
      </Stack>
    </HStack>
  );
}
