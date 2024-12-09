import {
  ModalOverlay,
  ModalContainer,
  ModalButton,
} from "../styles/PostStyled";

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

export const Modal = ({ onClose }) => {
  return (
    <ModalOverlay>
      <ModalContainer>
        <h3>모든 항목을 기입해 주세요!</h3>
        <p>
          게시글을 작성하려면 모든 항목(카테고리, 가격, 상세 장소, 제목,
          첨부파일, 내용)을 채워야 합니다.
        </p>
        <ModalButton onClick={onClose}>확인</ModalButton>
      </ModalContainer>
    </ModalOverlay>
  );
};
