import { HStack, Text, Image } from "@chakra-ui/react";

import { Icons } from "@/assets/icons";

export default function PopupTop({ content }: { content: string }) {
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
      <Image src={Icons.Check.src} alt="check icon" />
      <Text fontWeight="bold">{content}</Text>
    </HStack>
  );
}
