import { methodFormat } from "@/utils/methodFormat";

import client from "./client";

const PATH = "posts/";

const searchApis = {
  searchPosts: methodFormat(async (keyword, page) => {
    const response = await client.get(`${PATH}search`, {
      params: {
        keyword: keyword,
        page: page,
      },
    });
    return response;
  }),
};

export default searchApis;
