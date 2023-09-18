import { useEffect, useState } from "react";

import { Box, HStack, Stack } from "@chakra-ui/layout";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
} from "@chakra-ui/react";

import adminApis from "@/api/admin";
import TableContent from "@/components/admin/TableContent";
import { useRouter } from "next/router";

const Admin = () => {
  const [studentList, setStudentList] = useState<any>([]);
  const [companyList, setCompanyList] = useState<any>([]);
  const [totalUser, setTotalUser] = useState<number>(0);
  const router = useRouter();
  useEffect(() => {
    const fetchApi = async () => {
      const response = await adminApis.getCertificateStudents();
      setStudentList(response.data?.data.studentVerifications);
      const currentDate = new Date();

      // 현재 날짜에서 1일(24시간)을 빼줍니다.
      const oneDayInMillis = 24 * 60 * 60 * 1000; // 1일의 밀리초 수
      const newDateInMillis = currentDate.getTime() - oneDayInMillis;

      // 새로운 Date 객체를 생성합니다.
      const newDate = new Date(currentDate);
      const response3 = await adminApis.getMemberList("2023-09-17T00:00:00");
      console.log(1234, response3);
      setTotalUser(response3.data?.data.members.length);
      const response2 = await adminApis.getCertificateCompany();
      setCompanyList(response2.data?.data.studentVerifications);
      localStorage.setItem("certComplt", "true");
      localStorage.setItem("certComplt2", "true");
    };
    fetchApi();
  }, []);

  return (
    <Tabs isFitted variant="enclosed" colorScheme="blue" size={"md"}>
      <HStack>
        <Button
          onClick={() => router.push("/certificationCenter/admin/NOT_STARTED")}
          colorScheme="teal"
        >
          미인증 유저
        </Button>
        <Button
          onClick={() => router.push("/certificationCenter/admin/PENDING")}
          colorScheme="green"
        >
          승인 대기 유저
        </Button>
        <Button
          onClick={() => router.push("/certificationCenter/admin/SUCCESS")}
          colorScheme="green"
        >
          인증 완료 유저
        </Button>
        <Button
          onClick={() => router.push("/certificationCenter/admin/FAILED")}
          colorScheme="green"
        >
          인증 실패 유저
        </Button>
      </HStack>
      <Box>{totalUser}</Box>
      <TabList mb="1em">
        <Tab>학생</Tab>
        <Tab>기업</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <TableContent data={studentList} />
        </TabPanel>
        <TabPanel>
          <TableContent data={companyList} type="기업" />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default Admin;
