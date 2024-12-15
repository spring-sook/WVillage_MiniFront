import {useState, useEffect} from "react";
import {ProfileImgDownloader} from "./Profile";
import {
  UserProfileBox,
  Button,
  Modal,
  ModalContent,
  TextArea,
  Review,
} from "../styles/OtherUserStyled";
import UserProfileAPI from "../api/OtherUserProfileAPI";
import fire1 from "../../src/images/fire1.jpg";
import fire2 from "../../src/images/fire2.jpg";
import fire3 from "../../src/images/fire3.jpg";
import fire4 from "../../src/images/fire4.jpg";
import fire5 from "../../src/images/fire5.jpg";
import fire6 from "../../src/images/fire6.jpg";
import ReportAPI from "../api/ReportAPI";

export const OtherUser = ({email}) => {
  const [userProfile, setUserProfile] = useState(null); // 유저 프로필 정보 상태
  const [isModalOpen, setModalOpen] = useState(false);
  const [reportReason, setReportReason] = useState(""); // 신고 사유 상태
  const [isReported, setIsReported] = useState(false); // 신고 완료 여부 상태
  const [loading, setLoading] = useState(true); // 로딩 상태
  const [reviews, setReviews] = useState([]); // 리뷰 데이터 상태

  // API 호출: 상대 유저 정보를 가져오기
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        setLoading(true); // 로딩 시작
        const response = await UserProfileAPI.getOtherUserProfile(email); // API 호출
        setUserProfile(response.data); // 상태에 유저 정보 저장
        console.log(">>>", response.data);

        const reviewsResponse = await UserProfileAPI.getReviewList(email); // 리뷰 데이터 가져오기
        setReviews(reviewsResponse.data);
      } catch (error) {
        console.error("유저 정보를 가져오는 데 실패했습니다.", error);
      } finally {
        setLoading(false); // 로딩 종료
      }
    };

    fetchUserProfile();
  }, [email]);

  // 온도 이미지를 결정하는 함수
  const getTemperatureImage = (temperature) => {
    if (temperature >= 0 && temperature <= 10) {
      return fire1;
    } else if (temperature >= 11 && temperature <= 30) {
      return fire2;
    } else if (temperature > 30 && temperature <= 50) {
      return fire3;
    } else if (temperature > 50 && temperature <= 70) {
      return fire4;
    } else if (temperature > 70 && temperature <= 90) {
      return fire5;
    } else {
      return fire6;
    }
  };

  // 유저 정보가 로드되지 않은 경우 로딩 표시
  if (loading) {
    return <div>Loading...</div>;
  }

  // SCORE로 temperature 계산
  const temperature = (300.0 + parseInt(userProfile.score)) / 10.0;
  const temperatureImage = getTemperatureImage(temperature);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const handleReportChange = (event) => {
    setReportReason(event.target.value);
  };

  const handleReportSubmit = async () => {
    if (!reportReason || reportReason.trim() === "") {
      alert("신고 사유를 작성해 주세요.");
      return;
    }

    try {
      const reportData = {
        reporterEmail: email, // 신고한 사람의 이메일 (props로 전달받은 email)
        reportedEmail: userProfile.email, // 신고당한 사람의 이메일 (userProfile에서 가져옴)
        reportContent: reportReason, // 신고 사유
      };

      const success = await ReportAPI.insertReport(reportData); // ReportAPI 사용 (원래 insert 용도)

      if (success) {
        setIsReported(true);
        setReportReason(""); // 신고 완료 후 input 초기화
      } else {
        alert("신고 처리에 실패했습니다.");
      }
    } catch (error) {
      console.error("신고 처리 중 오류 발생:", error);
      alert("신고 처리 중 오류가 발생했습니다.");
    }
  };

  const handleModalClose = () => {
    setIsReported(false);
    setModalOpen(false);
    setReportReason("");
  };

  return (
    <>
      <UserProfileBox>
        <div className="box">
          <div className="userInfo">
            <ProfileImgDownloader
              imgfile={userProfile.PROFILE_IMG} // DB에서 가져온 프로필 이미지
              width="120px"
              height="120px"
            />
            <h4>{userProfile.nickname}</h4> {/* DB에서 가져온 닉네임 */}
          </div>
          <div className="temp">
            <img
              src={temperatureImage}
              alt="온도 이미지"
              className="temperature-image"
            />
            <div className="gauge">
              <p>{temperature.toFixed(1)} ℃</p> {/* 온도 표시 */}
            </div>
          </div>
          <Review>
            <div className="container">
              {reviews.map((item, index) => ( // reviews 데이터 렌더링
                <div key={index} className="review-item">
                  <span className="review-tag"
                        style={{borderColor: item.reviewScore > 0 ? '#a4d8b9' : item.reviewScore < 0 ? '#ecb1ab' : 'black'}}>
                    {item.reviewContent}
                  </span>
                  <span className="review-count">({item.recordCount}개)</span>
                </div>
              ))}
            </div>
          </Review>
          <Button onClick={toggleModal}>신고하기</Button>
        </div>
      </UserProfileBox>
      {isModalOpen && !isReported && (
        <Modal>
          <ModalContent>
            <h2>신고하기</h2>
            <p>상대유저를 신고하시겠습니까?</p>
            <TextArea
              value={reportReason}
              onChange={handleReportChange}
              placeholder="신고 사유를 작성하세요..."
            />
            <div className="ReportButton">
              <Button
                onClick={handleReportSubmit}
                disabled={reportReason.trim() === ""}
              >
                신고
              </Button>
              <Button onClick={toggleModal}>닫기</Button>
            </div>
          </ModalContent>
        </Modal>
      )}
      {isReported && (
        <Modal>
          <ModalContent>
            <h2>신고가 완료되었습니다.</h2>
            <div className="ReportButton">
              <Button onClick={handleModalClose}>닫기</Button>
            </div>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default OtherUser;
