import React from "react";

import { Container, Stack, Flex, Button, Text } from "@chakra-ui/react";

import PageLayout from "../components/Layout";

const SignupComplete = () => {
  return (
    <PageLayout>
      <Stack px={"16px"}>
        <Container
          w={"281px"}
          h={"281px"}
          centerContent
          bg="gray.100"
          borderRadius={"8px"}
          gap={"28px"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          mt={"170px"}
          mb={"229px"}
        >
          <Text fontSize={"24px"}>가입이 완료되었습니다!</Text>
          <Text fontSize={"16px"} textAlign={"center"}>
            학생 인증을 해야 <br /> 모든 게시물을 볼 수 있어요. <br /> 지금
            인증하러 가볼까요?
          </Text>
        </Container>
        <Flex gap={"9px"}>
          <Button w={"100px"} h={"52px"}>
            나중에
          </Button>
          <Button w={"234px"} h={"52px"}>
            인증하러 가기
          </Button>
        </Flex>
      </Stack>
    </PageLayout>
  );
};

export default SignupComplete;
