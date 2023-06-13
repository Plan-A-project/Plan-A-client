import React from "react";

import { Tag } from "@chakra-ui/react";

interface CustomTagProps {
  title: string;
  color: string;
}

const CustomTag = ({ title, color }: CustomTagProps) => {
  return (
    <Tag w={"fit-content"} colorScheme={color} textStyle={"caption1"}>
      {title}
    </Tag>
  );
};

export default CustomTag;
