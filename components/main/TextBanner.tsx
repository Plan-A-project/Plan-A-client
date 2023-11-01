import { Flex, Text } from "@chakra-ui/layout";

import { FireIcon } from "../icons";

export default function TextBanner() {
  return (
    <Flex
      color={"background.600"}
      fontSize={"18px"}
      fontWeight={"600"}
      lineHeight={"24px"}
      textStyle={"subtitle1"}
    >
      <FireIcon />
      <Text ml={"12px"}>
        알고 계셨나요?
        <br /> 공안이 학교에 들어올 수도 있답니다!
      </Text>
    </Flex>
  );
}
