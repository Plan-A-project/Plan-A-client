import { methodFormat } from "@/utils/methodFormat";

import client from "./client";

const adminApis = {
  getCertificateList: methodFormat(async page => {
    const response = await client.get(
      `admin/certificate/members/student?page=${page}`,
    );
    return response;
  }),
};

export default adminApis;
