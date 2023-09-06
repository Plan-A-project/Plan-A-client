export default function checkDday(date1Str: any, date2Str: any) {
  // Parse both date strings
  const date1: any = new Date(date1Str);
  const date2: any = new Date(date2Str);

  // Calculate difference in milliseconds
  const diffMilliseconds = date2 - date1;

  // Convert difference to days
  const diffDays = Math.ceil(diffMilliseconds / (1000 * 60 * 60 * 24));

  // Check if d-day has passed, is today, or is in the future
  if (diffDays < 0) {
    return `D+${Math.abs(diffDays)}`;
  } else if (diffDays === 0) {
    return "D-Day";
  } else {
    return `D-${diffDays}`;
  }
}

// Test
const date1 = "2023-09-01T16:00:00";
const date2 = "2023-09-05T16:00:00";
// console.log(calculateDDay(date1, date2)); // D-4
