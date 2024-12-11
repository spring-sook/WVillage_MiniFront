import styled from "styled-components";
import {
  ModalOverlay,
  ModalContainer,
  ModalButton,
} from "../styles/PostStyled";
import React from "react";

const ViewItemContainer = styled.div`
  width: 850px;
  margin: 0 auto;

  p {
    font-size: 18px;
    margin: 20px 0;
  }
  span {
    font-weight: bold;
    font-size: 18px;
  }

  .post-content {
    line-height: 30px;
    margin-top: 10px;
  }

  hr {
    border: 0.5px solid #ccc;
    margin: 30px 0;
  }
`;

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

export const ViewItemInfo = (postData) => {
  console.log("데이터 넘김 : ", postData);
  return (
    <ViewItemContainer>
      <p>
        <span>거래 장소 &nbsp; : &nbsp; </span>
        {postData.postData.postRegion} {postData.postData.postLocation}
      </p>
      <span>상품 내용</span>
      <div
        className="post-content"
        dangerouslySetInnerHTML={{ __html: postData.postData.postContent }}
      />
      <hr />
    </ViewItemContainer>
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
