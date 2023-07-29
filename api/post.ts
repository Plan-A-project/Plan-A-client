import { methodFormat } from "@/utils/methodFormat";

import client from "./client";

function getPostingApiHeaders() {
  const AccessToken = window.localStorage.getItem("accessToken");
  const headers = {
    "Access-Token": AccessToken,
    "Content-Type": "application/json",
  };
  return headers;
}

function postPostingApiHeaders() {
  const AccessToken = window.localStorage.getItem("accessToken");
  const headers = {
    "Access-Token": AccessToken,
    "Content-Type": "multipart/form-data",
  };
  return headers;
}

function dataURLtoBlob(dataurl: string) {
  const arr = dataurl.split(",");
  const mime = arr[0].match(/:(.*?);/)?.[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new Blob([u8arr], { type: mime });
}

function dataURLtoFile(dataurl: string, fileName: string) {
  const arr = dataurl.split(",");
  const mime = arr[0].match(/:(.*?);/)?.[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], fileName, { type: mime });
}

function addBase64ImagesToFormData(base64Images: any, formData: any) {
  base64Images.forEach((base64ImageData: any, index: number) => {
    const fileName = `example${index + 1}.jpeg`; // 파일 이름을 적절하게 설정

    const file = dataURLtoFile(base64ImageData, fileName);
    formData.append("multipartFiles", file);
  });
}

const postApis = {
  // 이미지 업로드
  postImage: methodFormat(async ({ postId, files }) => {
    const formData = new FormData();
    addBase64ImagesToFormData(files, formData);

    const headers = new Headers();
    headers.append(
      "Access-Token",
      window.localStorage.getItem("accessToken") as string,
    );

    const requestOptions = {
      method: "POST",
      headers: headers,
      body: formData,
    };

    // fetch로 이미지 업로드 요청 보내기
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}api/posts/${postId}/images`,
      requestOptions,
    );
    return response.json();
  }),
  // // 포스팅 뼈대 생성
  initializePost: methodFormat(async ({ body }) => {
    console.log(body);
    const headers = getPostingApiHeaders();
    const response = await client.post(`/api/posts`, body, { headers });
    return response;
  }),
  // 포스팅 작성 & 수정
  updatePost: methodFormat(async ({ body }) => {
    debugger;
    const headers = getPostingApiHeaders();
    const response = await client.patch(`/api/posts`, body, { headers });
    return response;
  }),
  // 포스팅 조회
  readPost: methodFormat(async ({ postId }) => {
    const headers = getPostingApiHeaders();
    const response = await client.get(`/api/posts?postId=${postId}`, {
      headers,
    });
    return response;
  }),
  // 포스팅 삭제
  deletePost: methodFormat(async ({ postId }) => {
    const headers = getPostingApiHeaders();
    const response = await client.delete(`/api/posts/${postId}`, { headers });
    return response;
  }),
};

export default postApis;
