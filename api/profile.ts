import { methodFormat } from "@/utils/methodFormat";

import client from "./client";

const PATH = "setting/";
const profileApis = {
  changeNickname: methodFormat(async newNickname => {
    const response = await client.post(`${PATH}nickname`, {
      nickname: newNickname,
    });
    return response;
  }),
  changeProfileImage: methodFormat(async file => {
    const response = await client.post(`${PATH}profile/image`, file);
    return response;
  }),
  getProfile: methodFormat(async () => {
    const response = await client.get(`setting/profile`, {
      withCredentials: true,
    });
    return response;
  }),
};

export default profileApis;
