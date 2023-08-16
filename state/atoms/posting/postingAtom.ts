import { atom } from "recoil";

export type IPostContent = {
  // postId: number;
  // postType: string;
  // boardId: number;
  title: string;
  content: string;
  recruitmentCompanyName?: string;
  recruitmentStartDate?: Date;
  recruitmentEndDate?: Date;
};

export const postingContentAtom = atom<IPostContent>({
  key: "postingContentAtom",
  default: {
    // postId: 0,
    // postType: "",
    // boardId: 0,
    title: "",
    content: "",
  },
});
