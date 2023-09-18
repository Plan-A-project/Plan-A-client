import { Box, HStack, Stack } from "@chakra-ui/layout";
import { Button, Text } from "@chakra-ui/react";
import { AppContainer, Header } from "@/components/common";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import StatusContent from "@/components/admin/StatusContent";

import adminApis from "@/api/admin";

const MemberListWithStatus = () => {
  const [studentList, setStudentList] = useState<any>([]);
  const [companyList, setCompanyList] = useState<any>([]);

  const router = useRouter();
  const {
    query: { status },
  } = useRouter();
  const getMember = (list: any, status: string | any) => {
    return list.filter((el: { status: any }) => el.status === status);
  };
  useEffect(() => {
    async function getMemberList() {
      const memberList = (await adminApis.getMemberList()).data?.data.members;
      setStudentList(getMember(memberList, status));
    }
    getMemberList();
    console.log("afd", studentList);
  }, []);

  return (
    <Tabs isFitted variant="enclosed" colorScheme="blue" size={"md"}>
      <TabList mb="1em">
        <Tab>학생</Tab>
        <Tab>기업</Tab>
      </TabList>
      <HStack gap={4}>
        <Text>{`총 인원: ${studentList.length}`}</Text>
        <Text>{`상태: ${status}`}</Text>
      </HStack>
      <TabPanels>
        <TabPanel>
          <StatusContent data={studentList} />
        </TabPanel>
        <TabPanel>
          <StatusContent data={companyList} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default MemberListWithStatus;
