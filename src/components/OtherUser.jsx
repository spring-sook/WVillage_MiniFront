import { ProfileImgDownloader } from "./Profile";
import {
  UserProfileBox,
  Button,
  Modal,
  ModalContent,
  TextArea,
  Review,
} from "../styles/OtherUserStyled";
import fire1 from "../../src/images/fire1.jpg";
import fire2 from "../../src/images/fire2.jpg";
import fire3 from "../../src/images/fire3.jpg";
import fire4 from "../../src/images/fire4.jpg";
import fire5 from "../../src/images/fire5.jpg";
import fire6 from "../../src/images/fire6.jpg";
import { useState } from "react";

export const OtherUser = ({ email }) => {
  const imagePath = "snow_village.webp";

  const temperature = 10; /*(300.0 + parseInt(userInfo.score)) / 10.0*/
  let temperatureImage = fire1; // 기본 이미지를 설정 (기본값)

  if (temperature >= 0 && temperature <= 10) {
    temperatureImage = fire1;
  } else if (temperature >= 11 && temperature <= 30) {
    temperatureImage = fire2;
  } else if (temperature > 30 && temperature <= 50) {
    temperatureImage = fire3;
  } else if (temperature > 50 && temperature <= 70) {
    temperatureImage = fire4;
  } else if (temperature > 70 && temperature <= 90) {
    temperatureImage = fire5;
  } else if (temperature > 90) {
    temperatureImage = fire6;
  }
  const [isModalOpen, setModalOpen] = useState(false);
  const [reportReason, setReportReason] = useState(""); // 신고 사유 상태
  const [isReported, setIsReported] = useState(false); // 신고 완료 여부 상태

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };
  const handleReportChange = (event) => {
    setReportReason(event.target.value); // 신고 사유 변경 시 상태 업데이트
  };
  const handleReportSubmit = () => {
    if (!reportReason || reportReason.trim() === "") {
      alert("신고 사유를 작성해 주세요."); // 신고 사유가 비어 있으면 알림
      return;
    }

    // 신고 완료 상태 설정
    setIsReported(true);
  };

  const handleModalClose = () => {
    setIsReported(false); // 신고 완료 후 모달을 닫을 때 초기화
    setModalOpen(false); // 모달 닫기
    setReportReason("");
  };

  return (
    <>
      <UserProfileBox>
        <div className="box">
          <div className="userInfo">
            <ProfileImgDownloader
              imgfile={imagePath}
              width="120px"
              height="120px"
            />
            <h4>상대유저명</h4>
          </div>
          <div className="temp">
            <img
              src={temperatureImage}
              alt="온도 이미지"
              className="temperature-image"
            />
            <div className="gauge">
              <p>{temperature} ℃</p>
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
                  <span className="review-count">{item.count}개</span>
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

            {/* 신고 사유 입력 칸 */}
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
