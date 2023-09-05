export default function formatCommentDate(timestamp: string) {
  const ONE_HOUR_IN_MILLISECONDS = 3600000;
  const inputDate: any = new Date(
    new Date(timestamp).getTime() - ONE_HOUR_IN_MILLISECONDS,
  );

  const currentDate: any = new Date();

  const diffInSeconds = Math.floor((currentDate - inputDate) / 1000);
  const minutes = Math.floor(diffInSeconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30); // Using a rough estimate for month length
  const years = Math.floor(days / 365); // Using a rough estimate for year length

  if (minutes < 1) {
    return "방금 전";
  }
  if (minutes < 60) {
    return `${minutes}분 전`;
  }
  if (hours < 24) {
    return `${hours}시간 전`;
  }
  if (days < 30) {
    return `${days}일 전`;
  }
  if (months < 12) {
    return `${months}달 전`;
  }
  return `${years}년 전`;
}
