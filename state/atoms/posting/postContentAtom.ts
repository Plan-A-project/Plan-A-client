import { atom } from "recoil";

export type IPostContent = {
  postId: number;
  postType: "normal" | "gather" | "notice";
  email: string;
  requestDto: {
    title: string;
    main: string;
  };
};

export const postContentAtom = atom<IPostContent>({
  key: "myCourseListState",
  default: {
    postId: 0,
    postType: "normal",
    email: "kkjuyeon@gmail.com",
    requestDto: {
      title: "",
      main: "안녕하세요 <img src='https://cdn.pixabay.com/photo/2023/05/26/12/31/couple-8019370_960_720.jpg '/>",
    },
  },
});
