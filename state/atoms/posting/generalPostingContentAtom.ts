import { atom } from "recoil";

export type IPostContent = {
  boardId: number;
  postType?: "NORMAL" | "ANNOUNCEMENT";
  body: {
    email?: string;
    requestDto: {
      title: string;
      main: string;
    };
  };
};

export const generalPostingContentAtom = atom<IPostContent>({
  key: "myCourseListState",
  default: {
    boardId: 0,
    postType: "NORMAL", // default
    body: {
      email: "",
      requestDto: {
        title: "",
        main: "",
      },
    },
  },
});
