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
        알고 계셨나요? 채용공고 탭에는 매 주 엄선된 5개의 채용공고가
        ⬇️⬇️올라온답니다!⬇️⬇️
      </Flex>
      <Text fontWeight={600} align={"right"}>
        - 이재용 -
      </Text>
    </>
  );
}
