function formatDate(dateString: string) {
  const ONE_HOUR_IN_MILLISECONDS = 3600000;
  const inputDate: any = new Date(
    new Date(dateString).getTime() - ONE_HOUR_IN_MILLISECONDS,
  );

  const currentDate: any = new Date();

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
