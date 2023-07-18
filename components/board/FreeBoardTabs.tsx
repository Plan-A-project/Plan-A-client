import {
  ChakraProps,
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
  leftLabel: string;
  rightLabel: string;
} & ChakraProps;

const FreeBoardTab: React.FC<BoardTabProps> = ({
  leftTab,
  rightTab,
  leftLabel,
  rightLabel,
  ...props
}) => {
  return (
    <Tabs variant={"unstyled"} isFitted mt={6} {...props}>
      <TabList borderBottom={"2px solid"} borderColor={"gray.200"} pb={1}>
        <Tab
          _selected={{
            color: "primary.500",
            fontWeight: 600,
          }}
        >
          <Text size={"sm"} lineHeight={4}>
            {leftLabel}
          </Text>
        </Tab>
        <Tab
          _selected={{
            color: "primary.500",
            fontWeight: 600,
          }}
        >
          <Text size={"sm"} lineHeight={4}>
            {rightLabel}
          </Text>
        </Tab>
      </TabList>
      <TabIndicator
        mt={-0.5}
        height="2px"
        bg={"primary.500"}
        left={0}
        right={0}
      />
      <TabPanels mt={4}>
        <TabPanel p={0}>{leftTab}</TabPanel>
        <TabPanel p={0}>{rightTab}</TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default FreeBoardTab;
