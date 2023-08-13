function formatDate(dateString: string) {
  const inputDate = new Date(dateString);
  const currentDate = new Date();

  // Check if the date is today
  if (inputDate.toDateString() === currentDate.toDateString()) {
    return `${inputDate.getHours().toString().padStart(2, "0")}:${inputDate
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;
  } else {
    return `${inputDate.getMonth() + 1}/${inputDate.getDate()}`;
  }
}
export default formatDate;
// Test
console.log(formatDate("2023-08-11T01:36:54.403929")); // Should display the current time if today is 2023-08-11
console.log(formatDate("2023-07-23T01:36:54.403929")); // Should display 7/23
