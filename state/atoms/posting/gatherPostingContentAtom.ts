import { atom } from "recoil";

import getFormattedDate from "@/utils/formatToday";

export type IGatherPostContent = {
  postId?: number;
  boardId: number;
  postType?: "normal" | "gather" | "notice";
  body: {
    email?: string;
    requestDto: {
      title: string;
      main: string;
      enterprise: string;
      startDate: string;
      endDate: string;
    };
  };
};

export const gatherPostingContentAtom = atom<IGatherPostContent>({
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
        enterprise: "",
        startDate: getFormattedDate(),
        endDate: getFormattedDate(),
      },
    },
  },
});
