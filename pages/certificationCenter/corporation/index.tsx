import { Container, Flex, Text } from "@chakra-ui/layout";
import { Stack } from "@chakra-ui/react";

import FileAttachmentInput from "@/components/common/FileAttachmentInput";
import CheckCircleIcon from "@/components/icons/CheckCircleIcon";
import Header from "@/pages/components/Header";
import PageLayout from "@/pages/components/Layout";

const index = () => {
  return (
    <PageLayout>
      <Header headingText="인증센터" />
      <Text fontSize={"20px"} fontWeight={600} my={"24px"} mx={"16px"}>
        기업
      </Text>
      <Container>
        <Stack mb={"48px"} spacing={"12px"} mt={"24px"}>
          <Text fontSize={"16px"} fontWeight={600}>
            인증방법
          </Text>
          <Text fontSize={"16px"} fontWeight={400}>
            사업자등록증을 첨부해주세요.
          </Text>
          <Stack spacing={"4px"}>
            <Flex justify={"flex-start"} align={"center"} gap={"6px"}>
              <CheckCircleIcon />
              <Text fontSize={"14px"} fontWeight={400}>
                휴대폰으로 찍은 이미지, 캡쳐 이미지 모두 가능합니다.
              </Text>
            </Flex>
            <Flex justify={"flex-start"} align={"center"} gap={"6px"}>
              <CheckCircleIcon />
              <Text fontSize={"14px"} fontWeight={400}>
                서류 제출 후 승인까지 최대 48시간이 소요될 수 있습니다.
              </Text>
            </Flex>
          </Stack>
        </Stack>
        <FileAttachmentInput title="파일 첨부" />
      </Container>
    </PageLayout>
  );
};

export default index;
