import { methodFormat } from "@/utils/methodFormat";

import client from "./client";

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
const commentApis = {
  postComment: methodFormat(async data => {
    const response = await client.post(`comments`, data, { headers });
    return response;
  }),
  deleteComment: methodFormat(async data => {
    const response = await client.delete(`comments`, data);
    return response;
  }),
  modifyComment: methodFormat(async data => {
    const response = await client.patch(`comments`, data);
    return response;
  }),
  getComment: methodFormat(async data => {
    const response = await client.get(`posts/comments`, {
      params: data,
      headers,
    });
    return response;
  }),
};

export default commentApis;
