import { PropsWithChildren } from "react";

import { Flex, Text, TextProps } from "@chakra-ui/react";
import { NumberLiteralType } from "typescript";

import IconCommentSmall from "@/components/icons/IconCommentSmall";
import IconEyes from "@/components/icons/IconEyes";
import IconHeart from "@/components/icons/IconHeart";

type BoardItemProps = {
  date?: string;
  comments?: number;
  likes?: number;
  views?: number;
};

const BottomText = ({ children, ...props }: TextProps) => {
  return (
    <Text color={"gray.600"} textStyle={"overline"} {...props}>
      {children}
    </Text>
  );
};

const BoardItem: React.FC<PropsWithChildren<BoardItemProps>> = ({
  children,
  date,
  comments,
  likes,
  views,
}) => {
  return (
    <Flex px={3} py={4} gap={3} direction={"column"}>
      {children}
      <Flex gap={1} align={"center"}>
        <BottomText mr={"auto"}>{date}</BottomText>
        {likes && (
          <>
            <IconHeart />
            <BottomText> {likes}</BottomText>
          </>
        )}
        {comments && (
          <>
            <IconCommentSmall style={{ marginLeft: 8 }} />
            <BottomText> {comments}</BottomText>
          </>
        )}
        {views && (
          <>
            <IconEyes style={{ marginLeft: 8 }} />
            <BottomText> {views}</BottomText>
          </>
        )}
      </Flex>
    </Flex>
  );
};

export default BoardItem;
