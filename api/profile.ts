import { methodFormat } from "@/utils/methodFormat";

import client from "./client";

const PATH = "setting/";
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
const profileApis = {
  changeNickname: methodFormat(async newNickname => {
    const response = await client.post(
      `${PATH}nickname`,
      { newNickname },
      {
        headers,
      },
    );
    return response;
  }),
  changeProfileImage: methodFormat(async file => {
    const response = await client.post(
      `${PATH}profile/image`,
      { file },
      {
        headers,
      },
    );
    return response;
  }),
};

export default profileApis;
