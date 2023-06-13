import { ChevronRightIcon } from "@chakra-ui/icons";
import { Button, ButtonProps, Tag, Text } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import IconNotice from "../icons/IconNotice";
import IconForward from "../icons/IconForward";

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
        fontWeight={"semibold"}
        fontSize={"lg"}
        lineHeight={"5"}
        flex={1}
        textAlign={"left"}
      >
        {children}
      </Text>

      <IconForward />
    </Button>
  );
};

export default BoardBanner;
