import React, { PropsWithChildren } from "react";

import {
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";

type BoardTabProps = PropsWithChildren<{
  tabs?: string[];
  tabIndex?: number;
  onTabChange?: (index: number) => void;
}>;

const defaultTabs = ["전체글", "인기글"];

const BoardTab: React.FC<BoardTabProps> = ({
  tabs,
  tabIndex,
  onTabChange,
  children,
}) => {
  const tabList = tabs || defaultTabs;
  const childrens = React.Children.toArray(children);

  return (
    <Tabs
      variant={"unstyled"}
      isFitted
      mt={6}
      index={tabIndex}
      onChange={onTabChange}
    >
      <TabList pb={1} borderColor={"primary"} h={9}>
        {tabList.map((tab, i) => (
          <Tab
            key={`${tab}-${i}`}
            sx={{
              flexDirection: "column",
              justifyContent: "space-between",
              padding: 0,
            }}
          >
            <Text size={"sm"} lineHeight={4}>
              {tab}
            </Text>
            <Image
              w={"100%"}
              sx={{
                "@media screen and (min-width: 440px)": {
                  transform: "scaleY(0.7)",
                },
                "@media screen and (min-width: 740px)": {
                  transform: "scaleY(0.5)",
                },
              }}
              src={`/assets/wave${i === tabIndex ? "-color" : ""}.svg`}
              alt=""
            />
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        {childrens.map((child, i) => (
          <TabPanel key={`${i}`} p={0}>
            {child}
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

export default BoardTab;
