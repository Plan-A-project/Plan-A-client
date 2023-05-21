import { selector } from "recoil";
import { ICourse, myCoursesAtom } from "@/state/atoms/timetableAtom";

// // 내 선택 과목 조회
// const getMyCourseList = selector<ICourse[]>({
//   key: "getMyCourseList",
//   get: ({ get }) => {
//     const myCourseList = get(myCoursesAtom);
//     return myCourseList;
//   },
// });

// // 과목 추가
// const addMyCourse = selector<ICourse[]>({
//   key: "addMyCourse",
//   get: ({ get }) => get(myCoursesAtom),
//   set: ({ set, get }, newCourse) => {
//     const myCourseList = get(myCoursesAtom);
//     const updatedCourseList = [...myCourseList, newCourse] as ICourse[];
//     set(myCoursesAtom, updatedCourseList);
//   },
// });

// 추가된 과목 인지 확인
// const getMyCourseCodeList = selector({
//   key: "getMyCourseCodeList",
//   get: ({ get }) => {
//     const myCourseList = get(myCoursesAtom);
//     return myCourseList.map((c) => c.courseCode);
//   },
// });

// 과목 삭제
// const deleteMyCourse = selector<ICourse[]>({
//   key: "deleteMyCourse",
//   get: ({ get }) => get(myCourseListState),
//   set: ({ get, set }, courseCode: number) => {
//     const myCourseList = get(myCourseListState);
//     const updatedCourseList = myCourseList.filter(
//       (course) => course.courseCode !== 1000
//     );
//     // set(myCourseListState, updatedCourseList);
//   },
// });

// const deleteTodo = selector<ICourse[]>({
//   key: "deleteMyCourse",
//   get: ({ get }) => get(myCourseListState),
//   set: ({ get, set }, courseCode: number) => {
//     const myCourseList = get(myCourseListState);
//     const updatedCourseList = myCourseList.filter(
//       (course) => course.courseCode !== courseCode
//     ) as ICourse[];
//     set(myCourseListState, updatedCourseList);
//   },
// });
