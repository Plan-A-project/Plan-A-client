import { Button } from "@chakra-ui/react";
import React from "react";

interface CustomButtonType {
  title: string;
  color: string;
  bgColor: string;
}

const CustomButton = ({ title, color, bgColor }: CustomButtonType) => {
  return (
    <Button w={"100%"} h={"52px"} textStyle={"subtitle1"}>
      {title}
    </Button>
  );
};

export default CustomButton;
