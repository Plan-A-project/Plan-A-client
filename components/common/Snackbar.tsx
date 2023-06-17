import { HStack, Text } from "@chakra-ui/react";

import Check from "../icons/Check";

export default function Snackbar({ content }: { content: string }) {
  return (
    <HStack
      p={6}
      boxShadow="xl"
      borderRadius="xl"
      pos="fixed"
      top={2}
      w="100%"
      zIndex="20"
      bg="white"
    >
      <Check />
      <Text fontWeight="bold">{content}</Text>
    </HStack>
  );
}
