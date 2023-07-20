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
      bg={"gray.100"}
      align={"center"}
      borderRadius={"lg"}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NewBoardBanner;
