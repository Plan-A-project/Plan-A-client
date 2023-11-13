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
        알고 계셨나요? 중국은 40도가 넘어가면 노동자들의 실외작업을 중단시킵니다!
      </Flex>
      <Text fontWeight={600} align={"right"}>
        - 냥냥 -
      </Text>
    </>
  );
}
