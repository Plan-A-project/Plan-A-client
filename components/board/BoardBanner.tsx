import { ChevronRightIcon } from "@chakra-ui/icons";
import { Button, ButtonProps, Tag, Text } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

const BoardBanner: React.FC<PropsWithChildren<ButtonProps>> = ({
  children,
  ...props
}) => {
  return (
    <Button h={14} p={"0 12px"} display={"flex"} w={"100%"} {...props}>
      <Tag
        color={"teal.400"}
        background={"teal.100"}
        variant={"solid"}
        fontWeight={"semibold"}
        p={"3px 6px"}
        mr={2}
      >
        운영자
      </Tag>

      <Text
        fontWeight={"normal"}
        fontSize={"md"}
        lineHeight={"5"}
        flex={1}
        textAlign={"left"}
      >
        {children}
      </Text>

      <ChevronRightIcon boxSize={4} />
    </Button>
  );
};

export default BoardBanner;
