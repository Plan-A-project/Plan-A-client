import { Box, Stack, Flex } from "@chakra-ui/layout";
import { Button, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

import { AppContainer } from "@/components/common";
const CheckEmail = () => {
  const router = useRouter();
  return (
    <AppContainer>
      <Stack gap={12} h={"100vh"} justify={"center"}>
        <Box textAlign={"center"}>
          <Text textStyle={"headline2"}>가입이 완료되었어요!</Text>
          <Text mt={4} textStyle={"body1"} fontSize={"18px"}>
            기업 인증을 하면 모집공고 등
            <br /> 게시물을 작성할 수 있어요.
            <br /> 지금 인증하러 가 볼까요?
          </Text>
        </Box>
        <Flex justify={"space-between"}>
          <Button
            onClick={() => router.push("/")}
            mt={4}
            textStyle={"subtitle1"}
            h={"52px"}
            w={"100px"}
            borderRadius={"16px"}
            border={"1px solid #3F52E4"}
            bg={"#FFF"}
            color={"primary.500"}
            px={6}
          >
            나중에
          </Button>
          <Button
            onClick={() => router.push("/certificationCenter")}
            mt={4}
            w={"234px"}
            textStyle={"subtitle1"}
            h={"52px"}
            borderRadius={"16px"}
            bg={1 ? "primary.500" : "grey.200"}
            color={1 ? "background1" : "grey.500"}
          >
            인증하러 가기
          </Button>
        </Flex>
      </Stack>
    </AppContainer>
  );
};

export default CheckEmail;
