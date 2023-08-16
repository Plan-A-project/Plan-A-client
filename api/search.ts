import { methodFormat } from "@/utils/methodFormat";

import client from "./client";

const PATH = "api/posts/";
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

const searchApis = {
  searchPosts: methodFormat(async keyword => {
    const response = await client.post(
      `${PATH}search`,
      { keyword: keyword, page: 1 },
      {
        headers,
      },
    );
    return response;
  }),
};

export default searchApis;
