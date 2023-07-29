import { PropsWithChildren } from "react";

import { ChevronRightIcon } from "@chakra-ui/icons";
import { Button, ButtonProps, Tag, Text } from "@chakra-ui/react";

import IconForward from "../icons/IconForward";
import IconNotice from "../icons/IconNotice";

const BoardBanner: React.FC<PropsWithChildren<ButtonProps>> = ({
  children,
  ...props
}) => {
  return (
    <Button
      h={"72px"}
      p={"0 12px"}
      display={"flex"}
      w={"100%"}
      bg={"#F7F8FA"}
      {...props}
    >
      <IconNotice style={{ marginRight: 8 }} />

      <Text
        textStyle={"subtitle1"}
        flex={1}
        textAlign={"left"}
        color={"grey.900"}
      >
        {children}
      </Text>

      <IconForward />
    </Button>
  );
};

export default BoardBanner;
