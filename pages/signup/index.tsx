import React from "react";

import { ChevronLeftIcon, QuestionOutlineIcon } from "@chakra-ui/icons";
import { Flex, Heading, Stack, Button } from "@chakra-ui/react";

import CustomInput from "../components/CustomInput";
import Header from "../components/Header";
import PageLayout from "../components/Layout";

const index = () => {
  return (
    <PageLayout>
      <Header headingText="회원가입" />
      <Stack padding={"16px"} spacing={"25px"}>
        <CustomInput
          label="username"
          placeholder="이름을 입력해 주세요"
          title="이름"
          type="text"
          errorMessage="이름을 입력해 주세요"
        />
        <CustomInput
          label="signupEmail"
          placeholder="youremail@email.com"
          errorMessage="이메일 주소 전체를 입력해주세요."
          title="이메일"
          type="email"
        />
        <CustomInput
          label="weChatOrKakaoID"
          placeholder="yourID"
          title="위챗 or 카카오톡 아이디"
          type="text"
          errorMessage="이메일 주소 전체를 입력해주세요."
          icon={QuestionOutlineIcon}
        />
        <CustomInput
          label="signupPassword"
          placeholder="영어, 숫자, 특수문자 포함 8~20자"
          errorMessage="비밀번호는 영어, 숫자, 특수문자 포함 8~20자 입니다."
          title="비밀번호"
          type="password"
        />
        <CustomInput
          label="passwordConfirm"
          placeholder="비밀번호를 한 번 더 입력해 주세요"
          errorMessage="비밀번호가 일치하지 않아요."
          title="비밀번호 확인"
          type="password"
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
