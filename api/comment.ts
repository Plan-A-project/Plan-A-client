import { methodFormat } from "@/utils/methodFormat";

import client from "./client";

const commentApis = {
  postComment: methodFormat(async data => {
    const response = await client.post(`comments`, data);
    return response;
  }),
  deleteComment: methodFormat(async commentId => {
    const response = await client.delete(`comments/${commentId}`);
    return response;
  }),
  modifyComment: methodFormat(async data => {
    const response = await client.patch(`comments`, data);
    return response;
  }),
  getComment: methodFormat(async (postId, page) => {
    const response = await client.get(`posts/${postId}/comments?page=${page}`);
    return response;
  }),
  getMyComment: methodFormat(async page => {
    const response = await client.get(`members/comments?page=${page}`);
    return response;
  }),
};

export default commentApis;
