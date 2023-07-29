import React, { useEffect, useState } from "react";

import { Box } from "@chakra-ui/layout";
import { useSearchParams } from "next/navigation";
import { useRecoilState } from "recoil";

import postApis from "@/api/post";
import CreatePostButton from "@/components/board/CreatePostButton";
import FormTitle from "@/components/board/FormTitle";
import GeneralPostForm from "@/components/board/GeneralPostForm";
import RecruitingPostForm from "@/components/board/RecruitingPostForm";
import AppContainer from "@/components/common/AppContainer";
import CaretLeft from "@/components/icons/CaretLeft";
import useSnackbar from "@/hooks/useSnackbar";
import {
  IPostContent,
  postingContentAtom,
} from "@/state/atoms/posting/postingAtom";
import { postingContentAtomRecruit } from "@/state/atoms/posting/postingAtomRecruit";

const PAGE_TITLE: { [key: string]: string } = {
  RECRUITMENT: "모집글",
  NORMAL: "일반글",
  ANNOUNCEMENT: "공지글",
};

// boardId & postID  둘 다 파라미터로 넘겨줌
// form & update 같이 (생성 & 업데이트 동시에)
// e.g. http://localhost:3000/board/form?boardId=4&postType=ANNOUNCEMENT
export default function PostingForm() {
  const params = useSearchParams();
  const boardId = params.get("boardId") || "4"; // 있으면 업데이트 폼 없으면 생성 폼
  const postId = params.get("postId") || "0"; // 있으면 업데이트 폼 없으면 생성 폼
  const postType = params.get("postType") || "NORMAL"; // 있으면 업데이트 폼 없으면 생성 폼
  // RECRUITMENT | ANNOUNCEMENT | NORMAL

  const [isBtnActive, setBtnActive] = useState(false);
  const [postContent, setPostContent] = useRecoilState(
    postType === "RECRUITMENT" ? postingContentAtomRecruit : postingContentAtom,
  );
  const [isActivated, activateSnackbar, Snackbar] = useSnackbar(
    `${PAGE_TITLE[postType]}을 작성하였습니다.`,
  );

  async function createPost() {
    const innerHTML = document.querySelector("#contentEditable")!.innerHTML;
    const imgSrcPattern = /data:[^"]+/g; // 이미지 base64 추출
    const encodedImgLst = innerHTML.match(imgSrcPattern) || [];

    if (!encodedImgLst.length) {
      // 이미지 무
      const res = await postApis.initializePost({ body: postContent });
      if (res.ok) {
        activateSnackbar();
        // router 이동
      } else {
        return <Box>글 생성에 실패하였습니다.</Box>;
      }
    } else {
      // 이미지 유
      const res = await postApis.initializePost({
        // 뼈대 생성 + 포스팅 생성
        body: { ...postContent, content: "임시 내용" },
      });
      await setPostContent((prevData: IPostContent) => ({
        ...prevData,
        postId: res.data!.data, // postId 업데이트
      }));

      if (res.ok) {
        try {
          // 뼈대 생성
          const resImg = await postApis.postImage({
            // 이미지 업로드
            postId: res.data!.data,
            files: encodedImgLst,
          });
          const imgUrls = resImg.data || [];
          let newInnerHTML = innerHTML;
          for (let i = 0; i < imgUrls.length; i++) {
            // 기존 base64 이미지 문자 -> s3 이미지 링크로 replace
            const replaceFrom = encodedImgLst[i];
            const replaceTo = imgUrls[i];
            newInnerHTML = newInnerHTML.replace(replaceFrom, replaceTo);
          }
          setPostContent((prevData: IPostContent) => ({
            ...prevData,
            content: newInnerHTML, // 새로운 title 값으로 업데이트
          }));
          const resUpdate = await postApis.updatePost({ body: postContent });
          activateSnackbar();
          // router 이동
        } catch (e) {
          const resDelete = await postApis.deletePost({
            postId: postContent.postId,
          });
          return <Box>글 생성에 실패하였습니다.</Box>;
        }
      }
    }
  }

  useEffect(() => {
    postContent.title && postContent.content
      ? setBtnActive(true)
      : setBtnActive(false);
  }, [postContent]);

  useEffect(() => {
    setPostContent((prevData: IPostContent) => ({
      ...prevData,
      postId: parseInt(postId),
      boardId: parseInt(boardId),
      postType: postType,
    }));
  }, []);

  return (
    <AppContainer>
      {isActivated && <Snackbar />}
      <FormTitle
        title={`${PAGE_TITLE[postType]} 쓰기`}
        left={<CaretLeft />}
        right={
          <CreatePostButton isActive={isBtnActive} handleClick={createPost} />
        }
      />
      {postType === "RECRUITMENT" && (
        <RecruitingPostForm
          postId={postId ? parseInt(postId) : 0}
          boardId={boardId ? parseInt(boardId) : 0}
          postContent={postContent}
          setPostContent={setPostContent}
        />
      )}
      {postType === "NORMAL" && (
        <GeneralPostForm
          postId={postId ? parseInt(postId) : 0}
          boardId={boardId ? parseInt(boardId) : 0}
          postContent={postContent}
          setPostContent={setPostContent}
        />
      )}
      {postType === "ANNOUNCEMENT" && (
        <GeneralPostForm
          postId={postId ? parseInt(postId) : 0}
          boardId={boardId ? parseInt(boardId) : 0}
          postContent={postContent}
          setPostContent={setPostContent}
        />
      )}
    </AppContainer>
  );
}
