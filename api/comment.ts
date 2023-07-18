import { methodFormat } from "@/utils/methodFormat";

import client from "./client";

const commentApis = {
  createComment: methodFormat(async ({ postId, parentCommentId, content }) => {
    const response = await client.post(`/api/comments`, {
      headers: {
        Authorization: localStorage.getItem("tk"),
      },
      body: {
        postId,
        parentCommentId,
        content,
      },
    });
    return response;
  }),
};

export default commentApis;
