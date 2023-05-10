import React from "react";
import {
  Heading,
  Flex,
  Stack,
  Button,
  Text,
  Box,
  Container,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import PageLayout from "../components/Layout";
import CustomInput from "../components/CustomInput";
import Header from "../components/Header";

const index = () => {
  return (
    <PageLayout>
      <Header headingText="로그인" />
      <form>
        <Stack padding={"16px"}>
          <CustomInput
            label="email"
            placeholder="youremail@email.com"
            errorMessage="이메일 주소 전체를 입력해주세요."
            title="이메일"
            type="email"
          />
          <CustomInput
            label="password"
            placeholder="영어, 숫자, 특수문자 포함 8~20자"
            errorMessage="최소 8자리 이상으로 입력해주세요."
            title="비밀번호"
            type="password"
          />
          <Stack paddingTop={"129px"}>
            <Button height={"52px"} type="submit">
              로그인하기
            </Button>

            <Stack
              border={"1px solid grey"}
              height={"72px"}
              borderRadius={"8px"}
              direction={"row"}
              justify={"space-between"}
              align={"center"}
              paddingX={"12px"}
            >
              <Text fontSize={"12px"}>계정이 없다면?</Text>
              <Button
                fontSize={"16px"}
                width={"fit-content"}
                height={"fit-content"}
                padding={0}
                _hover={{ bg: "transparent" }}
                backgroundColor={"transparent"}
              >
                회원가입하기
                <ChevronRightIcon boxSize={8} width={"fit-content"} />
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </form>
    </PageLayout>
  );
};

export default index;
