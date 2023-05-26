import { Container, Flex, Stack, Text } from "@chakra-ui/react";

import CheckCircleIcon from "@/components/icons/CheckCircleIcon";

import CertificationCategoryButton from "../components/CertificationCategoryButton";
import CustomTag from "../components/CustomTag";
import Header from "../components/Header";
import PageLayout from "../components/Layout";

const index = () => {
  return (
    <PageLayout>
      <Header headingText="인증 센터" />
      <Container mt={"16px"}>
        <Stack spacing={"16px"}>
          <Container
            h={"289px"}
            bg={"grey.50"}
            borderRadius={"24px"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"flex-start"}
            justifyContent={"center"}
            gap={"16px"}
          >
            <Text fontSize={"14px"}>인증을 하면 이런 걸 할 수 있어요!</Text>
            <Stack spacing={"14px"}>
              <CustomTag
                title="학생"
                background="primary.100"
                color="primary.500"
              />
              <Stack spacing={"8px"}>
                <Flex justify={"flex-start"} align={"center"} gap={"10px"}>
                  <CheckCircleIcon />
                  <Text textStyle={"subtitle2"} color={"grey.700"}>
                    찐 강의 후기 공유
                  </Text>
                </Flex>
                <Flex justify={"flex-start"} align={"center"} gap={"10px"}>
                  <CheckCircleIcon />
                  <Text textStyle={"subtitle2"} color={"grey.700"}>
                    내 시간표 관리 및 공유
                  </Text>
                </Flex>
                <Flex justify={"flex-start"} align={"center"} gap={"10px"}>
                  <CheckCircleIcon />
                  <Text textStyle={"subtitle2"} color={"grey.700"}>
                    모든 카테고리 게시글 열람
                  </Text>
                </Flex>
                <Flex justify={"flex-start"} align={"center"} gap={"10px"}>
                  <CheckCircleIcon />
                  <Text textStyle={"subtitle2"} color={"grey.700"}>
                    모든 카테고리 게시글 작성 및 수정
                  </Text>
                </Flex>
              </Stack>
            </Stack>
            <Stack spacing={"14px"}>
              <CustomTag title="기업" background="grey.100" color="grey.600" />
              <Stack spacing={"8px"}>
                <Flex justify={"flex-start"} align={"center"} gap={"10px"}>
                  <CheckCircleIcon />
                  <Text textStyle={"subtitle2"} color={"grey.700"}>
                    홍보용 카테고리 생성 및 수정 가능
                  </Text>
                </Flex>
              </Stack>
            </Stack>
          </Container>
          <CertificationCategoryButton
            title="예비 입학생"
            href="/certificationCenter/prospectiveStudent"
          />
          <CertificationCategoryButton
            title="재학생 / 졸업생"
            href="/certificationCenter/studentGraduate"
          />
          <CertificationCategoryButton
            title="기업"
            href="/certificationCenter/corporation"
          />
        </Stack>
      </Container>
    </PageLayout>
  );
};

export default index;
