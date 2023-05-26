import { Icons } from "@/assets/icons";
import { Box, Flex, Text, Image } from "@chakra-ui/react";

type IFeedback = {
  rating: number;
  content: string;
  date: string;
};

export default function FeedbackBox(feedback: IFeedback) {
  return (
    <Box p={2} borderBottom="1px" borderColor="gray.200">
      <Flex>
        <Image src={Icons.Star.src} alt="rating icon" />
        <Text>{feedback.rating} / 5</Text>
      </Flex>
      <Box>{feedback.content}</Box>
      <small>{feedback.date}</small>
    </Box>
  );
}
