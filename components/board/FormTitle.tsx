import { Flex, Heading } from "@chakra-ui/layout";

type TitleProps = {
  left?: React.ReactNode;
  title?: string;
  right?: React.ReactNode;
};

export default function FormTitle({ left, title, right }: TitleProps) {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} mt={5}>
      {left && left}
      {title && (
        <Heading size={"md"} ml={5}>
          {title}
        </Heading>
      )}
      {right && right}
    </Flex>
  );
}
