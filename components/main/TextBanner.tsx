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
        알고 계셨나요? 인플리 유저의 70%가 아이폰을 사용한답니다!
      </Flex>
      <Text fontWeight={600} align={"right"}>
        - 팀 쿡 -
      </Text>
    </>
  );
}
