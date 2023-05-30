import { TabPanel, Stack, StackDivider, Text } from "@chakra-ui/react";

import CustomTabs from "@/components/common/CustomTabs";
import Header from "@/pages/components/Header";
import PageLayout from "@/pages/components/Layout";
import MyComment from "@/pages/components/MyComment";
import MyPost from "@/pages/components/MyPost";

const index = () => {
  return (
    <PageLayout>
      <Header headingText="게시글 관리" />
      <CustomTabs menu1="내 게시글" menu2="내 댓글">
        <TabPanel p={0}>
          <Text textStyle={"caption1"} my={"16px"}>
            최신순
          </Text>
          <Stack divider={<StackDivider borderColor="grey.100" />}>
            <MyPost />
            <MyPost />
            <MyPost />
            <MyPost />
          </Stack>
        </TabPanel>
        <TabPanel p={0}>
          <Text textStyle={"caption1"} my={"16px"}>
            최신순
          </Text>
          <Stack divider={<StackDivider borderColor="grey.100" />}>
            <MyComment />
            <MyComment />
            <MyComment />
            <MyComment />
            <MyComment />
            <MyComment />
          </Stack>
        </TabPanel>
      </CustomTabs>
    </PageLayout>
  );
};

export default index;
