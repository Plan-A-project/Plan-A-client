import React from "react";

import { Box, Text } from "@chakra-ui/react";

interface Props {
  type: "admin" | "grey" | "company" | "union";
  text: string;
}

const Badge = ({ type, text = "학생회" }: Props): JSX.Element => {
  const bgColor = {
    admin: "#ebecee",
    grey: "#ebecee",
    company: "#c5f2ee",
    union: "#d2e0f8",
  };

  const color = {
    admin: "#757789",
    grey: "#757789",
    company: "#00ab99",
    union: "#3f52e4",
  };

  return (
    <Box
      borderRadius="4px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      padding="2px 0px"
      bgColor={bgColor[type]}
      width="40px"
    >
      <Text
        fontSize="12px"
        fontWeight="600"
        lineHeight="16px"
        whiteSpace="nowrap"
        color={color[type]}
      >
        {type === "company" && "기업"}
        {type === "admin" && "관리자"}
        {type === "union" && text}
        {type === "grey" && "이름"}
      </Text>
    </Box>
  );
};

export default Badge;
