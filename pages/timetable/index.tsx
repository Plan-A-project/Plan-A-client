import { AppContainer } from "@/components/common";
import Navbar from "@/components/layout/Navbar";
import WaitingTimeTable from "@/components/icons/WaitingTimeTable";
import { Stack, Text } from "@chakra-ui/layout";

const TimeTable = () => {
  return (
    <AppContainer>
      <Navbar currentTab="timeTable" />
      <Stack gap={10} align={"center"} h={"90vh"} justify={"center"}>
        <WaitingTimeTable />
        <Text textStyle={"headline2"} fontWeight={600} lineHeight={7}>
          열심히 준비중이에요.
          <br />
          조금만 기다려주세요💙
        </Text>
      </Stack>
    </AppContainer>
  );
};

export default TimeTable;
