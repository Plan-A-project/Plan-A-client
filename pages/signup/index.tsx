import React from "react";
import PageLayout from "../components/Layout";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Flex, Heading, Stack, Button } from "@chakra-ui/react";
import CustomInput from "../components/CustomInput";

const index = () => {
  return (
    <PageLayout>
      <Flex align={"center"}>
        <ChevronLeftIcon focusable={true} boxSize={9} />
        <Heading as="h2" size="md">
          회원가입
        </Heading>
      </Flex>
      <Stack padding={"16px"} spacing={"16px"}>
        <CustomInput
          label="이름"
          placeholder="이름을 입력해 주세요"
          //   errorMessage="이메일 주소 전체를 입력해주세요."
        />
        <CustomInput
          label="이메일"
          placeholder="youremail@email.com"
          errorMessage="이메일 주소 전체를 입력해주세요."
        />
        <CustomInput
          label="위챗 or 카카오톡 아이디"
          placeholder="yourID"
          //   errorMessage="이메일 주소 전체를 입력해주세요."
        />
        <CustomInput
          label="비밀번호"
          placeholder="영어, 숫자, 특수문자 포함 8~20자"
          errorMessage="비밀번호는 영어, 숫자, 특수문자 포함 8~20자 입니다."
        />
        <CustomInput
          label="비밀번호 확인"
          placeholder="비밀번호를 한 번 더 입력해 주세요"
          errorMessage="비밀번호가 일치하지 않아요."
        />
      </Stack>
      <Stack px={"16px"}>
        <Button w={"100%"} h={"52px"} mt={"192px"} mb={"32px"}>
          가입하기
        </Button>
      </Stack>
    </PageLayout>
  );
};

export default index;
