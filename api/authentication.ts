import { methodFormat } from "@/utils/methodFormat";

import client from "./client";

const PATH = "auth/";
const baseURL = process.env.REACT_APP_API_URL;
const authApis = {
  validateEmail: methodFormat(async ({ email }) => {
    const response = await client.get(`${PATH}validate/email?email=${email}`);

    return response.data;
  }),
};

export default authApis;
