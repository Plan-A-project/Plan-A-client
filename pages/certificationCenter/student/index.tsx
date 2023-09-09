import React, { useState, useRef, useEffect } from "react";

import { Box, Flex, Stack, Text } from "@chakra-ui/layout";
import { Button, Input } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { IoCloseCircleOutline } from "react-icons/io5";

import certificationApis from "@/api/certification";
import profileApis from "@/api/profile";
import {
  AppContainer,
  Header,
  ToggleTab,
  UserInput,
  Banner,
} from "@/components/common";
import Check from "@/components/icons/Check";

const StudentCertification = () => {
  const [selectedTabNumber, setSelectedTabNumber] = useState(1);
  const [userEmail, setUserEmail] = useState("");
  const [fileURL, setFileURL] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [userInfo, setUserInfo] = useState<any>({});
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const router = useRouter();
  const checkEmailFormat = (email: string) =>
    /fudan\.edu\.cn$/.test(email) ? false : true;

  // 파일 첨부 시 파일 정보 저장
  const handleFileChange = (e: any) => {
    // 파일 인스턴스
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setFileName(file.name);
      const localFileURL = URL.createObjectURL(file);
      setFileURL(localFileURL);
    }
  };
  useEffect(() => {
    const fetch = async () => {
      const response = await profileApis.getProfile();

      if (response.data && response.ok) {
        setUserInfo(response.data.data);
      }
    };
    fetch();
  }, []);
  const hasError = checkEmailFormat(userEmail) && userEmail ? true : false;
  const fileInput = useRef<HTMLInputElement | null>(null);
  const handleFileClick = () => {
    // Trigger the hidden file input's click event
    if (fileInput.current) {
      fileInput.current.click();
    }
  };
  const handleCertificate = async () => {
    if (selectedTabNumber) {
      const response = await certificationApis.sendEmailLink({
        universityEmail: userEmail,
      });
      if (response.ok) {
        router.push(`/certificationCenter/student/${userEmail}`);
      }

      if (!response.ok) {
        console.log(response);
        alert(`${response.response.data.message}`);
      }
    }
    if (!selectedTabNumber) {
      const formData = new FormData();
      if (selectedFile) {
        formData.append("file", selectedFile);
        const response =
          await certificationApis.postFileToCertificate(formData);
        if (response.ok) {
          router.push("/certificationCenter/requestComplete");
        }
      }
    }
    // router.push(`/certificationCenter/student/${userEmail}`);
  };
  return (
    <AppContainer>
      <Header back leftTitle title="인증센터" />
      <Text textStyle={"headline1"} my={"24px"}>
        학생
      </Text>
      <Box mt={"16px"}>
        <ToggleTab
          activatedTab={selectedTabNumber}
          setActivatedTab={setSelectedTabNumber}
          firstContent="이메일 인증"
          secondContent="증명서 인증"
        />
        {!selectedTabNumber || (
          <Box>
            <Stack>
              <Stack mb={"48px"} spacing={"12px"} mt={"24px"}>
                <Text textStyle={"subtitle2"}>인증방법</Text>
                <Text textStyle={"body1"}>
                  학교 이메일 계정을 입력해주세요.
                </Text>
              </Stack>
              <UserInput
                handleChange={setUserEmail}
                label={"email"}
                placeholder={"12345678910@fudan.edu.cn"}
                title={"이메일"}
                type={"text"}
              />
              {hasError && (
                <Flex align={"center"}>
                  <IoCloseCircleOutline
                    color="#F90B66"
                    style={{ marginRight: "6px" }}
                  />
                  <Text textStyle={"caption2"} color={"#F90B66"}>
                    복단대학교 이메일 주소를 입력해주세요.
                  </Text>
                </Flex>
              )}
            </Stack>
          </Box>
        )}
        {!selectedTabNumber ? (
          <Box>
            <Stack>
              <Stack mb={"48px"} spacing={"12px"} mt={"24px"}>
                <Text textStyle={"subtitle2"}>인증방법</Text>
                <Text textStyle={"subtitle2"}>재학생/졸업생</Text>
                <Text textStyle={"body1"}>
                  재학/졸업 증명서를 첨부해주세요.
                </Text>
                <Text textStyle={"subtitle2"}>예비 입학생</Text>
                <Text textStyle={"body1"}>
                  합격 이메일 또는 입학 증명서를 첨부해주세요.
                </Text>
                <Stack spacing={"4px"}>
                  <Flex justify={"flex-start"} align={"center"} gap={"6px"}>
                    <Check />
                    <Text textStyle={"body3"}>
                      휴대폰으로 찍은 이미지, 캡쳐 이미지 모두 가능합니다.
                    </Text>
                  </Flex>
                  <Flex justify={"flex-start"} align={"center"} gap={"6px"}>
                    <Check />
                    <Text textStyle={"body3"}>
                      서류 제출 후 승인까지 최대 48시간이 소요될 수 있습니다.
                    </Text>
                  </Flex>
                </Stack>
              </Stack>
              <Stack spacing={"16px"}>
                <Input
                  type="file"
                  ref={fileInput}
                  // accept="image/*"
                  onChange={handleFileChange}
                  style={{ display: "none" }} // Hide the file input element
                />
                <Banner onClick={handleFileClick}>
                  <Banner.TextBanner
                    borderRadius={"16px"}
                    h={"52px"}
                    border={"1px solid #3F52E4"}
                    icon
                    iconForward
                    textCenter
                    color={"primary.500"}
                    text="파일 첨부"
                  />
                </Banner>
              </Stack>
            </Stack>
          </Box>
        ) : (
          ""
        )}
        {fileURL && !selectedTabNumber && (
          <Flex flexDir="column" alignItems="flex-start">
            <Text py={4} textStyle={"caption1"}>
              첨부된 파일
            </Text>
            <Flex align={"center"}>
              <img src={fileURL} alt="Uploaded Preview" width="56" />
              <Text pl={4} textStyle={"caption2"}>
                {fileName}
              </Text>
            </Flex>
          </Flex>
        )}

        <Button
          onClick={handleCertificate}
          mt={4}
          textStyle={"subtitle1"}
          h={"52px"}
          w={"full"}
          borderRadius={"16px"}
          bg={!hasError ? "primary.500" : "grey.200"}
          color={!hasError ? "background1" : "grey.500"}
          // isDisabled={hasError}
        >
          인증하기
        </Button>
      </Box>
    </AppContainer>
  );
};

export default StudentCertification;
