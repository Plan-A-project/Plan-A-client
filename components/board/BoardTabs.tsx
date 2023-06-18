import {
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";

type BoardTabProps = {
  leftTab: React.ReactNode;
  rightTab: React.ReactNode;
};

const BoardTab: React.FC<BoardTabProps> = ({ leftTab, rightTab }) => {
  return (
    <Tabs variant={"unstyled"} isFitted mt={6}>
      <TabList borderBottom={"2px solid"} borderColor={"gray.200"} pb={1}>
        <Tab>
          <Text size={"sm"} lineHeight={4}>
            전체글
          </Text>
        </Tab>
        <Tab>
          <Text size={"sm"} lineHeight={4}>
            인기글
          </Text>
        </Tab>
      </TabList>
      <TabIndicator mt={-0.5} height="2px" bg={"gray.600"} left={0} right={0} />
      <TabPanels>
        <TabPanel p={0}>{leftTab}</TabPanel>
        <TabPanel p={0}>{rightTab}</TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default BoardTab;
