import { methodFormat } from "@/utils/methodFormat";

import client from "./client";

const searchApis = {
  searchPosts: methodFormat(async (keyword, page) => {
    const response = await client.get(`search`, {
      params: {
        keyword: keyword,
        page: page,
      },
    });
    return response;
  }),
};

export default searchApis;
