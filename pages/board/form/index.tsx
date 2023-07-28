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
  IRecruitmentPostContent,
  recruitmentPostingContentAtom,
} from "@/state/atoms/posting/recruitmentPostingContentAtom";

// boardId & postID  둘 다 파라미터로 넘겨줌
// form & update 같이 (생성 & 업데이트 동시에)
export default function PostingForm() {
  const params = useSearchParams();
  const boardId = params.get("boardId") || "1"; // 있으면 업데이트 폼 없으면 생성 폼
  const postId = params.get("postId"); // 있으면 업데이트 폼 없으면 생성 폼
  const postType = params.get("postType") || "RECRUITMENT"; // 있으면 업데이트 폼 없으면 생성 폼
  // RECRUITMENT | ANNOUNCEMENT | NORMAL

  const [isBtnActive, setBtnActive] = useState(false);
  const [postContent, setPostContent] = useRecoilState(
    recruitmentPostingContentAtom,
  );
  const [isActivated, activateSnackbar, Snackbar] =
    useSnackbar("모집글을 작성하였습니다.");

  function dataURItoBlob(dataURI: string) {
    const byteString = atob(dataURI.split(",")[1]);
    const mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
  }

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
        body: {
          boardId: boardId,
          postType: postType,
          title: "",
          content: "",
          recruitment: {
            companyName: "",
            startDate: "",
            endDate: "",
          },
        },
      });
      if (res.ok) {
        // 뼈대 생성
        const resIntial = await postApis.initializePost({ body: postContent });

        if (resIntial.ok) {
          const imgBlobs = encodedImgLst.map(imgUri => dataURItoBlob(imgUri)); // img base64 -> blob 변환
          const resImg = await postApis.postImage({
            // 이미지 업로드
            postId,
            files: imgBlobs,
          });
          for (let i = 0; i < encodedImgLst.length; i++) {
            // 기존 base64 이미지 문자 -> s3 이미지 링크로 replace
            const replaceFrom = encodedImgLst[i];
            const replaceTo = resImg.data!.data[i];
            innerHTML.replace(replaceFrom, replaceTo);
          }
          const resUpdate = await postApis.deletePost({
            postId: resIntial.data!.data,
          });
          if (resUpdate.ok) {
            activateSnackbar();
            // router 이동
          } else {
            const resDelete = await postApis.deletePost({ postId });
            return <Box>글 생성에 실패하였습니다.</Box>;
          }
        } else {
          const resDelete = await postApis.deletePost({ postId });
          return <Box>글 생성에 실패하였습니다.</Box>;
        }
      }
    }
  }

  useEffect(() => {
    postContent.title && postContent.content && postContent.recruitment
      ? setBtnActive(true)
      : setBtnActive(false);
  }, [postContent]);

  useEffect(() => {
    setPostContent((prevData: IRecruitmentPostContent) => ({
      ...prevData,
      postType: postType ? parseInt(postType) : 0, // 새로운 title 값으로 업데이트
    }));
  }, []);

  const PAGE_TITLE: { [key: string]: string } = {
    RECRUITMENT: "모집글 쓰기",
    NORMAL: "일반글 쓰기",
    ANNOUNCEMENT: "공지글 쓰기",
  };

  return (
    <AppContainer>
      {isActivated && <Snackbar />}
      <FormTitle
        title={PAGE_TITLE[postType]}
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
