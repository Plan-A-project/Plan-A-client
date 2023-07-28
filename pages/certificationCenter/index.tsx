import React from "react";

import { Container, Flex, Stack, Text, Box } from "@chakra-ui/react";
import { useRouter } from "next/router";

import { AppContainer, Badge, Header, Banner } from "@/components/common";
import Check from "@/components/icons/Check";

const CertificationCenter = () => {
  const router = useRouter();
  const taskList = [
    "찐 강의 후기 공유",
    "내 시간표 관리 및 공유",
    "모든 카테고리 게시글 열람",
    "모든 카테고리 게시글 작성 및 수정",
  ];
  return (
    <AppContainer>
      <Header back leftTitle title="인증센터" />
      <Stack mt={4} spacing={6}>
        <Container
          py={6}
          px={4}
          bg={"gray.100"}
          borderRadius={"24px"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"flex-start"}
          justifyContent={"center"}
        >
          <Text textStyle={"body3"}>인증을 하면 이런 걸 할 수 있어요!</Text>
          <Stack mt={4} spacing={"14px"}>
            <Badge text="학생" type="union" />
            <Stack spacing={"8px"}>
              {taskList.map(el => {
                return (
                  <Flex
                    key={el}
                    justify={"flex-start"}
                    align={"center"}
                    gap={"10px"}
                  >
                    <Check />
                    <Text textStyle={"subtitle2"}>{el}</Text>
                  </Flex>
                );
              })}
            </Stack>
          </Stack>
          <Stack spacing={"14px"}>
            <Box mt={4}>
              <Badge text="기업" type="company" />
            </Box>
            <Stack spacing={"8px"}>
              <Flex justify={"flex-start"} align={"center"} gap={"10px"}>
                <Check color="green" />
                <Text textStyle={"subtitle2"}>
                  채용 공고 및 홍보용 콘텐츠 작성
                </Text>
              </Flex>
              <Flex justify={"flex-start"} align={"center"} gap={"10px"}>
                <Check color="green" />
                <Text textStyle={"subtitle2"}>기업용 인증 뱃지 부여</Text>
              </Flex>
            </Stack>
          </Stack>
        </Container>

        <Banner
          mt={2}
          onClick={() => router.push("/certificationCenter/student")}
        >
          <Banner.TextBanner
            borderRadius={"16px"}
            border={"1px solid #3F52E4"}
            icon
            text="학생"
          />
        </Banner>
        <Banner onClick={() => router.push("/certificationCenter/company")}>
          <Banner.TextBanner
            borderRadius={"16px"}
            border={"1px solid #3F52E4"}
            icon
            text="기업"
          />
        </Banner>
      </Stack>
    </AppContainer>
  );
};

export default CertificationCenter;
