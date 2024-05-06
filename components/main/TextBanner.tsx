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
        알고 계셨나요? 이번주는 `전략 컨설턴트` 졸업생 인터뷰가 올라왔어요!
        지식IN플리에서 지금 확인해보세요!
      </Flex>
      <Text fontWeight={600} align={"right"}>
        - 지식IN플리 -
      </Text>
    </>
  );
}
