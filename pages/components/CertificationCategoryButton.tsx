import React from "react";

import { ChevronRightIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";

interface CertificationCategoryButtonProps {
  title: string;
}

const CertificationCategoryButton = ({
  title,
}: CertificationCategoryButtonProps) => {
  return (
    <Button
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      h={"72px"}
    >
      {title}
      <ChevronRightIcon focusable={true} boxSize={9} />
    </Button>
  );
};

export default CertificationCategoryButton;
