import { useState } from "react";

import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Flex,
  Button,
} from "@chakra-ui/react";
import { IoCloseCircleOutline } from "react-icons/io5";

const UserInput = ({ label, placeholder, title, type, handleChange }: any) => {
  return (
    <FormControl>
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
      </FormLabel>
      <Flex align={"center"}>
        <Input
          onChange={e => {
            handleChange(e, label);
          }}
          type={type}
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
          id={label}
        />
      </Flex>
    </FormControl>
  );
};

export default UserInput;
