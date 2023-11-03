export default function checkDday(date1Str: any, date2Str: any) {
  // Parse both date strings
  const ONE_HOUR_IN_MILLISECONDS = 3600000;
  function toNextMidnight(isoString: string | number | Date) {
    // ISO 8601 형식의 문자열을 Date 객체로 변환
    const date = new Date(isoString);

    // 8시간을 더함 (8 * 60 * 60 * 1000 밀리초)
    date.setTime(date.getTime() + 8 * 60 * 60 * 1000);

    // 결과를 ISO 8601 형식의 문자열로 변환하여 반환
    return date.toISOString();
  }

  const date1: any = new Date(date1Str);
  const date2: any = new Date(toNextMidnight(date2Str));
  // Calculate difference in milliseconds
  const diffMilliseconds = date2 - date1;
  console.log(11323, diffMilliseconds);
  // Convert difference to days
  const diffDays = Math.ceil(diffMilliseconds / (1000 * 60 * 60 * 24));
  // Check if d-day has passed, is today, or is in the future
  if (diffDays <= 0) {
    return `D+${Math.abs(diffDays) + 1}`;
  } else if (diffDays === 1) {
    return "D-Day";
  } else {
    return `D-${diffDays}`;
  }
}

// Test
const date1 = "2023-09-01T16:00:00";
const date2 = "2023-09-05T16:00:00";
// console.log(calculateDDay(date1, date2)); // D-4
