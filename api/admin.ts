import { methodFormat } from "@/utils/methodFormat";

import client from "./client";

const adminApis = {
  getCertificateStudents: methodFormat(async () => {
    const response = await client.get(`admin/certificate/members/student`);
    return response;
  }),
  getCertificateCompany: methodFormat(async () => {
    const response = await client.get(`admin/certificate/members/company`);
    return response;
  }),
  acceptMember: methodFormat(async userId => {
    const response = await client.post(`admin/certificate/members/${userId}`);
    return response;
  }),
  getMemberList: methodFormat(async date => {
    const response = await client.get(`admin/members`, {
      params: { dateTime: date },
    });
    return response;
  }),
};

export default adminApis;
