import { Box, Center, Stack, Text } from "@chakra-ui/layout";
import AppContainer from "./AppContainer";
import Header from "./Header";

type InfoProps = {
  content: string;
};
const InfoContent: React.FC<InfoProps> = ({ content }) => {
  return (
    <AppContainer>
      <Stack gap={12} justify={"center"}>
        <Box textAlign={"center"}>
          {/* <Text textStyle={"headline2"}>{studentEmail}</Text> */}
          <Text
            mt={4}
            textStyle={"body1"}
            lineHeight={10}
            fontSize={"18px"}
            fontWeight={700}
          >
            {content}
          </Text>
        </Box>
      </Stack>
    </AppContainer>
  );
};
export default InfoContent;
