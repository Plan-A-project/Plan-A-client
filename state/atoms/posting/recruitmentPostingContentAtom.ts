import { atom } from "recoil";

export type IRecruitmentPostContent = {
  postId: number;
  title: string;
  content: string;
  thumbnailUrl: string;
  recruitment: {
    companyName: string;
    startDate: string; // timestamp
    endDate: string;
  };
};

export const recruitmentPostingContentAtom = atom<IRecruitmentPostContent>({
  key: "recruitmentPostingContentAtom",
  default: {
    postId: 0,
    title: "",
    content: "",
    thumbnailUrl: "",
    recruitment: {
      companyName: "",
      startDate: "",
      endDate: "",
    },
  },
});
