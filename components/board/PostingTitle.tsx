import { Flex, Heading } from "@chakra-ui/layout";

type TitleProps = {
  left?: React.ReactNode;
  title?: string;
  right?: React.ReactNode;
};

export default function PostingTitle({ left, title, right }: TitleProps) {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} mt={5}>
      {left && left}
      {title && <Heading size={"md"}>{title}</Heading>}
      {right && right}
    </Flex>
  );
}
