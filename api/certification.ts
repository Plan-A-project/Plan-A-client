import { methodFormat } from "@/utils/methodFormat";

import client from "./client";

const PATH = "verification/";

const certificationApis = {
  sendEmailLink: methodFormat(async data => {
    await client.post(`${PATH}student/email`, data);
  }),
  verifyEmailCode: methodFormat(async code => {
    await client.get(`${PATH}student/email/${code}`);
  }),
  // 학생 유저가 재학증명서로 인증하는 api
  postFileToCertificate: methodFormat(async data => {
    await client.post(`${PATH}student/certificate`, data);
  }),
  postFileToCertificateCompany: methodFormat(async data => {
    await client.post(`${PATH}company/certificate`, data);
  }),
  getVerificationInfo: async () => {
    const response = await client.get("verification");
    return response;
  },
};

export default certificationApis;
