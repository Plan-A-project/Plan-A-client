import { CheckCircleIcon } from "@chakra-ui/icons";
import { Container, Flex, Text } from "@chakra-ui/layout";
import { Button, Stack } from "@chakra-ui/react";

import Header from "@/pages/components/Header";
import PageLayout from "@/pages/components/Layout";

const index = () => {
  return (
    <PageLayout>
      <Header headingText="인증센터" />
      <Container>
        <Text fontSize={"20px"} fontWeight={600} my={"24px"}>
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
              <CheckCircleIcon color={"blue.300"} />
              가능 서류 : 입학증명서, 합격 링크
            </Flex>
            <Flex
              justify={"flex-start"}
              align={"center"}
              gap={"6px"}
              fontSize={"14px"}
              fontWeight={400}
            >
              <CheckCircleIcon color={"blue.300"} />
              휴대폰으로 찍은 이미지, 캡쳐 이미지 모두 가능합니다.
            </Flex>
            <Flex
              justify={"flex-start"}
              align={"center"}
              gap={"6px"}
              fontSize={"14px"}
              fontWeight={400}
            >
              <CheckCircleIcon color={"blue.300"} />
              서류 제출 후 승인까지 최대 48시간이 소요될 수 있습니다.
            </Flex>
          </Stack>
        </Stack>
        <Stack spacing={"16px"} mt={"48px"}>
          <Button
            h={"52px"}
            border={"1px solid blue"}
            color={"blue"}
            bg={"transparent"}
          >
            파일 첨부
          </Button>
          <Button h={"52px"}>인증하기</Button>
        </Stack>
      </Container>
    </PageLayout>
  );
};

export default index;
