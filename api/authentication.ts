import { methodFormat } from "@/utils/methodFormat";

import client from "./client";

const PATH = "auth/";

const authApis = {
  validateEmail: methodFormat(async ({ email }) => {
    const response = await client.get(`${PATH}validate/email?email=${email}`);
    return response;
  }),
  validateNickname: methodFormat(async ({ nickname }) => {
    const response = await client.get(
      `${PATH}validate/nickname?nickname=${nickname}`,
    );
    return response.data;
  }),
  studentSignup: methodFormat(async data => {
    await client.post(`${PATH}signup/student`, data);
  }),
  companySignup: methodFormat(async data => {
    await client.post(`${PATH}signup/company`, data);
  }),
  login: methodFormat(async data => {
    const response = await client.post(`${PATH}login`, data);
    return response;
  }),
};

export default authApis;
