import React, { ChangeEvent, useState } from "react";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  Input,
  Flex,
} from "@chakra-ui/react";
import { IoCloseCircleOutline } from "react-icons/io5";

interface CustomInputProps {
  title: string;
  label: string;
  placeholder: string;
  errorMessage?: string;
  height?: string;
  type: string;
}

const CustomInput = ({
  label,
  title,
  placeholder,
  errorMessage,
  height,
  type,
}: CustomInputProps) => {
  const [input, setInput] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setInput(e.target.value);

  const isError = input === "";

  return (
    <FormControl isInvalid={isError}>
      <FormLabel
        fontSize={"12px"}
        fontWeight={"400"}
        lineHeight={"14px"}
        color={"#75788A"}
        htmlFor={label}
      >
        {title}
      </FormLabel>
      <Input
        type={type}
        value={input}
        onChange={handleInputChange}
        placeholder={placeholder}
        h={height}
        fontSize={"16px"}
        fontWeight={"400"}
        lineHeight={"20px"}
        _placeholder={{
          fontSize: "16px",
          fontWeight: "400",
          lineHeight: "20px",
        }}
        id={label}
      />
      {!isError ? (
        <FormHelperText></FormHelperText>
      ) : (
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
