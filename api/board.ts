import { methodFormat } from "@/utils/methodFormat";

import client from "./client";

const boardApis = {
  checkBoardsExist: methodFormat(async token => {
    const response = await client.get(`boards/popular/exists`, {
      headers: {
        "Access-Token": token,
      },
    });
    return response;
  }),
  getBoardList: methodFormat(async (token, boardId, type, page, order) => {
    const response = await client.get(`posts/boards/${boardId}`, {
      params: {
        type,
        page,
        order,
      },
      headers: {
        "Access-Token": token,
      },
    });
    return response;
  }),
};

export default boardApis;
