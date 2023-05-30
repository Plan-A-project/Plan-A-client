import React from "react";

import { Container } from "@chakra-ui/layout";
import { Tab, TabList, TabPanels, Tabs } from "@chakra-ui/react";

interface CustomTabsProps {
  menu1: string;
  menu2: string;
  children: React.ReactNode;
}
const CustomTabs = ({ menu1, menu2, children }: CustomTabsProps) => {
  return (
    <Container mt={"16px"}>
      <Tabs isFitted isLazy variant="soft-rounded">
        <TabList
          borderWidth={"1px"}
          borderStyle={"solid"}
          borderColor={"grey.300"}
          borderRadius={"16px"}
          p={"4px"}
        >
          <Tab
            borderRadius={"12px"}
            color={"grey.600"}
            textStyle={"body2"}
            _selected={{
              bg: "primary.50",
              color: "primary.500",
              textStyle: "subtitle2",
              paddingY: "10px",
            }}
          >
            {menu1}
          </Tab>
          <Tab
            borderRadius={"12px"}
            color={"grey.600"}
            textStyle={"body2"}
            _selected={{
              bg: "primary.50",
              color: "primary.500",
              textStyle: "subtitle2",
              paddingY: "10px",
            }}
          >
            {menu2}
          </Tab>
        </TabList>
        <TabPanels>{children}</TabPanels>
      </Tabs>
    </Container>
  );
};

export default CustomTabs;
