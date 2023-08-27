import { useState, ChangeEvent } from "react";

import { ChevronRightIcon } from "@chakra-ui/icons";
import { Stack, Button, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useSetRecoilState } from "recoil";

import authApis from "@/api/authentication";
import { AppContainer, Header } from "@/components/common";
import UserInput from "@/components/login/userInput";
import { isLoggedInState } from "@/state/atoms/auth/loginAtom";
import getCookie from "@/utils/getCookie";

const Login = () => {
  const [hasError, setHasError] = useState(false);
  const router = useRouter();
  const setLoggedIn = useSetRecoilState(isLoggedInState);
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  });

  // console.log(222333, window.document.cookie);
  const checkFilled = Object.values(inputValues).every(value => value !== "");

  const loginInputData = [
    {
      label: "email",
      placeholder: "youremail@email.com",
      title: "이메일",
      type: "email",
      hasConfirmButton: false,
    },
    {
      label: "password",
      placeholder: "영어, 숫자, 특수문자 포함 8~20자",
      title: "비밀번호",
      type: "password",
      hasConfirmButton: false,
    },
  ];
  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    formType: string,
  ) => {
    const { value } = event.target;
    setInputValues(prevState => ({
      ...prevState,
      [formType]: value,
    }));
  };
  const handleLogin = async () => {
    if (checkFilled) {
      const response = await authApis.login({
        username: inputValues.email,
        password: inputValues.password,
      });
      console.log(1111, response);
      if (!response.ok) {
        setHasError(true);
      } else {
        setHasError(false);
        if (response.data) {
          localStorage.setItem("isLoggedIn", "true");
          router.push("./");
          setLoggedIn(true);
        }
      }
    }
  };
  return (
    <AppContainer>
      <Header back leftTitle title="학생 로그인" />
      <form>
        <Stack pt={6}>
          {loginInputData.map(data => {
            return (
              <UserInput
                key={data.label}
                {...data}
                handleChange={handleChange}
              />
            );
          })}
          {hasError && (
            <Text
              fontSize={"12px"}
              fontWeight={"400"}
              lineHeight={"14px"}
              color={"#F90B66"}
            >
              이메일 주소나 비밀번호가 올바르지 않습니다.
            </Text>
          )}
          <Stack paddingTop={"129px"} spacing={"16px"}>
            <Button
              onClick={handleLogin}
              textStyle={"subtitle1"}
              height={"52px"}
              borderRadius={"16px"}
              bg={checkFilled ? "primary.500" : "grey.200"}
              color={checkFilled ? "background1" : "grey.500"}
            >
              로그인하기
            </Button>

            <Stack
              bg={"background2"}
              height={"72px"}
              borderRadius={"16px"}
              direction={"row"}
              justify={"space-between"}
              align={"center"}
              paddingX={"12px"}
            >
              <Text textStyle={"body3"}>계정이 없다면</Text>
              <Button
                fontSize={"16px"}
                width={"fit-content"}
                height={"fit-content"}
                padding={0}
                _hover={{ bg: "transparent" }}
                backgroundColor={"transparent"}
              >
                <Text
                  onClick={() => router.push("/signup")}
                  textStyle={"subtitle1"}
                  color={"grey.900"}
                >
                  회원가입하기
                </Text>
                <ChevronRightIcon
                  color={"grey.900"}
                  boxSize={6}
                  width={"fit-content"}
                />
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </form>
    </AppContainer>
  );
};

export default Login;
