import { useState, useEffect } from "react";
import { ProfileImgDownloader } from "./Profile";
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

export const OtherUser = ({ email }) => {
  const [userProfile, setUserProfile] = useState(null); // 유저 프로필 정보 상태
  const [isModalOpen, setModalOpen] = useState(false);
  const [reportReason, setReportReason] = useState(""); // 신고 사유 상태
  const [isReported, setIsReported] = useState(false); // 신고 완료 여부 상태
  const [loading, setLoading] = useState(true); // 로딩 상태

  // API 호출: 상대 유저 정보를 가져오기
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        setLoading(true); // 로딩 시작
        const response = await UserProfileAPI.getUserProfile(email); // API 호출
        setUserProfile(response.data); // 상태에 유저 정보 저장
        console.log(">>>", response.data);
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
  const handleReportSubmit = () => {
    if (!reportReason || reportReason.trim() === "") {
      alert("신고 사유를 작성해 주세요.");
      return;
    }

    setIsReported(true);
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
              {[
                { tag: "친절해요", count: 10, id: "good" },
                { tag: "시간엄수", count: 8, id: "good" },
                { tag: "상품좋아요", count: 12, id: "good" },
                { tag: "싫어요", count: 5, id: "bad" },
                { tag: "별로에요", count: 9, id: "bad" },
                { tag: "짜증나요", count: 7, id: "bad" },
              ].map((item, index) => (
                <div key={index} className="review-item">
                  <span className={`review-tag ${item.id}`}>{item.tag}</span>
                  <span className="review-count">({item.count}개)</span>
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
