import { Container } from "../../styles/GlobalStyled";
import {
  PostContentBottom,
  PostContentTop,
  ReserveButton,
  TimePicker,
} from "../../styles/PostStyled";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/locale";
import { useState } from "react";
import Logo from "../../images/logo.png";
import ImgDownloader from "../../components/Profile";
import { HeaderCom, FooterCom } from "../../components/GlobalComponent";

const PostContent = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const hours = Array.from({ length: 24 }, (_, i) => `${i} : 00`); // 시간 배열
  const imagePath = "snow_village.webp";

  const handleStartDateChange = (date) => {
    setStartDate(date);

    // 종료일이 시작일 이전이면 종료일을 시작일 이후로 업데이트
    if (endDate && date > endDate) {
      setEndDate(null); // 종료일을 초기화
    }
  };

  // 종료 날짜 변경 핸들러
  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  return (
    <Container>
      <HeaderCom />
      <PostContentTop>
        <div className="post-content-top-left">
          <div className="post-content-img">여기가 이미지</div>
          <div className="post-content-user">
            <ImgDownloader imgfile={imagePath} width="40px" height="40px" />
            <div className="post-content-userinfo">
              <p className="post-content-nick">coolcool</p>
              <p className="post-content-region">여의동</p>
            </div>
            <div className="post-content-temp">
              <img className="temp-img" src={Logo} alt="온도이미지" />
              <p>36.5℃</p>
            </div>
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
              dateFormatCalendar="yyyy년 MM월"
              selected={startDate}
              onChange={handleStartDateChange}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              minDate={new Date()}
              placeholderText="시작일 선택"
            />
            <div className="line" />
            <DatePicker
              className="input-date-picker"
              locale={ko}
              dateFormat="yyyy / MM / dd"
              dateFormatCalendar="yyyy년 MM월"
              selected={endDate}
              onChange={handleEndDateChange}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              placeholderText="종료일 선택"
            />
          </div>
          <div className="time-picker">
            <TimePicker
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
            >
              <option value="" disabled hidden>
                시작 시간 선택
              </option>
              {hours.map((hour, index) => (
                <option key={index} value={hour}>
                  {hour}
                </option>
              ))}
            </TimePicker>
            <div className="line" />
            <TimePicker
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
            >
              <option value="" disabled hidden>
                종료 시간 선택
              </option>
              {hours.map((hour, index) => (
                <option key={index} value={hour}>
                  {hour}
                </option>
              ))}
            </TimePicker>
          </div>
          <div
            style={{
              textAlign: "center",
              height: "100px",
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
      <FooterCom />
    </Container>
  );
};

export default PostContent;
