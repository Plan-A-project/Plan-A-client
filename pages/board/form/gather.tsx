import React, { useEffect, useState } from "react";

import postApis from "@/api/post";
import CreatePostButton from "@/components/board/CreatePostButton";
import Title from "@/components/board/FormTitle";
import RecruitingPostForm from "@/components/board/RecruitingPostForm";
import AppContainer from "@/components/common/AppContainer";
import CaretLeft from "@/components/icons/CaretLeft";

export default function Gather() {
  // params: board type
  const [isBtnActive, setBtnActive] = useState(false);
  const [formData, setFormData] = useState({
    email: "kkjuyeon@gmail.com",
    requestDto: {
      title: "",
      main: "",
      enterprise: "",
      startDate: "",
      endDate: "",
    },
  });

  useEffect(() => {
    const {
      requestDto: { title, main, enterprise, startDate, endDate },
    } = formData;
    title && main && enterprise && startDate && endDate
      ? setBtnActive(true)
      : setBtnActive(false);
  }, [formData]);

  async function createPost() {
    const res = await postApis.initializePost({
      boardId: 4,
      postType: "notice",
    });
    console.log("res", res);
    // if (res.ok) // 성공 팝업 후 리다이렉트
    // 실패 팝업
  }

  console.log(formData);

  return (
    <AppContainer>
      <Title
        title="모집글 쓰기"
        left={<CaretLeft />}
        right={
          <CreatePostButton isActive={isBtnActive} handleClick={createPost} />
        }
      />
      <RecruitingPostForm formData={formData} setFormData={setFormData} />
    </AppContainer>
  );
}
