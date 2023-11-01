import { Flex, FlexProps } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
} & FlexProps;

const NewBoardBanner = ({ children, ...props }: Props) => {
  return (
    <Flex
      h={"72px"}
      p={"0 12px"}
      w={"100%"}
      bg={"gray.50"}
      align={"center"}
      borderRadius={"16px"}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NewBoardBanner;
