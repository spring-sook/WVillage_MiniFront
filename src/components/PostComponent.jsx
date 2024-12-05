export const GenerateExcludedTimes = (startDate, endDate) => {
  const excludedTimes = [];
  let currentTime = new Date(startDate);

  // 종료 시간까지 반복하면서 시간을 제외할 배열을 생성
  while (currentTime < endDate) {
    excludedTimes.push(new Date(currentTime)); // 시간을 제외할 배열에 추가
    currentTime.setHours(currentTime.getHours() + 1); // 한 시간씩 증가
  }

  return excludedTimes;
};

// export const CalculateDaysFromToday = (targetDate) => {
//   const today = new Date();
//   const targetDateOnly = new Date(targetDate);
//   today.setHours(0, 0, 0, 0);
//   targetDateOnly.setHours(0, 0, 0, 0);
//   const diffTime = targetDate.getTime() - today.getTime();
//   const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // 하루 단위 계산
//   return diffDays - 1;
// };
