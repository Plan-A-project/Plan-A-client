import { useEffect, useState } from "react";

import { Box } from "@chakra-ui/layout";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

import adminApis from "@/api/admin";
import TableContent from "@/components/admin/TableContent";

const Admin = () => {
  const [studentList, setStudentList] = useState<any>([]);
  const [companyList, setCompanyList] = useState<any>([]);
  const [totalUser, setTotalUser] = useState<number>(0);
  useEffect(() => {
    const fetchApi = async () => {
      const response = await adminApis.getCertificateStudents();
      setStudentList(response.data?.data.studentVerifications);
      const response3 = await adminApis.getMemberList();
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
