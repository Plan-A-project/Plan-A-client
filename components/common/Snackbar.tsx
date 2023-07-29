import { HStack, Text } from "@chakra-ui/react";

import CelebrateIcon from "../icons/celebrateIcon";

export default function Snackbar({
  content,
  isActive,
}: {
  content: string;
  isActive: boolean;
}) {
  // const transition = useTransition(isActive, {
  //   entering: { animation: `${slideIn} 0.5s ease-in-out forwards` },
  //   exiting: { animation: `${slideOut} 0.5s ease-in-out forwards` },
  // });
  return (
    <HStack
      // style={transition}
      p={6}
      boxShadow="xl"
      borderRadius="xl"
      pos="fixed"
      top={2}
      w="100%"
      zIndex="20"
      bg="white"
    >
      <CelebrateIcon />
      <Text textStyle={"subtitle2"}>{content}</Text>
    </HStack>
  );
}
