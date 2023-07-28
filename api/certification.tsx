import { methodFormat } from "@/utils/methodFormat";

import client from "./client";

const PATH = "member/";

const certificationApis = {
  sendEmailLink: methodFormat(async email => {
    await client.post(`${PATH}student/auth/send`, {
      email,
      request: {
        studentEmail: "test@naver.com",
      },
    });
  }),
};

export default certificationApis;
