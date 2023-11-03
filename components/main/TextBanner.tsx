import { Flex, Text } from "@chakra-ui/layout";

import HoneyIcon from "../icons/HoneyIcon";

export default function TextBanner() {
  return (
    <>
      <Flex color={"background.600"} align={"center"} mb={"2px"}>
        <HoneyIcon />
        <Text ml={1} textStyle={"subtitle2"}>
          틈새 꿀정보
        </Text>
      </Flex>
      <Text textStyle={"body1"}>
        알고 계셨나요? 위챗페이 연간 한도는 10만 위안이랍니다!
      </Text>
    </>
  );
}
