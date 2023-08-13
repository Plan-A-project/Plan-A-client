import { methodFormat } from "@/utils/methodFormat";

import client from "./client";

const PATH = "member/";

function getHeaders() {
  const AccessToken = window.localStorage.getItem("accessToken");
  const headers = {
    "Access-Token": AccessToken,
    "Content-Type": "application/json",
  };
  return headers;
}

const certificationApis = {
  sendEmailLink: methodFormat(async data => {
    const headers = getHeaders();
    await client.post(`${PATH}emails/student`, data, { headers });
  }),
  // 학생 유저가 재학증명서로 인증하는 api
  postFileToCertificate: methodFormat(async data => {
    const headers = getHeaders();
    await client.post(`${PATH}emails/student`, data, { headers });
  }),
};

export default certificationApis;
