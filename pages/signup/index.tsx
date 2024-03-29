import React, { ChangeEvent, useState } from "react";

import { Stack, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";

import authApis from "@/api/authentication";
import { AppContainer, Header } from "@/components/common";
import UserInput from "@/components/signup/userInput";
import validateInput from "@/utils/validation";
import postApis from "@/api/post";

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
      placeholder: "영어, 숫자 조합 가능 6~20자",
      title: "아이디",
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
  const router = useRouter();
  const isReadyToSignUp =
    confirmInput.email === inputValues.email &&
    confirmInput.nickname === inputValues.nickname &&
    Object.values(errors).every(value => value === "") &&
    Object.values(inputValues).every(value => value !== "");

  const handleSignUp = async () => {
    if (isReadyToSignUp) {
      const response = await authApis.studentSignup({
        username: inputValues.email,
        realName: inputValues.username,
        password: inputValues.password,
        passwordConfirm: inputValues.passwordConfirm,
        nickname: inputValues.nickname,
        universityId: 1,
      });
      if (response.ok) {
        const response = await authApis.login({
          username: inputValues.email,
          password: inputValues.password,
        });
        if (response.data) {
          await postApis.agreePolicy();
          router.push("/signup/complete");
        } else {
          alert("오류가 발생했습니다.");
        }
      }
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
    <AppContainer>
      <Header back leftTitle title="학생 회원가입" />
      <Stack pt={6} spacing={"25px"}>
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
    </AppContainer>
  );
};

export default SignUp;
