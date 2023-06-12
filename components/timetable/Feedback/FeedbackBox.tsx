import { Box, Flex, Text } from "@chakra-ui/react";

import StarFilled from "@/components/icons/StarFilled";

type IFeedback = {
  rating: number;
  content: string;
  date: string;
};

export default function FeedbackBox(feedback: IFeedback) {
  return (
    <Box p={2} borderBottom="1px" borderColor="gray.200">
      <Flex>
        <StarFilled />
        <Text>{feedback.rating} / 5</Text>
      </Flex>
      <Box>{feedback.content}</Box>
      <small>{feedback.date}</small>
    </Box>
  );
}
