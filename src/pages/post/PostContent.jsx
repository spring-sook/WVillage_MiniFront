import { Container } from "../../styles/GlobalStyled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ImgDownloader } from "../../components/ImgComponent";
import {
  PostContentBottom,
  PostContentTop,
  ReserveButton,
} from "../../styles/PostStyled";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/locale";
import { useContext, useEffect, useState } from "react";
import Logo from "../../images/logo.png";
import BookmarkNo from "../../images/bookmark_no.png";
import BookmarkYes from "../../images/bookmark_yes.png";
import ProfileImgDownloader from "../../components/Profile";
import { HeaderCom, FooterCom } from "../../components/GlobalComponent";
import {
  GenerateExcludedTimes,
  ImageSlider,
  ViewItemInfo,
  ViewReview,
} from "../../components/PostComponent";
import { useLocation, useParams } from "react-router-dom";
import { UserContext } from "../../context/UserStore";
import PostAPI from "../../api/PostAPI";
import UserProfileAPI from "../../api/OtherUserProfileAPI";
import resetIcon from "../../images/reset_icon.png";

const PostContent = () => {
  const location = useLocation();
  // const { post } = location.state || {};
  const now = new Date();
  const { postId } = useParams();
  const { userInfo } = useContext(UserContext);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [postData, setPostData] = useState([]);
  const [imgData, setImgData] = useState([]);
  const [writerData, setWriterData] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [duration, setDuration] = useState(0);
  const [excludeTimes, setExcludeTimes] = useState([]);
  const [selectedTab, setSelectedTab] = useState("제품 상세 정보");
  const imagePath = "snow_village.webp";

  useEffect(() => {
    const fetchData = async () => {
      const responseData = await PostAPI.PostContentDetail(postId);
      setPostData(responseData.data);
      const responseProfile = await UserProfileAPI.getUserProfile(
        responseData.data.postEmail
      );
      setWriterData(responseProfile.data);
      console.log("profile : ", responseProfile.data);
      const responseBookmark = await PostAPI.IsBookmarked(
        responseData.data.postEmail,
        postId
      );
      setIsBookmarked(responseBookmark.data);
      const responseImg = await PostAPI.PostImages(postId);
      setImgData(responseImg.data);
      console.log(">>>", imgData);
    };
    fetchData();
  }, []);
  useEffect(() => {
    if (startDate && endDate) {
      const diffInMilliseconds = endDate - startDate;
      const diffInHours = diffInMilliseconds / (1000 * 60 * 60); // 시간 단위 변환
      setDuration(diffInHours);
    } else {
      setDuration(0); // 날짜가 없으면 0으로 초기화
    }
  }, [startDate, endDate]);

  const settings = {
    dots: true, // 페이지네이션 점 표시
    infinite: true, // 무한 슬라이드
    speed: 500, // 슬라이드 전환 속도
    slidesToShow: 1, // 한 번에 보여줄 이미지 개수
    slidesToScroll: 1, // 한 번에 이동할 이미지 개수
    autoplay: false, // 자동 슬라이드
    autoplaySpeed: 2000, // 자동 슬라이드 간격
  };

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
  const handleEndDateChange = (date) => {
    setEndDate(date);

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
  const handleBookmark = async () => {
    setIsBookmarked(!isBookmarked);
    if (!isBookmarked) {
      await PostAPI.InsertBookmark(postId, userInfo.email);
    } else {
      await PostAPI.DeleteBookmark(postId, userInfo.email);
    }
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
                handleBookmark();
              }}
              className="bookmark-icon"
            />
            이미지
            <Slider {...settings}>
              {imgData.map((imgfile, index) => (
                <div key={index}>
                  <ImgDownloader imgfile={imgfile} />
                </div>
              ))}
            </Slider>
            {/* <ImageSlider imgs={imgData} /> */}
          </div>
          <div className="post-content-user">
            <ProfileImgDownloader
              imgfile={imagePath}
              width="40px"
              height="40px"
            />
            <div className="post-content-userinfo">
              <p className="post-content-nick">{writerData.nickname}</p>
              <p className="post-content-region">사용자 지역</p>
            </div>
            <div className="post-content-temp">
              <img className="temp-img" src={Logo} alt="온도이미지" />
              <p>36.5℃</p>
            </div>
          </div>
        </div>
        <div className="post-content-reserve">
          <p className="post-content-title">
            {postData.postTitle}
            <p className="post-content-cnt">
              <span className="post-content-bookmark">
                북마크 {postData.bookmarked}
              </span>
              &nbsp;&nbsp;/&nbsp;&nbsp;
              <span className="post-content-view">
                조회수 {postData.postViews}
              </span>
            </p>
          </p>
          <p className="post-content-price">
            시간 당 &nbsp;
            <span>{Number(postData.postPrice).toLocaleString()}</span> 원
          </p>
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
                onChange={handleEndDateChange}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                minTime={
                  endDate && endDate.toDateString() === startDate.toDateString()
                    ? new Date(
                        0,
                        0,
                        0,
                        startDate.getHours(),
                        startDate.getMinutes() + 10
                      )
                    : new Date(0, 0, 0, 0, 0)
                }
                maxDate={
                  exTime.find((item) => item.start >= startDate)?.start ||
                  null /* 다음 예약 시작 시간을 기준으로 */
                }
                maxTime={(() => {
                  const nextReservation = exTime.find(
                    (item) => item.start >= startDate
                  );
                  if (
                    nextReservation &&
                    nextReservation.start.toDateString() ===
                      endDate?.toDateString()
                  ) {
                    return new Date(
                      0,
                      0,
                      0,
                      nextReservation.start.getHours(),
                      nextReservation.start.getMinutes()
                    );
                  }
                  return new Date(0, 0, 0, 23, 59); // 기본값: 하루 끝
                })()}
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
            className="calc-price"
            style={{
              textAlign: "center",
              height: "100px",
              alignContent: "center",
            }}
          >
            금액 &nbsp;:&nbsp;{" "}
            {(duration > 0
              ? duration * (postData.postPrice || 0)
              : 0
            ).toLocaleString()}{" "}
            원
            {duration > 0 && (
              <button
                onClick={handleReset}
                className="post-reserve-reset-button"
              >
                초기화
                <img src={resetIcon} alt="Reset Icon" />
              </button>
            )}
          </div>
          <div className="post-reserve-button">
            <ReserveButton>예약하기</ReserveButton>
          </div>
        </div>
      </PostContentTop>
      <PostContentBottom>
        <div className="bottom-menu">
          <p
            onClick={() => setSelectedTab("제품 상세 정보")}
            className={selectedTab === "제품 상세 정보" ? "active" : ""}
          >
            제품 상세 정보
          </p>
          <div className="line"></div>
          <p
            onClick={() => setSelectedTab("사용자 리뷰")}
            className={selectedTab === "사용자 리뷰" ? "active" : ""}
          >
            사용자 리뷰
          </p>
        </div>

        {selectedTab === "제품 상세 정보" && (
          <ViewItemInfo postData={postData} />
        )}
        {selectedTab === "사용자 리뷰" && <ViewReview />}
      </PostContentBottom>
      <FooterCom />
    </Container>
  );
};

export default PostContent;
