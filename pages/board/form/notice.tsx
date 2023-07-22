import React, { useEffect, useState } from "react";

import { Box } from "@chakra-ui/layout";
import { useNavigate } from "react-router-dom";
import * as recoil from "recoil";

import postApis from "@/api/post";
import CreatePostButton from "@/components/board/CreatePostButton";
import FormTitle from "@/components/board/FormTitle";
import GeneralPostForm from "@/components/board/GeneralPostForm";
import AppContainer from "@/components/common/AppContainer";
import CaretLeft from "@/components/icons/CaretLeft";
import useSnackbar from "@/hooks/useSnackbar";
import { generalPostingContentAtom } from "@/state/atoms/posting/generalPostingContentAtom";

// 공지글과 동일한 폼을 가집니다
export default function Notice() {
  const [isBtnActive, setBtnActive] = useState(false);
  const [postContent, setPostContent] = recoil.useRecoilState(
    generalPostingContentAtom,
  );
  // const navigator = useNavigate();

  const [isActivated, activateSnackbar, Snackbar] =
    useSnackbar("공지글을 작성하였습니다.");

  useEffect(() => {
    async function createPost() {
      const res = await postApis.initializePost({
        boardId: 4, // url param으로 받아오기
        postType: "notice",
      });

      setPostContent(d => ({
        ...d,
        boardId: 4, // 익명 TODO: dynamic하게 변경
        postType: "notice", // 일반글
        body: { ...d.body, email: "kkjuyeon@gmail.com" },
      }));

      if (res.ok) {
        setPostContent(d => ({
          ...d,
          postId: parseInt(res.data?.data),
        }));
      } else {
        return <Box>포스팅 생성에 실패하였습니다. {res.message}</Box>;
      }
    }
    createPost();
  }, []);

  useEffect(() => {
    postContent.body.requestDto.title && postContent.body.requestDto.main
      ? setBtnActive(true)
      : setBtnActive(false);
  }, [postContent]);

  async function updatePost() {
    const res = await postApis.updatePost(postContent);
    if (res.ok) {
      activateSnackbar();
      setTimeout(() => {
        // navigator("/");
      }, 3000);
    }
  }

  return (
    <AppContainer>
      {isActivated && <Snackbar />}
      <FormTitle
        title={"공지글 쓰기"}
        left={<CaretLeft />}
        right={
          <CreatePostButton isActive={isBtnActive} handleClick={updatePost} />
        }
      />
      <GeneralPostForm
        postContent={postContent}
        setPostContent={setPostContent}
      />
    </AppContainer>
  );
}
