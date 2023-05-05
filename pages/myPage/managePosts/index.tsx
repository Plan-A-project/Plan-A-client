import Header from "@/pages/components/Header";
import PageLayout from "@/pages/components/Layout";
import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Container,
  Stack,
  Tag,
  Heading,
  StackDivider,
  Flex,
  Text,
  Button,
  Image,
  Icon,
} from "@chakra-ui/react";
import Link from "next/link";
import { SlHeart } from "react-icons/sl";
import { BsChatRightText } from "react-icons/bs";
import MyPost from "@/pages/components/MyPost";
import MyComment from "@/pages/components/MyComment";

const index = () => {
  return (
    <PageLayout>
      <Header headingText="게시글 관리" />
      <Container>
        <Tabs isFitted isLazy variant="soft-rounded" colorScheme="blue">
          <TabList border={"1px solid grey"} borderRadius={"10px"} p={"6px"}>
            <Tab borderRadius={"8px"}>내 게시글</Tab>
            <Tab borderRadius={"8px"}>내 댓글</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Stack divider={<StackDivider borderColor="gray.200" />}>
                <MyPost />
                <MyPost />
                <MyPost />
                <MyPost />
              </Stack>
            </TabPanel>
            <TabPanel>
              <MyComment />
              <MyComment />
              <MyComment />
              <MyComment />
              <MyComment />
              <MyComment />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </PageLayout>
  );
};

export default index;
