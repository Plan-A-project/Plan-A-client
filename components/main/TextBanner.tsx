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

      <Flex textStyle={"body1"}>
        알고 계셨나요? 탁구를 치면 기분이 좋아진답니다!
      </Flex>
      <Text fontWeight={600} align={"right"}>
        - 인플리 운영자 -
      </Text>
    </>
  );
}
