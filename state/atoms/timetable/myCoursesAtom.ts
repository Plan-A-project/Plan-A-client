import { atom } from "recoil";

export interface ICourse {
  day: string;
  time: string;
  duration: number;
  title: string;
  location: string;
  professor: string;
  rating: number;
  courseCode: number;
}

export const myCoursesAtom = atom<ICourse[]>({
  key: "myCourseListState",
  default: [],
});
