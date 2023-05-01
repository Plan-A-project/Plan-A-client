import { Box, Button, Flex, Text, chakra } from "@chakra-ui/react";
import Image from "next/image";

type TitleProps = {
  text: React.ReactNode;
};

const Title: React.FC<TitleProps> = ({ text }) => {
  return (
    <Text fontWeight={"semibold"} fontSize={"xl"} lineHeight={6}>
      {text}
    </Text>
  );
};

type HeaderProps = {
  title: string;
  onBackClick?: () => void;
  leftTitle?: boolean;
  rightNode?: React.ReactNode;
};

const Header: React.FC<HeaderProps> = ({
  title,
  onBackClick,
  leftTitle,
  rightNode,
}) => {
  return (
    <chakra.header pos={"sticky"} top={0} left={0}>
      <Flex justify={"center"} height={10} align={"center"}>
        <Box flex={1}>
          {onBackClick && (
            <Button variant={"unstyled"} minW={6} w={6} h={6} mr={2}>
              <Image
                src="./assets/back.svg"
                width={10}
                height={20}
                alt={"alt"}
                style={{
                  objectFit: "contain",
                  width: 10,
                  height: 20,
                  margin: "0 auto",
                }}
              />
            </Button>
          )}
          {leftTitle && <Title text={title} />}
        </Box>
        <Box>{!leftTitle && <Title text={title} />}</Box>
        <Box flex={1} textAlign={"right"}>
          {rightNode}
        </Box>
      </Flex>
    </chakra.header>
  );
};

export default Header;
