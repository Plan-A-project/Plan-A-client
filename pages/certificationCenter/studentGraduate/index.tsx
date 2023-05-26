import React, { useState } from "react";

import { Container, Flex, Stack, Text } from "@chakra-ui/layout";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

import CustomButton from "@/components/common/CustomButton";
import FileAttachmentInput from "@/components/common/FileAttachmentInput";
import CheckCircleIcon from "@/components/icons/CheckCircleIcon";
import Header from "@/pages/components/Header";
import PageLayout from "@/pages/components/Layout";

import CustomInput from "../../components/CustomInput";

const Index = () => {
  const [validation, setValidation] = useState(false);

  return (
    <PageLayout>
      <Header headingText="인증센터" />
      <Text fontSize={"20px"} fontWeight={600} my={"24px"} mx={"16px"}>
        재학생 / 졸업생
      </Text>
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
              // py={"10px"}
              _selected={{
                bg: "primary.50",
                color: "primary.500",
                textStyle: "subtitle2",
                paddingY: "10px",
              }}
            >
              이메일 인증
            </Tab>
            <Tab
              borderRadius={"12px"}
              color={"grey.600"}
              textStyle={"body2"}
              // py={"10px"}
              _selected={{
                bg: "primary.50",
                color: "primary.500",
                textStyle: "subtitle2",
                paddingY: "10px",
              }}
            >
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
                <Stack spacing={"16px"}>
                  <CustomInput
                    title="이메일"
                    label="email"
                    type="email"
                    errorMessage="이메일 형식에 맞게 입력해주세요."
                    placeholder="youremail@email.com"
                    setValidation={setValidation}
                  />
                  <CustomButton
                    title="인증하기"
                    disabled={!validation}
                    buttonStyle={"filled"}
                  />
                </Stack>
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
                      <CheckCircleIcon />
                      <Text fontSize={"14px"} fontWeight={400}>
                        휴대폰으로 찍은 이미지, 캡쳐 이미지 모두 가능합니다.
                      </Text>
                    </Flex>
                    <Flex justify={"flex-start"} align={"center"} gap={"6px"}>
                      <CheckCircleIcon />
                      <Text fontSize={"14px"} fontWeight={400}>
                        서류 제출 후 승인까지 최대 48시간이 소요될 수 있습니다.
                      </Text>
                    </Flex>
                  </Stack>
                </Stack>
                <FileAttachmentInput title="파일 첨부" />
              </Stack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </PageLayout>
  );
};

export default Index;
