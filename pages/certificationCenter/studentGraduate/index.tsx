import React from "react";

import { CheckCircleIcon } from "@chakra-ui/icons";
import { Container, Flex, Stack, Text } from "@chakra-ui/layout";
import {
  Button,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";

import Header from "@/pages/components/Header";
import PageLayout from "@/pages/components/Layout";

const index = () => {
  return (
    <PageLayout>
      <Header headingText="인증센터" />
      <Text fontSize={"20px"} fontWeight={600} my={"24px"} mx={"16px"}>
        재학생 / 졸업생
      </Text>
      <Container mt={"16px"}>
        <Tabs isFitted isLazy variant="soft-rounded" colorScheme="blue">
          <TabList border={"1px solid grey"} borderRadius={"10px"} p={"6px"}>
            <Tab borderRadius={"8px"} color={"gray.400"}>
              이메일 인증
            </Tab>
            <Tab borderRadius={"8px"} color={"gray.400"}>
              증명서 인증
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel p={"0"}>
              <Stack>
                <Stack mb={"48px"} spacing={"12px"} mt={"24px"}>
                  <Text fontSize={"16px"} fontWeight={600}>
                    인증방법
                  </Text>
                  <Text fontSize={"16px"} fontWeight={400}>
                    학교 이메일 계정을 입력해주세요.
                  </Text>
                </Stack>
                {/* <CustomInput
                  title="이메일"
                  label="email"
                  type="email"
                  placeholder="youremail@email.com"
                /> */}
                <Button h={"52px"} mt={"16px"}>
                  인증하기
                </Button>
              </Stack>
            </TabPanel>
            <TabPanel p={"0"}>
              <Stack>
                <Stack mb={"48px"} spacing={"12px"} mt={"24px"}>
                  <Text fontSize={"16px"} fontWeight={600}>
                    인증방법
                  </Text>
                  <Text fontSize={"16px"} fontWeight={400}>
                    재학/졸업 증명서를 첨부해주세요.
                  </Text>
                  <Stack spacing={"4px"}>
                    <Flex justify={"flex-start"} align={"center"} gap={"6px"}>
                      <CheckCircleIcon color={"blue.300"} />
                      <Text fontSize={"14px"} fontWeight={400}>
                        휴대폰으로 찍은 이미지, 캡쳐 이미지 모두 가능합니다.
                      </Text>
                    </Flex>
                    <Flex justify={"flex-start"} align={"center"} gap={"6px"}>
                      <CheckCircleIcon color={"blue.300"} />
                      <Text fontSize={"14px"} fontWeight={400}>
                        서류 제출 후 승인까지 최대 48시간이 소요될 수 있습니다.
                      </Text>
                    </Flex>
                  </Stack>
                </Stack>
                <Stack spacing={"16px"}>
                  <Button
                    h={"52px"}
                    mt={"16px"}
                    border={"1px solid blue"}
                    bg={"transparent"}
                    color={"blue"}
                  >
                    파일첨부
                  </Button>
                  <Button h={"52px"} mt={"16px"}>
                    인증하기
                  </Button>
                </Stack>
              </Stack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </PageLayout>
  );
};

export default index;
