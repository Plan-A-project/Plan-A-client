import { Flex, Text } from "@chakra-ui/layout";

import { FireIcon } from "../icons";

export default function TextBanner() {
  return (
    <Flex
      color={"background.600"}
      fontSize={"20px"}
      fontWeight={"600"}
      lineHeight={"24px"}
    >
      <FireIcon />
      <Text ml={"12px"}>지금 가장 인기있는 게시물!</Text>
    </Flex>
  );
}
