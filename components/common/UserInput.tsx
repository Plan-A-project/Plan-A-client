import { FormControl, FormLabel, Input, Flex } from "@chakra-ui/react";

const UserInput = ({ label, placeholder, title, type, handleChange }: any) => {
  return (
    <FormControl>
      <FormLabel
        textStyle={"caption2"}
        color={"#75788A"}
        htmlFor={label}
        display={"flex"}
        alignItems={"center"}
        gap={"4px"}
        px={2}
      >
        {title}
      </FormLabel>
      <Flex align={"center"}>
        <Input
          onChange={e => handleChange(e.target.value)}
          type={type}
          placeholder={placeholder}
          h={"52px"}
          textStyle={"body1"}
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
