import { methodFormat } from "@/utils/methodFormat";

import client from "./client";

const PATH = "api/";

const authApis = {
  validateEmail: methodFormat(async ({ email }) => {
    const response = await client.get(
      `${PATH}auth/signup/validate/username?username=${email}`,
    );
    return response;
  }),
  validateNickname: methodFormat(async ({ nickname }) => {
    const response = await client.get(
      `${PATH}auth/signup/validate/nickname?nickname=${nickname}`,
    );
    return response.data;
  }),
  studentSignup: methodFormat(async data => {
    await client.post(`${PATH}auth/signup/student`, data);
  }),
  companySignup: methodFormat(async data => {
    await client.post(`${PATH}auth/signup/company`, data);
  }),
  login: methodFormat(async data => {
    const response = await client.post(`auth/login`, data);
    return response;
  }),
  reIssue: methodFormat(async data => {
    const response = await client.post(`${PATH}reissue`, {
      headers: {
        "Access-Token": data,
      },
    });
    return response;
  }),
};

export default authApis;
