import { Flex, Text, Fade } from "@chakra-ui/react";
import { CelebrateIcon } from "../icons";

export default function Snackbar({
  content,
  isActive,
}: {
  content: string;
  isActive: boolean;
}) {
  return (
    <Fade in={true} transition={{ enter: { duration: 0.5 } }}>
      <Flex
        p={6}
        boxShadow="xl"
        borderRadius="xl"
        pos="fixed"
        top={2}
        w="90%"
        zIndex="20"
        align={"center"}
        left={"50%"}
        transform={"translateX(-50%)"}
        bg="white"
      >
        <CelebrateIcon />
        <Text textStyle={"subtitle2"}>{content}</Text>
      </Flex>
    </Fade>
  );
}
