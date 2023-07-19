import { methodFormat } from "@/utils/methodFormat";

import client from "./client";

const postApis = {
  validateEmail: methodFormat(async ({ email }) => {
    const response = await client.get(`/validate/email?email=${email}`);

    return response.data;
  }),
};

export default postApis;
