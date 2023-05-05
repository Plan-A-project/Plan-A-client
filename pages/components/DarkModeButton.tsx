import { Button, Text, Switch } from "@chakra-ui/react";
import { useState } from "react";

const DarkModeButton = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleButtonClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Button
      display={"flex"}
      justifyContent={"space-between"}
      paddingX={"5px"}
      _hover={{ bg: "transparent" }}
      backgroundColor={"transparent"}
      onClick={handleButtonClick}
    >
      <Text fontSize={16} fontWeight={400}>
        다크모드
      </Text>
      <Switch size="md" isChecked={isChecked} />
    </Button>
  );
};

export default DarkModeButton;
