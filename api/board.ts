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
  getBoardList: methodFormat(async (boardId, type, page, order, size) => {
    const response = await client.get(`boards/${boardId}`, {
      params: {
        type,
        page,
        order,
        size,
      },
      withCredentials: true,
    });
    return response;
  }),
};

export default boardApis;
