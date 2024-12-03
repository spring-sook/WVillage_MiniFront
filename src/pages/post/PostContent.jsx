import { Container } from "../../styles/GlobalStyled";
import {
  PostContentBottom,
  PostContentTop,
  ProfileImg,
  ReserveButton,
} from "../../styles/PostStyled";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/locale";
import { useState } from "react";
import ImgDownloader from "../../components/Profile";

const PostContent = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const imagePath = "snow_village.webp";

  return (
    <Container>
      <div className="header">여기는 Header</div>
      <div className="nav">여기는 nav</div>
      <PostContentTop>
        <div className="post-content-top-left">
          <div className="post-content-img">여기가 이미지</div>
          <div className="post-content-user">
            <ImgDownloader imgfile={imagePath} width="40px" height="40px" />
          </div>
        </div>
        <div className="post-content-reserve">
          <p className="post-content-title">상품 제목</p>
          <p className="post-content-price">상품 가격 / 시</p>
          <div className="date-picker">
            <DatePicker
              className="input-date-picker"
              locale={ko}
              dateFormat="yyyy / MM / dd"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              minDate={new Date()}
              placeholderText="시작일 선택"
            />
            <div className="line"></div>
            <DatePicker
              className="input-date-picker"
              locale={ko}
              dateFormat="yyyy / MM / dd"
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              placeholderText="종료일 선택"
            />
          </div>
          <div
            style={{
              textAlign: "center",
              height: "150px",
              alignContent: "center",
              backgroundColor: "gray",
            }}
          >
            계산된 가격
          </div>
          <div className="post-reserve-button">
            <ReserveButton>예약하기</ReserveButton>
          </div>
        </div>
      </PostContentTop>
      <PostContentBottom>
        <div className="bottom-menu">
          <p>제품 상세 정보</p>
          <div className="line"></div>
          <p>사용자 리뷰</p>
        </div>
        <div>여기가 제품 내용</div>
      </PostContentBottom>
      <div className="footer">여기는 footer</div>
    </Container>
  );
};

export default PostContent;
