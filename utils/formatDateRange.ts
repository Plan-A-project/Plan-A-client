export default function formatDateRange(date1Str: any, date2Str: any) {
  // Parse both date strings
  const date1 = new Date(date1Str);
  const date2 = new Date(date2Str);

  // Extract month and day for each date
  const month1 = date1.getMonth() + 1; // getMonth() returns a 0-based month
  const day1 = date1.getDate();

  const month2 = date2.getMonth() + 1;
  const day2 = date2.getDate();

  // Return the formatted string
  return `${month1}.${day1} ~ ${month2}.${day2}`;
}

// Test
const date1 = "2023-09-01";
const date2 = "2023-09-05";
console.log(formatDateRange(date1, date2)); // 9.1 to 9.5
