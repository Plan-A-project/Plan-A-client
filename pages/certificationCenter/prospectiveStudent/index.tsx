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
      <Container>
        <Text textStyle={"headline1"} color={"grey.900"} my={"24px"}>
          예비 입학생
        </Text>
        <Stack spacing={"12px"}>
          <Text fontSize={"16px"} fontWeight={600}>
            인증방법
          </Text>
          <Text fontSize={"16px"} fontWeight={400}>
            합격을 인증할 수 있는 서류를 첨부해주세요.
          </Text>
          <Stack spacing={"4px"}>
            <Flex
              justify={"flex-start"}
              align={"center"}
              gap={"6px"}
              fontSize={"14px"}
              fontWeight={400}
            >
              <CheckCircleIcon />
              가능 서류 : 입학증명서, 합격 링크
            </Flex>
            <Flex
              justify={"flex-start"}
              align={"center"}
              gap={"6px"}
              fontSize={"14px"}
              fontWeight={400}
            >
              <CheckCircleIcon />
              휴대폰으로 찍은 이미지, 캡쳐 이미지 모두 가능합니다.
            </Flex>
            <Flex
              justify={"flex-start"}
              align={"center"}
              gap={"6px"}
              fontSize={"14px"}
              fontWeight={400}
            >
              <CheckCircleIcon />
              서류 제출 후 승인까지 최대 48시간이 소요될 수 있습니다.
            </Flex>
          </Stack>
        </Stack>
        <FileAttachmentInput title="파일첨부" />
      </Container>
    </PageLayout>
  );
};

export default index;
