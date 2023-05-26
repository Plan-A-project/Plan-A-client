import { atom } from "recoil";

export interface IFeedback {
  day: string;
  time: string;
  duration: number;
  title: string;
  location: string;
  professor: string;

  // 필수
  courseCode: number;
  rating: number;
  year: number;
  semester: number;
  comment: string;
  //   studentId: string;
}

export const myCourseFeedback = atom<IFeedback[]>({
  key: "myCourseFeedback",
  default: [],
});
