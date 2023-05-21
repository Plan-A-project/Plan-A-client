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
  default: [
    // {
    //   day: "월",
    //   time: "11am",
    //   duration: 2,
    //   title: "영어1",
    //   location: "정경대 104호",
    //   professor: "김주연",
    //   rating: 4.5,
    //   courseCode: 1234,
    // },
    // {
    //   day: "화",
    //   time: "2pm",
    //   duration: 1,
    //   title: "글쓰기1",
    //   location: "정경대 104호",
    //   professor: "강준호",
    //   rating: 4.0,
    //   courseCode: 1235,
    // },
    // {
    //   day: "수",
    //   time: "4pm",
    //   duration: 1,
    //   title: "경영학개론",
    //   location: "정경대 104호",
    //   professor: "정경호",
    //   rating: 4.5,
    //   courseCode: 1236,
    // },
  ],
});

// // 추가
// export const createCourse = (myCourseList: ICourse[], newCourse: ICourse) => {
//   // TODO: 시간표 중복 여부 점검
//   return [...myCourseList, newCourse];
// };

// // 삭제
// export const deleteCourse = (myCourseList: ICourse[], courseCode: number) => {
//   return myCourseList.filter((course) => course.courseCode !== courseCode);
// };

// // 모든 과목 조회
// export const getCourses = (myCourseList: ICourse[]): ICourse[] => {
//   return myCourseList;
// };

// // 특정 과목 조회 (courseCode) & 시간표 중복 여부 점검
// export const getACourse = (courseCode: number): boolean => {
//   return true;
// };
