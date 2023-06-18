import { PropsWithChildren } from "react";

import { Flex, Text, TextProps } from "@chakra-ui/react";

type BoardItemProps = {
  date?: string;
  comments?: number;
  likes?: number;
};

const BottomText = ({ children, ...props }: TextProps) => {
  return (
    // 0.625 for 10px, xs = 0.75 for 12px
    <Text fontSize={"xs"} color={"gray.600"} lineHeight={3} {...props}>
      {children}
    </Text>
  );
};

const BoardItem: React.FC<PropsWithChildren<BoardItemProps>> = ({
  children,
  date,
  comments,
  likes,
}) => {
  return (
    <Flex px={3} py={4} gap={3} direction={"column"}>
      {children}
      <Flex>
        <BottomText mr={"auto"}>{date}</BottomText>
        <BottomText mr={2}> {comments}</BottomText>
        <BottomText> {likes}</BottomText>
      </Flex>
    </Flex>
  );
};

export default BoardItem;
