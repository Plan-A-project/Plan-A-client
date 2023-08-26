import { methodFormat } from "@/utils/methodFormat";

import client from "./client";

function getPostingApiHeaders() {
  // const AccessToken = window.localStorage.getItem("accessToken");
  const headers = {
    // "Access-Token": AccessToken,
    // Cookie: `${document.cookie}; Path=/; HttpOnly;`,
    "Content-Type": "application/json",
  };
  return headers;
}

function postPostingApiHeaders() {
  // const AccessToken = window.localStorage.getItem("accessToken");
  const headers = {
    // "Access-Token": AccessToken,
    // Cookie: `${document.cookie}; Path=/; HttpOnly;`,
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
    const headers = postPostingApiHeaders();
    const response = await client.post(`/posts/${postId}/images`, formData, {
      headers,
    });
    return response;
  }),

  // 포스팅 뼈대 생성
  initializePost: methodFormat(async ({ postType, body }) => {
    const headers = getPostingApiHeaders();
    switch (postType) {
      case "NORMAL": {
        const response = await client.post(`/posts/normal`, body, {
          headers,
        });
        return response;
      }
      case "ANNOUNCEMENT": {
        const _body = { title: body.title, content: body.content };
        const response = await client.post(`/posts/normal`, body, {
          headers,
        });
        return response;
      }
      case "RECRUITMENT": {
        const response = await client.post(`/posts/recruitment`, body, {
          headers,
        });
        return response;
      }
    }
  }),

  // 포스팅 작성 & 수정
  updatePost: methodFormat(async ({ postType, body }) => {
    const headers = getPostingApiHeaders();
    debugger;
    switch (postType) {
      case "NORMAL": {
        const response = await client.patch(`/posts/normal`, body, {
          headers,
        });
        return response;
      }
      case "ANNOUNCEMENT": {
        const response = await client.patch(`/posts/normal`, body, {
          headers,
        });
        return response;
      }
      case "RECRUITMENT": {
        const response = await client.patch(`/posts/recruitment`, body, {
          headers,
        });
        return response;
      }
    }
  }),

  // 포스팅 조회
  readPost: methodFormat(async ({ postId }) => {
    const headers = getPostingApiHeaders();
    const response = await client.get(`/posts/${postId}`, {
      headers,
    });
    return response;
  }),

  // 포스팅 삭제
  deletePost: methodFormat(async ({ postId }) => {
    const headers = getPostingApiHeaders();
    const response = await client.delete(`/posts/${postId}`, { headers });
    return response;
  }),

  // 최초 이용약관 동의
  agreePolicy: methodFormat(async () => {
    const headers = getPostingApiHeaders();
    console.log(22, headers);
    const response = await client.post(`/posts/policy`, { headers });
    console.log(3232, response);
    return response;
  }),
  // 최초 이용약관 동의 여부 확인
  checkAgree: methodFormat(async () => {
    const headers = getPostingApiHeaders();
    const response = await client.get(`/posts/policy`, { headers });
    return response;
  }),
};

export default postApis;
