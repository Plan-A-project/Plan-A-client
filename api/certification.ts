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
  sendEmailLink: methodFormat(async email => {
    const headers = getHeaders();
    await client.post(
      `${PATH}email/auth/send`,
      {
        email: email,
        request: {
          studentEmail: email,
        },
      },
      { headers },
    );
  }),
};

export default certificationApis;
