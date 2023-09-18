export default function formatAdminDate(inputDateStr: string) {
  const inputDate = new Date(inputDateStr);

  const year = inputDate.getFullYear();
  const month = inputDate.getMonth() + 1; // 월은 0부터 시작하므로 1을 더해줍니다.
  const day = inputDate.getDate();
  const hours = inputDate.getHours();
  const minutes = inputDate.getMinutes();

  // 월과 일이 한 자리 수인 경우 앞에 0을 붙여줍니다.
  const formattedMonth = month < 10 ? `0${month}` : month;
  const formattedDay = day < 10 ? `0${day}` : day;

  // 시간과 분이 한 자리 수인 경우 앞에 0을 붙여줍니다.
  const formattedHours = hours < 10 ? `0${hours}` : hours;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  // 원하는 형식으로 날짜와 시간을 조합하여 반환합니다.
  const formattedDate = `${year}/${formattedMonth}/${formattedDay} ${formattedHours}:${formattedMinutes}`;

  return formattedDate;
}

// 테스트
const inputDateStr = "2023-09-15T11:59:07.865807";
// console.log(formattedDate); // "2023/09/15 11:59"
