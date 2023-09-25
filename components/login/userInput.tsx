import { useState } from "react";

import {
  FormControl,
  FormLabel,
  Input,
  Flex,
  InputGroup,
  InputRightElement,
  Box,
} from "@chakra-ui/react";

import { TbEyeOff, TbEye } from "react-icons/tb";

const UserInput = ({ label, placeholder, title, type, handleChange }: any) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handleClick = () => setShowPassword(!showPassword);

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
        {type === "password" ? (
          <InputGroup>
            <Input
              onChange={e => {
                handleChange(e, label);
              }}
              type={
                type === "password"
                  ? showPassword
                    ? "text"
                    : "password"
                  : type
              }
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
            <InputRightElement marginTop={"5px"} marginRight={1}>
              <Box onClick={handleClick}>
                {showPassword ? <TbEyeOff size={26} /> : <TbEye size={26} />}
              </Box>
            </InputRightElement>
          </InputGroup>
        ) : (
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
        )}
      </Flex>
    </FormControl>
  );
};

export default UserInput;
