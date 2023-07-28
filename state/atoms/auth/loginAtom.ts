import { atom } from "recoil";

// type ILoggedInstate = {
//   key: string;
//   default: boolean;
// };
export const isLoggedInState = atom({
  key: "isLoggedInState",
  default: false,
});
