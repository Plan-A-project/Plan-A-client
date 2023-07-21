import React, { useEffect, useState } from "react";

import postApis from "@/api/post";
import CreatePostButton from "@/components/board/CreatePostButton";
import Title from "@/components/board/FormTitle";
import GeneralPostForm from "@/components/board/GeneralPostForm";
import AppContainer from "@/components/common/AppContainer";
import CaretLeft from "@/components/icons/CaretLeft";
import { IPostContent } from "@/state/atoms/posting/postContentAtom";

export default function Notice() {
  // params: board type
  const [isBtnActive, setBtnActive] = useState(false);
  const [formData, setFormData] = useState<IPostContent>({
    email: "kkjuyeon@gmail.com",
    requestDto: {
      title: "",
      main: "",
    },
  });

  useEffect(() => {
    formData.requestDto.title && formData.requestDto.main
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

  return (
    <AppContainer>
      <Title
        title="공지글 쓰기"
        left={<CaretLeft />}
        right={
          <CreatePostButton isActive={isBtnActive} handleClick={createPost} />
        }
      />
      <GeneralPostForm postContent={formData} setPostContent={setFormData} />
    </AppContainer>
  );
}
