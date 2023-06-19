import { Grid, GridItem, HStack, Heading, Text } from "@chakra-ui/layout";

import Comment from "@/components/icons/Comment";
import Eyeballs from "@/components/icons/Eyeballs";
import HeartEmpty from "@/components/icons/HeartEmpty";

export default function Posting() {
  return (
    <Grid
      h="150px"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(2, 1fr)"
      p={5}
      borderBottom="1px solid grey"
    >
      <GridItem rowSpan={1} colSpan={2}>
        <Heading fontSize={"lg"}>제목이 들어갈 자리</Heading>
      </GridItem>
      <GridItem rowSpan={1} colSpan={1}>
        <small>2023.04.11</small>
      </GridItem>
      <GridItem rowSpan={1} colSpan={1}>
        <HStack>
          <HStack>
            <HeartEmpty />
            <Text>240</Text>
          </HStack>
          <HStack>
            <Comment />
            <Text>16</Text>
          </HStack>
          <HStack>
            <Eyeballs />
            <Text>486</Text>
          </HStack>
        </HStack>
      </GridItem>
    </Grid>
  );
}
