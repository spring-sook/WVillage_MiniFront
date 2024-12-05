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
import BookmarkNo from "../../images/bookmark_no.png";
import BookmarkYes from "../../images/bookmark_yes.png";
import ImgDownloader from "../../components/Profile";
import { HeaderCom, FooterCom } from "../../components/GlobalComponent";
import { GenerateExcludedTimes } from "../../components/PostComponent";
import { Bookmark } from "@material-ui/icons";

const PostContent = () => {
  const now = new Date();
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [excludeTimes, setExcludeTimes] = useState([]);
  const imagePath = "snow_village.webp";

  const exTime = [
    {
      start: new Date("2024-12-11 10:00:00"),
      end: new Date("2024-12-12 9:00:00"),
    },
    {
      start: new Date("2024-12-14 13:00:00"),
      end: new Date("2024-12-14 20:00:00"),
    },
  ];

  const reserveTimes = exTime.flatMap((item) => {
    return GenerateExcludedTimes(item.start, item.end);
  });

  const handleStartDateChange = (date) => {
    setStartDate(date);

    if (endDate && date > endDate) {
      setEndDate(null); // 종료일을 초기화
    }

    const filteredTimes = reserveTimes.filter(
      (time) => time.toDateString() === date.toDateString()
    );
    setExcludeTimes(filteredTimes);
  };

  const handleReset = () => {
    // 초기화 버튼 클릭 시 날짜와 시간 초기화
    setStartDate(null);
    setEndDate(null);
  };

  return (
    <Container>
      <HeaderCom />
      <PostContentTop>
        <div className="post-content-top-left">
          <div className="post-content-img">
            <img
              src={isBookmarked ? BookmarkYes : BookmarkNo}
              alt="북마크"
              onClick={() => {
                setIsBookmarked(!isBookmarked);
              }}
              className="bookmark-icon"
            />
            여기가 이미지
          </div>
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
          <p className="post-content-title">
            상품 제목
            <p className="post-content-cnt">
              <span className="post-content-bookmark">북마크 20</span>
              &nbsp;/&nbsp;
              <span className="post-content-view">조회수 100</span>
            </p>
          </p>
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
              showTimeSelect
              excludeTimes={excludeTimes}
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
                minTime={
                  endDate && endDate.toDateString() === startDate.toDateString()
                    ? startDate.setMinutes(10, 0)
                    : new Date(0, 0, 0, 0, 0)
                }
                maxTime={new Date(0, 0, 0, 23, 59)}
                showTimeSelect
                timeIntervals={60}
                excludeTimes={excludeTimes}
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
