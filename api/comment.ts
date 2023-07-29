import { methodFormat } from "@/utils/methodFormat";

import client from "./client";

const PATH = "api/";
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
    const response = await client.post(`${PATH}comments`, data, { headers });
    return response;
  }),
  deleteComment: methodFormat(async data => {
    const response = await client.delete(`${PATH}comments`, data);
    return response;
  }),
  modifyComment: methodFormat(async data => {
    const response = await client.patch(`${PATH}comments`, data);
    return response;
  }),
  getComment: methodFormat(async data => {
    const response = await client.get(`${PATH}posts/comments`, {
      params: data,
      headers,
    });
    return response;
  }),
};

export default commentApis;
