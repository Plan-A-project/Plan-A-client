// state/boardState.ts
import { atom } from "recoil";

export const boardListState = atom({
  key: "boardListState",
  default: {
    4: { NORMAL: [], type: "recent" }, // 익명 게시판
    1: { NORMAL: [], RECRUITMENT: [], type: "recent" }, // 채용 게시판
    2: { NORMAL: [], RECRUITMENT: [], type: "recent" }, // 대외활동
    5: { NORMAL: [], ANNOUNCEMENT: [], type: "recent" }, // 학교생활
    3: { NORMAL: [], type: "recent" }, // 동아리
    boardId: 4,
  },
});
export const scrollPositionState = atom<number>({
  key: "scrollPositionState",
  default: 0,
});
