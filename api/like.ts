import { methodFormat } from "@/utils/methodFormat";

import client from "./client";

const PATH = "api/likes/posts/";
function getHeaders() {
  let AccessToken;
  if (typeof window !== "undefined") {
    AccessToken = window.localStorage.getItem("accessToken");
  }
  const headers = {
    "Access-Token": AccessToken,
    "Content-Type": "application/json",
  };
  return headers;
}
const headers = getHeaders();
const likesApis = {
  postLike: methodFormat(async postId => {
    const response = await client.post(`${PATH}${postId}`, {
      headers,
    });
    return response;
  }),
  cancelLike: methodFormat(async postId => {
    const response = await client.delete(`${PATH}${postId}`, {
      headers,
    });
    return response;
  }),
};

export default likesApis;
