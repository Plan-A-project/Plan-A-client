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
        알고 계셨나요? 학생인증 이메일이 오지 않는다면 사진인증을 해주시거나
        위챗 qny13252으로 문의하면 된답니다!
      </Flex>
      <Text fontWeight={600} align={"right"}>
        - 인플리 개발자 -
      </Text>
    </>
  );
}
