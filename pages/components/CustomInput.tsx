import React, { ChangeEvent, useEffect, useState } from "react";

import {
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  Input,
  Flex,
  Icon,
  Tooltip,
  Button,
} from "@chakra-ui/react";
import { IoCloseCircleOutline } from "react-icons/io5";

import authApis from "@/api/authentication";
import {
  emailRegex,
  nicknameRegex,
  passwordRegex,
  usernameRegex,
} from "@/utils/regex";

interface CustomInputProps {
  title: string;
  label: string;
  placeholder: string;
  errorMessage?: string;
  type: string;
  icon?: any;
}
const CustomInput = ({
  label,
  title,
  placeholder,
  errorMessage,
  type,
  icon,
}: CustomInputProps) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleEmailValidate = async () => {
    const data = await authApis.validateEmail({ email: input });
    console.log(11, data);
  };
  const handleNickNameValidate = async () => {
    const data = await authApis.validateEmail({ email: input });
    console.log(11, data);
  };

  type ButtonProps = {
    type: string;
  };
  const ValidateButton: React.FC<ButtonProps> = ({ type }) => {
    return (
      <Button
        h={"52px"}
        w={"56px"}
        ml={2}
        textStyle="subtitle1"
        color={error || !input ? "grey.500" : "primary.500"}
        p={2}
        border={error || !input ? "1px solid #C8C9D0" : "1px solid #3F52E4"}
        borderRadius={16}
        bgColor={"background1"}
        onClick={
          type === "이메일" ? handleEmailValidate : handleNickNameValidate
        }
      >
        {type === "이메일" ? "인증" : "확인"}
      </Button>
    );
  };
  const getIsRegexError = (regex: RegExp) => {
    const Regex = new RegExp(regex);
    const isError = Regex.test(input);
    !isError
      ? setError(prev => (prev = true))
      : setError(prev => (prev = false));
  };

  const getTypeOfError = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    switch (title) {
      case "이름":
        getIsRegexError(usernameRegex);
        break;
      case "이메일":
        getIsRegexError(emailRegex);
        break;
      case "비밀번호":
        getIsRegexError(passwordRegex);
        break;
      case "비밀번호":
        getIsRegexError(passwordRegex);
        break;
      case "닉네임":
        getIsRegexError(nicknameRegex);
        break;
    }
  };

  const toggleTooltip = () => {
    setShowTooltip(prev => (prev = true));
    setTimeout(() => setShowTooltip(prev => (prev = false)), 3000);
  };

  return (
    <FormControl isInvalid={error}>
      <FormLabel
        fontSize={"12px"}
        fontWeight={"400"}
        lineHeight={"14px"}
        color={"#75788A"}
        htmlFor={label}
        display={"flex"}
        alignItems={"center"}
        gap={"4px"}
      >
        {title}
        {icon && (
          <Tooltip
            hasArrow
            label="계정 분실 시 본인 확인을
        위해 필요합니다."
            bg="#c8c3c3"
            color={"#000"}
            dropShadow={"md"}
            placement="right"
            isOpen={showTooltip}
            borderRadius={"12px"}
            w={"138px"}
            h={"39px"}
            p={"6px 11px"}
            fontSize={"12px"}
            fontWeight={"400"}
            lineHeight={"14px"}
          >
            <Icon
              as={icon}
              _hover={{ cursor: "pointer" }}
              onClick={toggleTooltip}
            />
          </Tooltip>
        )}
      </FormLabel>
      <Flex align={"center"}>
        <Input
          type={type}
          value={input}
          onChange={getTypeOfError}
          placeholder={placeholder}
          h={"52px"}
          fontSize={"16px"}
          fontWeight={"400"}
          lineHeight={"20px"}
          borderRadius={16}
          _placeholder={{
            fontSize: "16px",
            fontWeight: "400",
            lineHeight: "20px",
          }}
          // isRequired
          id={label}
          // onBlur={getTypeOfError}
        />
        {title === "이메일" ? (
          <ValidateButton type={"이메일"} />
        ) : title === "닉네임" ? (
          <ValidateButton type={"닉네임"} />
        ) : (
          ""
        )}
      </Flex>
      {error && (
        <FormErrorMessage
          fontSize={"12px"}
          fontWeight={"400"}
          lineHeight={"14px"}
          color={"#F90B66"}
        >
          <IoCloseCircleOutline style={{ marginRight: "6px" }} />
          {errorMessage}
        </FormErrorMessage>
      )}
    </FormControl>
  );
};

export default CustomInput;
