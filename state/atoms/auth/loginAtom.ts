import { atom } from "recoil";

// type ILoggedInstate = {
//   key: string;
//   default: boolean;
// };
export const isCertificatedState = atom({
  key: "isCertificatedState",
  default: false,
});
