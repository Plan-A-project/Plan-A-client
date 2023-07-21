import React, { useEffect, useState } from "react";

import { useRecoilState } from "recoil";

import postApis from "@/api/post";
import CreatePostButton from "@/components/board/CreatePostButton";
import Title from "@/components/board/FormTitle";
import GeneralPostForm from "@/components/board/GeneralPostForm";
import AppContainer from "@/components/common/AppContainer";
import CaretLeft from "@/components/icons/CaretLeft";
import useSnackbar from "@/hooks/useSnackbar";
import { postContentAtom } from "@/state/atoms/posting/postContentAtom";

export default function Normal() {
  const [isBtnActive, setBtnActive] = useState(false);
  const [postContent, setPostContent] = useRecoilState(postContentAtom);

  const [isActivated, activateSnackbar, Snackbar] =
    useSnackbar("일반글을 작성하였습니다.");
  const [formData, setFormData] = useState({
    email: "kkjuyeon@gmail.com", // TODO: LS에거 꺼낸 값
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
      postType: "normal",
    });
    if (res.ok) {
      setPostContent(d => ({
        ...d,
        postId: parseInt(res.data?.data),
      }));
    }
  }

  return (
    <AppContainer>
      {isActivated && <Snackbar />}
      <Title
        title="글쓰기"
        left={<CaretLeft />}
        right={
          <CreatePostButton isActive={isBtnActive} handleClick={createPost} />
        }
      />
      <GeneralPostForm
        postContent={postContent}
        setPostContent={setPostContent}
      />
    </AppContainer>
  );
}
