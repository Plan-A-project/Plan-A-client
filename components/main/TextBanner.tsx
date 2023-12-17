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
        알고 계셨나요? 저는 초속 2,200km로 이동해야 하고 가구당 0.0003초 만에
        선물을 놓고 나와야 한답니다!
      </Flex>
      <Text fontWeight={600} align={"right"}>
        - 산타 클로스 -
      </Text>
    </>
  );
}
