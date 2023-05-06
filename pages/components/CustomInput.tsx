import React, { ChangeEvent, useState } from "react";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  Input,
} from "@chakra-ui/react";

interface CustomInputProps {
  label: string;
  placeholder: string;
  errorMessage?: string;
  height?: string;
}

const CustomInput = ({
  label,
  placeholder,
  errorMessage,
  height,
}: CustomInputProps) => {
  const [input, setInput] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setInput(e.target.value);

  const isError = input === "";

  return (
    <FormControl isInvalid={isError}>
      <FormLabel>{label}</FormLabel>
      <Input
        type="email"
        value={input}
        onChange={handleInputChange}
        placeholder={placeholder}
        h={height}
      />
      {!isError ? (
        <FormHelperText></FormHelperText>
      ) : (
        <FormErrorMessage>{errorMessage}</FormErrorMessage>
      )}
    </FormControl>
  );
};

export default CustomInput;
