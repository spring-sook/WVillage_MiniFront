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
import { GenerateExcludedTimes } from "../../components/PostComponent";

const PostContent = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const imagePath = "snow_village.webp";

  const handleStartDateChange = (date) => {
    setStartDate(date);

    if (endDate && date > endDate) {
      setEndDate(null); // 종료일을 초기화
    }
  };

  // 종료 날짜 변경 핸들러
  // const handleEndDateChange = (date) => {
  //   setEndDate(date);
  // };

  const handleReset = () => {
    // 초기화 버튼 클릭 시 날짜와 시간 초기화
    setStartDate(null);
    setEndDate(null);
  };

  const now = new Date();
  const startExcluded = new Date(2024, 12, 11, 16, 0); // 12월 11일 16시
  const endExcluded = new Date(2024, 12, 12, 8, 0); // 12월 12일 08시
  const excludedTimes = GenerateExcludedTimes(startExcluded, endExcluded);
  // https://codesandbox.io/p/sandbox/react-datepicker-different-excludetimes-for-specific-days-6i7y6?file=%2Fsrc%2FApp.js%3A10%2C1-40%2C2
  // https://github.com/Hacker0x01/react-datepicker/issues/2412

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
              dateFormat="yyyy-MM-dd  HH:mm"
              dateFormatCalendar="yyyy년 MM월"
              timeCaption="시간"
              selected={startDate}
              onChange={handleStartDateChange}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              minDate={new Date()}
              minTime={
                startDate && startDate.toDateString() === now.toDateString()
                  ? now
                  : new Date(0, 0, 0, 0, 0)
              }
              maxTime={new Date(0, 0, 0, 23, 59)}
              excludeTimes={excludedTimes}
              showTimeSelect
              timeIntervals={60}
              placeholderText="시작일 선택"
            />
            <div className="line" />
            {startDate ? (
              <DatePicker
                className="input-date-picker"
                locale={ko}
                dateFormat="yyyy-MM-dd  HH:mm"
                dateFormatCalendar="yyyy년 MM월"
                timeCaption="시간"
                selected={endDate}
                onChange={(date) => {
                  setEndDate(date);
                }}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                showTimeSelect
                timeIntervals={60}
                placeholderText="종료일 선택"
              />
            ) : (
              <input
                className="input-date-picker"
                placeholder="종료일 선택"
                onClick={() => alert("시작일 먼저 선택")}
              />
            )}
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
            <button onClick={handleReset} className="post-reserve-reset-button">
              초기화
            </button>
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
