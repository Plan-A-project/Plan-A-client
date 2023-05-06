import React from "react";
import { Tag } from "@chakra-ui/react";

interface CustomTagProps {
  title: string;
  color: string;
}

const CustomTag = ({ title, color }: CustomTagProps) => {
  return (
    <Tag
      w={"fit-content"}
      colorScheme={color}
      fontWeight={600}
      fontSize={"12px"}
    >
      {title}
    </Tag>
  );
};

export default CustomTag;
