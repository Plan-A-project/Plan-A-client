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
        알고 계셨나요? 수강인원이 초과된 수업은 事务申请을 통해 신청할 수
        있답니다. jwfw에서 확인해보세요!
      </Flex>
      <Text fontWeight={600} align={"right"}>
        - 事务申请 고인물 -
      </Text>
    </>
  );
}
