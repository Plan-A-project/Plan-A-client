import { useState, useRef, ChangeEvent } from "react";

import { Box, Stack } from "@chakra-ui/layout";
import { Input, Circle, Button } from "@chakra-ui/react";

import profileApis from "@/api/profile";
import { AppContainer, Header } from "@/components/common";
import CameraWithCircle from "@/components/icons/CameraWithCircle";
import ProfileChange from "@/components/icons/ProfileChange";
import UserInput from "@/components/signup/userInput";
import useInput from "@/hooks/useInput";
import { useRouter } from "next/router";

const ChangeProfile = () => {
  const [fileURL, setFileURL] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const router = useRouter();
  const {
    inputValues,
    errors,
    confirmInput,
    handleChange,
    setErrors,
    setConfirmInput,
  } = useInput();
  const inputProps = {
    label: "nickname",
    placeholder: "한글, 영어, 숫자 조합 가능 2~8자",
    title: "닉네임",
    type: "text",
    hasConfirmButton: true,
  };
  const fileInput = useRef<HTMLInputElement | null>(null);
  const checkFilled = inputValues.nickname || fileURL;
  const handleFileChange = (e: any) => {
    // 파일 인스턴스
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      setSelectedFile(file);
      const localFileURL = URL.createObjectURL(file);
      setFileURL(localFileURL);
    }
  };
  const handleFileClick = () => {
    // Trigger the hidden file input's click event
    if (fileInput.current) {
      fileInput.current.click();
    }
  };
  const handleModify = async () => {
    // 닉네임 변경 했으면 api 요청함
    if (inputValues.nickname && !errors.nickname) {
      const response = await profileApis.changeNickname(inputValues.nickname);
      if (response.ok) {
        alert("닉네임 변경이 완료되었습니다!");
      } else {
        alert("오류가 발생했습니다. 다시 시도해주세요.");
      }
    }
    // 프로필 사진 변경했으면 api 요청함
    if (fileURL) {
      const formData = new FormData();
      if (selectedFile) {
        formData.append("file", selectedFile);
        const response = await profileApis.changeProfileImage(formData);
        if (response.ok) {
          alert("프로필 사진 변경이 완료되었습니다!");
        } else {
          alert("오류가 발생했습니다. 다시 시도해주세요.");
        }
      }
    }
    router.back();
  };
  return (
    <AppContainer>
      <Header back leftTitle title="프로필 변경" />
      <Stack mt={12} align={"center"} gap={12}>
        <Input
          type="file"
          ref={fileInput}
          // accept="image/*"
          onChange={handleFileChange}
          style={{ display: "none" }} // Hide the file input element
        />
        <Box onClick={handleFileClick} position={"relative"}>
          <Circle
            size={"100px"}
            overflow={"hidden"}
            border={fileURL ? "2px solid var(--grey-grey-500, #9193A1)" : ""}
          >
            {fileURL ? (
              <img src={fileURL} alt="Uploaded Preview" width="100" />
            ) : (
              <ProfileChange />
            )}
          </Circle>
          <Box position={"absolute"} bottom={0} right={"2px"}>
            <CameraWithCircle />
          </Box>
        </Box>
        <UserInput
          key={"nickname"}
          {...inputProps}
          errors={errors}
          values={inputValues}
          handleChange={handleChange}
          handleErrors={setErrors}
          handleConfirm={setConfirmInput}
          confirmInput={confirmInput}
        />
        <Button
          onClick={handleModify}
          textStyle={"headline2"}
          height={"52px"}
          borderRadius={"16px"}
          bg={checkFilled ? "primary.500" : "grey.200"}
          color={checkFilled ? "background1" : "grey.500"}
          w={"full"}
        >
          저장
        </Button>
      </Stack>
    </AppContainer>
  );
};

export default ChangeProfile;
