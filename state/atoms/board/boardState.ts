// state/boardState.ts
import { atom } from "recoil";

export const boardListState = atom({
  key: "boardListState",
  default: [],
});
export const scrollPositionState = atom<number>({
  key: "scrollPositionState",
  default: 0,
});
