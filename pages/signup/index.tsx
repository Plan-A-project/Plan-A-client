import React, { ChangeEvent, useState } from "react";

import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Flex, Heading, Stack, Button } from "@chakra-ui/react";

import authApis from "@/api/authentication";
import UserInput from "@/components/signup/userInput";
import validateInput from "@/utils/validation";

import PageLayout from "../components/Layout";

const SignUp = () => {
  type signUpDataType = {
    username: string;
    email: string;
    nickname: string;
    password: string;
    passwordConfirm: string;
  };
  const signUpData = {
    username: "",
    email: "",
    nickname: "",
    password: "",
    passwordConfirm: "",
  };
  const signUpInputData = [
    {
      label: "username",
      placeholder: "실명을 입력해 주세요",
      title: "이름",
      type: "text",
      hasConfirmButton: false,
    },
    {
      label: "email",
      placeholder: "youremail@email.com",
      title: "이메일",
      type: "email",
      hasConfirmButton: true,
    },
    {
      label: "password",
      placeholder: "영어, 숫자, 특수문자 포함 8~20자",
      title: "비밀번호",
      type: "password",
      hasConfirmButton: false,
    },
    {
      label: "passwordConfirm",
      placeholder: "비밀번호를 한 번 더 입력해 주세요",
      title: "비밀번호 확인",
      type: "password",
      hasConfirmButton: false,
    },
    {
      label: "nickname",
      placeholder: "한글, 영어, 숫자 조합 가능 2~8자",
      title: "닉네임",
      type: "text",
      hasConfirmButton: true,
    },
  ];
  const [inputValues, setInputValues] = useState<signUpDataType>(signUpData);
  const [errors, setErrors] = useState({});
  const [confirmInput, setConfirmInput] = useState({
    email: "",
    nickname: "",
  });

  const isReadyToSignUp =
    confirmInput.email === inputValues.email &&
    confirmInput.nickname === inputValues.nickname &&
    Object.values(errors).every(value => value === "") &&
    Object.values(inputValues).every(value => value !== "");

  const handleSignUp = async () => {
    if (isReadyToSignUp) {
      const response = await authApis.signup({
        email: inputValues.email,
        name: inputValues.username,
        password: inputValues.password,
        nickname: inputValues.nickname,
        universityId: 1,
      });
    } else {
      console.log("no validation");
    }
  };
  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    formType: string,
  ) => {
    const { value } = event.target;
    setInputValues(prevState => ({
      ...prevState,
      [formType]: value,
    }));

    if (formType === "passwordConfirm") {
      setErrors(prevState => ({
        ...prevState,
        [formType]:
          inputValues.password === value ? "" : "비밀번호가 일치하지 않습니다.",
      }));
    } else {
      setErrors(prevState => ({
        ...prevState,
        [formType]: validateInput(value, formType)[formType],
      }));
    }
  };
  return (
    <PageLayout>
      <Flex align={"center"}>
        <ChevronLeftIcon focusable={true} boxSize={9} />
        <Heading as="h2" size="md">
          회원가입
        </Heading>
      </Flex>
      <Stack padding={"16px"} spacing={"25px"}>
        {signUpInputData.map(data => {
          return (
            <UserInput
              key={data.label}
              {...data}
              errors={errors}
              values={inputValues}
              handleChange={handleChange}
              handleErrors={setErrors}
              handleConfirm={setConfirmInput}
              confirmInput={confirmInput}
            />
          );
        })}
      </Stack>
      <Stack px={"16px"}>
        <Button
          textStyle={"subtitle1"}
          onClick={handleSignUp}
          w={"100%"}
          h={"52px"}
          mt={"192px"}
          mb={"32px"}
          borderRadius={"16px"}
          bg={isReadyToSignUp ? "primary.500" : "grey.200"}
          color={isReadyToSignUp ? "background1" : "grey.500"}
        >
          가입하기
        </Button>
      </Stack>
    </PageLayout>
  );
};

export default SignUp;
