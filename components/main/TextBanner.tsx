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
        알고 계셨나요? 짝사랑의 성공 확률은 33.9% 라고 합니다!
      </Flex>
      <Text fontWeight={600} align={"right"}>
        - 백수 -
      </Text>
    </>
  );
}
