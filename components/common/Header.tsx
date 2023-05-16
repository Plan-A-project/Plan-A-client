import { Box, Button, Flex, Text, TextProps, chakra } from "@chakra-ui/react";
import IconBack from "../icons/IconBack";
import { useRouter } from "next/router";

type TitleProps = {
  text: React.ReactNode;
};

const Title: React.FC<TextProps & TitleProps> = ({ text, ...props }) => {
  return (
    <Text fontWeight={"semibold"} fontSize={"lg"} lineHeight={6} {...props}>
      {text}
    </Text>
  );
};

type HeaderProps = {
  title: string;
  onBackClick?: () => void;
  back?: boolean;
  leftTitle?: boolean;
  rightNode?: React.ReactNode;
};

const Header: React.FC<HeaderProps> = ({
  title,
  onBackClick,
  leftTitle,
  rightNode,
  back,
}) => {
  const router = useRouter();

  function handleBackPress() {
    onBackClick?.();
    if (!onBackClick && back) {
      router.back();
    }
  }

  return (
    <chakra.header pos={"sticky"} top={0} left={0}>
      <Flex justify={"center"} height={10} align={"center"}>
        <Box flex={1}>
          {(back || onBackClick) && (
            <Button
              variant={"unstyled"}
              minW={6}
              w={6}
              h={6}
              mr={2}
              onClick={handleBackPress}
            >
              <IconBack />
            </Button>
          )}
          {leftTitle && <Title fontSize={"1.5rem"} text={title} />}
        </Box>
        <Box>{!leftTitle && <Title text={title} />}</Box>
        <Flex flex={1} justify={"flex-end"}>
          {rightNode}
        </Flex>
      </Flex>
    </chakra.header>
  );
};

export default Header;
