import React, { Dispatch, SetStateAction } from "react";

import { Box, Text, Flex } from "@chakra-ui/react";

interface IToggleTab {
  activatedTab: number;
  setActivatedTab: Dispatch<SetStateAction<number>>;
  firstContent: string;
  secondContent: string;
}

const ToggleTab = ({
  activatedTab,
  setActivatedTab,
  firstContent,
  secondContent,
}: IToggleTab): JSX.Element => {
  return (
    <Flex
      border="1px solid"
      borderColor="#c7c8d0"
      borderRadius="16px"
      alignItems="center"
      gap="9px"
      overflow="hidden"
      padding="4px"
    >
      <Flex
        bg={activatedTab === 1 ? "#edf2fc" : "transparent"}
        color={activatedTab === 1 ? "#3f52e4" : "#757789"}
        borderRadius="12px"
        flex="1"
        h={10}
        alignItems="center"
        justifyContent="center"
        onClick={() => setActivatedTab(1)}
      >
        <Text textStyle={activatedTab === 1 ? "subtitle2" : "body1"}>
          {firstContent}
        </Text>
      </Flex>
      <Flex
        bg={activatedTab === 0 ? "#edf2fc" : "transparent"}
        color={activatedTab === 0 ? "#3f52e4" : "#757789"}
        borderRadius="12px"
        flex="1"
        h={10}
        alignItems="center"
        justifyContent="center"
        onClick={() => setActivatedTab(0)}
      >
        <Text textStyle={activatedTab === 1 ? "body1" : "subtitle2"}>
          {secondContent}
        </Text>
      </Flex>
    </Flex>
  );
};

export default ToggleTab;
