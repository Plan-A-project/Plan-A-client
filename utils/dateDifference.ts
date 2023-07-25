export default function dateDifference(date1: string, date2: string): number {
  const date1Obj = new Date(date1);
  const date2Obj = new Date(date2);

  const timeDiff = Math.abs(date2Obj.getTime() - date1Obj.getTime());
  const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24)); // 1일 = 1000밀리초 * 60초 * 60분 * 24시간

  return daysDiff;
}
