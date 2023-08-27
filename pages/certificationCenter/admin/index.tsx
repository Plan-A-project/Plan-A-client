import { useEffect, useState } from "react";

import { Box } from "@chakra-ui/layout";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

import adminApis from "@/api/admin";
import TableContent from "@/components/admin/TableContent";

const Admin = () => {
  const [studentList, setStudentList] = useState<any>([]);
  const [companyList, setCompanyList] = useState<any>([]);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await adminApis.getCertificateStudents();
      console.log(response);
      setStudentList(response.data?.data.studentVerifications);

      const response2 = await adminApis.getCertificateCompany();
      setCompanyList(response2.data?.data.studentVerifications);
      console.log(response2);
    };
    fetchApi();
  }, []);

  return (
    <Tabs isFitted variant="enclosed" colorScheme="blue" size={"md"}>
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
