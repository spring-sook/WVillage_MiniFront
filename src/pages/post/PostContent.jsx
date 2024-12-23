import { Container } from "../../styles/GlobalStyled";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import { ImgDownloader } from "../../components/ImgComponent";
import {
  PostContentBottom,
  PostContentTop,
  ReserveButton,
  ButtonContainer,
  Button,
} from "../../styles/PostStyled";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/locale";
import { useContext, useEffect, useState } from "react";
import BookmarkNo from "../../images/bookmark_no.png";
import BookmarkYes from "../../images/bookmark_yes.png";
import { ProfileImgDownloader } from "../../components/Profile";
import { HeaderCom, FooterCom } from "../../components/GlobalComponent";
import {
  GenerateExcludedTimes,
  ViewItemInfo,
  ViewReview,
  PostContentConfirmModal,
  PostContentModal,
  PostContentNoPointModal,
} from "../../components/PostComponent";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../context/UserStore";
import PostAPI from "../../api/PostAPI";
import UserProfileAPI from "../../api/OtherUserProfileAPI";
import ReviewAPI from "../../api/ReviewAPI";
import ReserveAPI from "../../api/ReserveAPI";
import resetIcon from "../../images/reset_icon.png";
import { ProfileFireImg } from "../../components/Profile";

const PostContent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const now = new Date();
  const { postId } = useParams();
  const { userInfo } = useContext(UserContext);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [postData, setPostData] = useState([]);
  const [imgData, setImgData] = useState([]);
  const [writerData, setWriterData] = useState([]);
  const [reviewData, setReviewData] = useState([]);
  const [reserveData, setReserveData] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [duration, setDuration] = useState(0);
  const [exTime, setExTime] = useState([]);
  const [reserveTimes, setReserveTimes] = useState([]);
  const [excludeTimes, setExcludeTimes] = useState([]);
  const [selectedTab, setSelectedTab] = useState("제품 상세 정보");
  const [showNoPointModal, setShowNoPointModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showCompletedModal, setShowCompletedModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const responseData = await PostAPI.PostContentDetail(postId);
      setPostData(responseData.data);
      console.log("여기를 봐야됨 : ", responseData.data);

      const responseProfile = await UserProfileAPI.getUserProfile(postId);
      setWriterData(responseProfile.data);
      console.log(responseProfile.data);
      const responseBookmark = await PostAPI.IsBookmarked(
        userInfo.email,
        postId
      );
      console.log(responseBookmark.data);
      setIsBookmarked(responseBookmark.data);
      const responseImg = await PostAPI.PostImages(postId);
      setImgData(responseImg.data);
      const reponseReview = await ReviewAPI.PostReview(postId);
      setReviewData(reponseReview.data);
      console.log(">>>>>>>>>>", reponseReview.data);
      const responseReserve = await ReserveAPI.GetPostReserve(postId);
      setReserveData(responseReserve.data);
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

  useEffect(() => {
    if (reserveData.length > 0) {
      const newExTime = reserveData.map((reserve) => ({
        start: new Date(reserve.reserveStart),
        end: new Date(reserve.reserveEnd),
      }));

      const generatedReserveTimes = newExTime.flatMap((item) =>
        GenerateExcludedTimes(item.start, item.end)
      );

      setExTime(newExTime);
      setReserveTimes(generatedReserveTimes);
      setExcludeTimes(generatedReserveTimes);
    }
  }, [reserveData]);
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
    console.log("북마크 상태 : ", isBookmarked);
    setIsBookmarked(!isBookmarked);
    if (!isBookmarked) {
      await PostAPI.InsertBookmark(postId, userInfo.email);
    } else {
      await PostAPI.DeleteBookmark(postId, userInfo.email);
    }
    const responseData = await PostAPI.PostContentDetail(postId);
    setPostData(responseData.data);
    // window.location.reload();
  };

  const handleRemainPoints = async () => {
    const remains = await ReserveAPI.RemainPoints(userInfo.email);
    console.log("잔액 : ", remains.data);
    console.log(duration * postData.postPrice);
    if (parseInt(remains.data) >= duration * postData.postPrice) {
      console.log(duration * postData.postPrice);
      console.log("이거 안먹어??", parseInt(remains.data));
      setShowModal(true);
    } else {
      console.log("여기로 오는거지 지금?");
      setShowNoPointModal(true);
    }
  };
  const handleConfirmNoPoint = () => {
    setShowNoPointModal(false);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  const handleConfirmReservation = async () => {
    try {
      const responseReserve = await ReserveAPI.InsertReserve(
        postId,
        userInfo.email,
        startDate,
        endDate,
        duration * postData.postPrice
      );
      console.log(responseReserve);

      setShowModal(false); // 예약 확인 모달 닫기
      setShowCompletedModal(true); // 예약 완료 모달 띄우기
    } catch (error) {
      console.error("예약 처리 중 오류 발생:", error);
    }
  };

  const closeCompletedModal = () => {
    setShowCompletedModal(false); // 예약 완료 모달 닫기
    window.location.reload(); // 페이지 새로고침
  };
  const handleActivation = async () => {
    console.log(!postData.postDisable);
    const response = await PostAPI.UpdateActivation(
      !postData.postDisable,
      postId
    );
    window.location.reload();
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
            {imgData && imgData.length > 1 ? (
              <>
                <Swiper
                  navigation={{
                    nextEl: ".next",
                    prevEl: ".prev",
                  }}
                  pagination={{
                    type: "fraction",
                  }}
                  modules={[Navigation, Pagination]}
                  loop={true}
                  slidesPerView={1}
                  simulateTouch={true}
                >
                  {imgData.map((imgfile, index) => (
                    <SwiperSlide key={index}>
                      <ImgDownloader imgfile={imgfile} height={"97%"} />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <ButtonContainer>
                  <Button className="prev" />
                  <Button className="next" />
                </ButtonContainer>
              </>
            ) : imgData && imgData.length === 1 ? (
              <ImgDownloader
                imgfile={imgData[0]}
                height={"97%"}
                postDisable={postData.postDisable}
              />
            ) : (
              <p>이미지가 없습니다.</p>
            )}
          </div>
          <div
            className="post-content-user"
            onClick={() => navigate(`/userProfile?email=${writerData.email}`)}
          >
            <ProfileImgDownloader
              imgfile={writerData.profileImg}
              width="40px"
              height="40px"
            />
            <div className="post-content-userinfo">
              <p className="post-content-nick">{writerData.nickname}</p>
              <p className="post-content-region">{writerData.areaCode}</p>
            </div>
            <div className="post-content-temp">
              <ProfileFireImg
                className="temp-img"
                score={writerData.score}
                height={"40px"}
              />
              <p>
                {((300.0 + parseInt(writerData.score)) / 10.0).toFixed(1)} ℃
              </p>
            </div>
          </div>
        </div>
        <div className="post-content-reserve">
          <p className="post-content-title">
            {postData.postTitle}
            {writerData.email === userInfo.email && (
              <button
                className={`activate-button ${
                  postData.postDisable ? "enabled" : "disabled"
                }`}
                onClick={handleActivation}
              >
                {postData.postDisable ? "활성화" : "비활성화"}
              </button>
            )}
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
            <ReserveButton
              disabled={!endDate || postData.postDisable}
              onClick={handleRemainPoints}
            >
              예약하기
            </ReserveButton>
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
          <>
            <ViewItemInfo postData={postData} />
            <ViewReview reviewData={reviewData} />
          </>
        )}
        {selectedTab === "사용자 리뷰" && (
          <ViewReview reviewData={reviewData} />
        )}
      </PostContentBottom>
      {showNoPointModal && (
        <PostContentNoPointModal onConfirm={handleConfirmNoPoint} />
      )}
      {showModal && (
        <PostContentConfirmModal
          className="post-reserve-modal"
          StartTime={startDate.toLocaleString()}
          EndTime={endDate.toLocaleString()}
          Point={postData.postPrice}
          Duration={duration}
          onConfirm={handleConfirmReservation}
          onClose={closeModal}
        />
      )}

      {showCompletedModal && (
        <PostContentModal
          className="post-completed-modal"
          onClose={closeCompletedModal}
        />
      )}
      <FooterCom />
    </Container>
  );
};

export default PostContent;
