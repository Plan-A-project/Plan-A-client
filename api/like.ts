import { methodFormat } from "@/utils/methodFormat";

import client from "./client";

const likesApis = {
  commentLike: methodFormat(async commentId => {
    const response = await client.post(`comments/${commentId}/likes`);
    return response;
  }),
  cancelCommentLike: methodFormat(async commentId => {
    const response = await client.delete(`comments/${commentId}/likes`);
    return response;
  }),
  postLike: methodFormat(async postId => {
    const response = await client.post(`posts/${postId}/likes`);
    return response;
  }),
  cancelPostLike: methodFormat(async postId => {
    const response = await client.delete(`posts/${postId}/likes`);
    return response;
  }),
};

export default likesApis;
