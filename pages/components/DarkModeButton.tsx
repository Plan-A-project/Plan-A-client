import { Switch, FormLabel } from "@chakra-ui/react";

const DarkModeButton = () => {
  return (
    <FormLabel
      htmlFor="dark-mode"
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      width={"100%"}
      height={"100%"}
      textStyle={"body1"}
      _hover={{ cursor: "pointer" }}
    >
      다크모드
      <Switch id="dark-mode" size="md" />
    </FormLabel>
  );
};

export default DarkModeButton;
