import { methodFormat } from "@/utils/methodFormat";

import client from "./client";

function getPostApiHeaders() {
  const AccessToken = window.localStorage.getItem("accessToken");
  const headers = {
    "Access-Token": AccessToken,
    "Content-Type": "application/json",
  };
  return headers;
}

const postApis = {
  // 포스팅 뼈대 생성
  initializePost: methodFormat(async ({ boardId, postType }) => {
    const headers = getPostApiHeaders();
    const response = await client.post(
      `/board/${boardId}/type/${postType}`,
      {},
      { headers },
    );
    // debugger;
    return response;
  }),
  // 이미지 업로드
  postImage: methodFormat(async ({ postId, files }) => {
    const headers = getPostApiHeaders();
    const response = await client.post(
      `post/${postId}/image`,
      { file: files },
      { headers },
    );
    return response;
  }),
  // 포스팅 작성 & 수정
  updatePost: methodFormat(async ({ boardId, postType, postId, body }) => {
    const headers = getPostApiHeaders();
    const response = await client.post(
      `board/${boardId}/${postType}/${postId}`,
      body,
      { headers },
    );
    return response;
  }),
  // 포스팅 조회
  readPost: methodFormat(async ({ boardId, postId }) => {
    const headers = getPostApiHeaders();
    const response = await client.get(`/board/${boardId}/post/${postId}`, {
      headers,
    });
    return response;
  }),
  // 포스팅 삭제
  deletPost: methodFormat(async ({ boardId, postId }) => {
    const headers = getPostApiHeaders();
    const response = await client.delete(`/board/${boardId}/post/${postId}`, {
      headers,
    });
    return response;
  }),
};

export default postApis;
