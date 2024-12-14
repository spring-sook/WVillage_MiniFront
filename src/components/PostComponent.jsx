import styled from "styled-components";
import {
  ModalOverlay,
  ModalContainer,
  ModalButton,
} from "../styles/PostStyled";
import React from "react";
import Slider from "react-slick";
import { ImgDownloader } from "./ImgComponent";

const ViewItemContainer = styled.div`
  width: 1200px;
  padding: 50px 100px;
  margin: 0 auto;
  border-bottom: 1px solid #ccc;
  @media (max-width: 747px) {
    width :700px;
    }
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
`;

const ViewPostReview = styled.div`
  width: 1200px;
  padding: 50px 100px;
  margin: 0 auto 50px;
  border-bottom: 1px solid #ccc;
  @media (max-width: 747px) {
    width :700px;
    }
  .no-review {
    text-align: center;
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
  return (
    <ViewItemContainer>
      <p>
        <span>거래 장소 &nbsp; : &nbsp; </span>
        {postData.postData.postRegion} {postData.postData.postLocation}
      </p>
      {/* <span>상품 내용</span> */}
      <div
        className="post-content"
        dangerouslySetInnerHTML={{ __html: postData.postData.postContent }}
      />
    </ViewItemContainer>
  );
};

export const ViewReview = (reviewData) => {
  console.log("데이터 넘김 : ", reviewData);
  return (
    <ViewPostReview>
      {reviewData.data ? (
        <div>여기는 사용자 리뷰:</div>
      ) : (
        <div className="no-review">리뷰가 없습니다.</div>
      )}
    </ViewPostReview>
  );
};

export const PostWriteModal = ({ onClose }) => {
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

export const ImageSlider = ({ imgs }) => {
  console.log("imgs", imgs);
  const settings = {
    dots: true, // 페이지네이션 점 표시
    infinite: true, // 무한 슬라이드
    speed: 500, // 슬라이드 전환 속도
    slidesToShow: 1, // 한 번에 보여줄 이미지 개수
    slidesToScroll: 1, // 한 번에 이동할 이미지 개수
    autoplay: false, // 자동 슬라이드
    autoplaySpeed: 2000, // 자동 슬라이드 간격
  };
  return (
    <div>
      <Slider {...settings}>
        {imgs.map((imgfile, index) => (
          <div key={index}>
            <ImgDownloader imgfile={imgfile} />
          </div>
        ))}
      </Slider>
    </div>
  );
};
