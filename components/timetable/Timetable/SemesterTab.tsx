import { useState } from "react";

import { HStack } from "@chakra-ui/react";

import DropDown from "./DropDown";

export default function SemesterTab() {
  const [sem, setSem] = useState("1학년 1학기");
  return (
    <HStack>
      <DropDown setSem={setSem} />
    </HStack>
  );
}
