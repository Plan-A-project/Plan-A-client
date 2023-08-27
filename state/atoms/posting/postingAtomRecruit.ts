import { atom } from "recoil";

import { IPostContent } from "./postingAtom";

export const postingContentAtomRecruit = atom<IPostContent>({
  key: "postingContentAtomRecruit",
  default: {
    // postId: 0,
    // postType: "",
    // boardId: 0,
    title: "",
    content: "",
    recruitmentCompanyName: "",
    recruitmentStartDate: new Date(),
    recruitmentEndDate: new Date(),
  },
});
