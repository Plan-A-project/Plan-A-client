import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Icon,
  Tooltip,
} from "@chakra-ui/react";
import { IoCloseCircleOutline } from "react-icons/io5";

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
  setValidation: Dispatch<SetStateAction<boolean>>;
}

const CustomInput = ({
  label,
  title,
  placeholder,
  errorMessage,
  type,
  icon,
  setValidation,
}: CustomInputProps) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setInput(e.target.value);

  const getIsRegexError = (regex: RegExp) => {
    const Regex = new RegExp(regex);
    const isError = Regex.test(input);
    if (!isError) {
      setError(prev => (prev = true));
      setValidation(prev => (prev = false));
    } else {
      setError(prev => (prev = false));
      setValidation(prev => (prev = true));
    }
  };

  const isNotEmpty = (value: any) => {
    value.target.value === ""
      ? setValidation(prev => (prev = false))
      : setValidation(prev => (prev = true));
  };

  const getTypeOfError = (e: any) => {
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
      case "비밀번호 확인":
        getIsRegexError(passwordRegex);
        break;
      case "닉네임":
        getIsRegexError(nicknameRegex);
        break;
      case "위챗 or 카카오톡 아이디":
        isNotEmpty(e);
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
      <Input
        type={type}
        value={input}
        onChange={e => {
          handleInputChange(e);
          getTypeOfError(e);
        }}
        placeholder={placeholder}
        h={"52px"}
        borderRadius={"16px"}
        _placeholder={{
          textStyle: "body2",
          color: "disabled",
        }}
        textStyle={"body2"}
        border={"none"}
        color="#303136"
        background={"background2"}
        focusBorderColor="primary.500"
        errorBorderColor="error"
        id={label}
      />
      {error && (
        <FormErrorMessage
          fontSize={"12px"}
          fontWeight={"400"}
          lineHeight={"14px"}
          color="error"
        >
          <IoCloseCircleOutline style={{ marginRight: "6px" }} />
          {errorMessage}
        </FormErrorMessage>
      )}
    </FormControl>
  );
};

export default CustomInput;
