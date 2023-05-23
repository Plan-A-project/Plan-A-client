import React from "react";
import { Flex, Icon, Text } from "@chakra-ui/react";

interface AccountChangeItemProps {
  title: string;
  icon: any;
}

const AccountChangeItem = ({ title, icon }: AccountChangeItemProps) => {
  return (
    <Flex align={"center"} gap={"12px"} h={"52px"}>
      <Icon as={icon} w={"24px"} h={"24px"} />
      <Text textStyle={"body1"}>{title}</Text>
    </Flex>
  );
};

export default AccountChangeItem;
