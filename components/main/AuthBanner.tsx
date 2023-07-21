import * as React from "react";

import { Box, Flex, Text } from "@chakra-ui/react";

import { RightArrowIcon } from "../icons";

interface BannerProps {
  buttonText: string;
  text: string;
  Icon: React.ComponentType;
  className?: string;
}

const BannerLogin = ({ buttonText, Icon, text, className }: BannerProps) => {
  return (
    <Box
      borderRadius="8px"
      bg="#fef0f7"
      border="1px solid #fa3d86"
      lineHeight="14px"
      fontSize="1rem"
      fontWeight="400"
      color="#303136"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      pl="12px"
      pr="12px"
      m="0 1rem"
    >
      <Flex
        fontSize="0.75rem"
        flexDirection="row"
        alignItems="center"
        columnGap="8px"
        mt="20px"
        mb="20px"
      >
        <Box width="32px" height="32px">
          <Icon />
        </Box>
        <Text w="9rem">
          {text || "지금은 열람만 가능해요.\n더 많은 정보를 얻으려면?"}
        </Text>
      </Flex>
      <Flex
        textAlign="right"
        lineHeight="19px"
        fontWeight="600"
        flexDirection="row"
        alignItems="center"
        columnGap="12px"
      >
        <Text m={"1px 2px"}>{buttonText}</Text>
        <Box w="16px" h="16px" m="1px 0">
          <RightArrowIcon />
        </Box>
      </Flex>
    </Box>
  );
};

export default BannerLogin;
