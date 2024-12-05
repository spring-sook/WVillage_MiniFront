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

export const ViewItemInfo = () => {
  return (
    <>
      <div>여기는 제품 정보</div>
    </>
  );
};

export const ViewReview = () => {
  return (
    <>
      <div>여기는 사용자 리뷰</div>
    </>
  );
};
