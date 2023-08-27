import { useEffect, useRef, useState } from "react";

import { Box, Flex, Text } from "@chakra-ui/layout";
import { Input } from "@chakra-ui/react";
import { Button, Stack } from "@chakra-ui/react";

import profileApis from "@/api/profile";
import { AppContainer, Header, Banner } from "@/components/common";
import Check from "@/components/icons/Check";
const Company = () => {
  const [fileURL, setFileURL] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [userInfo, setUserInfo] = useState<any>({});
  const handleFileChange = (e: any) => {
    // 파일 인스턴스
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      const localFileURL = URL.createObjectURL(file);
      setFileURL(localFileURL);
    }
  };
  const fileInput = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    const fetch = async () => {
      const response = await profileApis.getProfile();

      if (response.data && response.ok) {
        setUserInfo(response.data.data);
      }
    };
    fetch();
  }, []);
  const handleFileClick = () => {
    // Trigger the hidden file input's click event
    if (fileInput.current) {
      fileInput.current.click();
    }
  };
  const handleCertificate = async () => {
    // const response = certificationApis.postFileToCertificate({
    //   username: userInfo.username,
    //   file: fileURL,
    // });
    // router.push(`/certificationCenter/student/${userEmail}`);
  };
  return (
    <AppContainer>
      <Header back leftTitle title="인증센터" />
      <Text mt={"20px"} textStyle={"headline1"}>
        기업
      </Text>
      <Box>
        <Stack>
          <Stack mb={"48px"} spacing={"12px"} mt={"24px"}>
            <Text textStyle={"subtitle2"}>인증방법</Text>
            <Text textStyle={"body1"}>사업자등록증을 첨부해주세요.</Text>
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
              accept="image/*"
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
      {fileURL && (
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
        // onClick={handleCertificate}

        textStyle={"subtitle1"}
        h={"52px"}
        w={"full"}
        borderRadius={"16px"}
        // bg={!hasError ? "primary.500" : "grey.200"}
        // color={!hasError ? "background1" : "grey.500"}
        // isDisabled={hasError}
      >
        인증하기
      </Button>
    </AppContainer>
  );
};

export default Company;
