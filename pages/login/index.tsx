import React, { useState } from "react";

import { Stack, Text } from "@chakra-ui/react";
import Link from "next/link";

import CustomButton from "@/components/common/CustomButton";
import RightArrowIcon from "@/components/icons/RightArrowIcon";

import CustomInput from "../components/CustomInput";
import Header from "../components/Header";
import PageLayout from "../components/Layout";

const Login = () => {
  const [emailValidation, setEmailValidation] = useState(false);
  const [passwordValidation, setPasswordValidation] = useState(false);

  function validateForm() {
    if (emailValidation && passwordValidation) {
      return true;
    }
    return false;
  }

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
            setValidation={setEmailValidation}
          />
          <CustomInput
            label="password"
            placeholder="영어, 숫자, 특수문자 포함 8~20자"
            errorMessage="비밀번호는 영어, 숫자, 특수문자 포함 8~20자 입니다."
            title="비밀번호"
            type="password"
            setValidation={setPasswordValidation}
          />
          <Stack paddingTop={"129px"} spacing={"16px"}>
            <CustomButton
              title="로그인하기"
              buttonStyle="filled"
              disabled={!validateForm()}
            />
            <Stack
              height={"72px"}
              borderRadius={"16px"}
              direction={"row"}
              justify={"space-between"}
              align={"center"}
              paddingX={"12px"}
              background={"#F7F8FA"}
            >
              <Text textStyle={"caption2"}>계정이 없다면?</Text>
              <Link href={"/signup"}>
                <Text
                  textStyle={"subtitle1"}
                  display={"flex"}
                  alignItems={"center"}
                  gap={"12px"}
                >
                  회원가입하기
                  <RightArrowIcon />
                </Text>
              </Link>
            </Stack>
          </Stack>
        </Stack>
      </form>
    </PageLayout>
  );
};

export default Login;
