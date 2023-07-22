import { atom } from "recoil";

export type IPostContent = {
  postId?: number;
  boardId: number;
  postType?: "normal" | "gather" | "notice";
  body: {
    email?: string;
    requestDto: {
      title: string;
      main: string;
    };
  };
};

export const postContentAtom = atom<IPostContent>({
  key: "myCourseListState",
  default: {
    postId: 0,
    boardId: 0,
    postType: "normal", // default
    body: {
      email: "",
      requestDto: {
        title: "",
        main: "",
      },
    },
  },
});
