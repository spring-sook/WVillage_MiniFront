import { PostsContainer } from "../../components/PostListComponent";
import { ReserveItem } from "../../components/PostItemComponent";

import {
  MyResManageContainer,
  ResManage,
  ReserveManageHeader,
  Modal,
  ReviewTag,
  ReservationPendingBtn,
} from "../../styles/MyResManageStyled";
import { useState } from "react";

export const MyResManage = () => {
  const [selectState, setSelectState] = useState("전체");
  const [modalType, setModalType] = useState(null);
  const [currentItem, setCurrentItem] = useState(null); // 현재 선택한 예약 데이터
  const [rejectionReason, setRejectionReason] = useState(""); // 예약거절 사유
  const [cancelReason, setCancelReason] = useState(""); // 예약취소 사유
  const [rejectionReasonVisible, setRejectionReasonVisible] = useState(false); // 거절 사유 입력창 보이기/숨기기

  // 상태별 데이터 필터링
  const reserveData = [
    { state: "예약대기", id: 1 },
    { state: "예약완료", id: 2 },
    { state: "예약거절", id: 3 },
    { state: "거래완료", id: 4, tags: ["친절", "빠른 처리", "상태 좋음"] },
    { state: "예약취소", id: 5, reason: "사용자가 취소 요청" },
  ];

  const filteredData = () => {
    switch (selectState) {
      case "전체":
        return reserveData;
      case "승인대기":
        return reserveData.filter((item) => item.state === "예약대기");
      case "승인완료":
        return reserveData.filter(
          (item) => item.state === "예약완료" || item.state === "예약거절"
        );
      case "거래완료":
        return reserveData.filter((item) => item.state === "거래완료");
      case "예약취소":
        return reserveData.filter((item) => item.state === "예약취소");
      default:
        return [];
    }
  };

  // 상태별 액션 처리
  const handleStateAction = (item) => {
    if (item.state === "예약대기") {
      setCurrentItem(item);
      setModalType("reservationPending");
    } else if (item.state === "예약취소") {
      setCancelReason(item.reason || "취소 사유 없음");
      setModalType("reservationCancel");
    } else if (item.state === "거래완료") {
      setCurrentItem(item);
      setModalType("transactionComplete");
    }
  };

  // 모달 닫기
  const closeModal = () => {
    setModalType(null);
    setRejectionReason("");
    setCurrentItem(null);
    setRejectionReasonVisible(false); // 거절 사유 입력창 초기화
  };

  // 예약 상태 변경
  const confirmReservation = () => {
    console.log(`예약 ID ${currentItem.id}: 예약완료로 변경`);
    closeModal();
  };

  // 예약 거절 처리
  const rejectReservation = () => {
    setRejectionReasonVisible(true); // 예약 거절 입력창 보이기
  };

  // 예약 거절 완료
  const completeRejection = () => {
    if (rejectionReason.trim()) {
      console.log(
        `예약 ID ${currentItem.id}: 예약거절로 변경, 사유: ${rejectionReason}`
      );
      closeModal();
    } else {
      alert("예약거절 사유를 작성해주세요.");
    }
  };

  return (
    <MyResManageContainer>
      <ResManage>
        <ReserveManageHeader>
          <div>
            <span
              className={`sort-menu ${
                selectState !== "전체" ? "disabled" : ""
              }`}
              onClick={() => setSelectState("전체")}
            >
              전체
            </span>
            <span className="line">|</span>
            <span
              className={`sort-menu ${
                selectState !== "승인대기" ? "disabled" : ""
              }`}
              onClick={() => setSelectState("승인대기")}
            >
              승인대기
            </span>
            <span className="line">|</span>
            <span
              className={`sort-menu ${
                selectState !== "승인완료" ? "disabled" : ""
              }`}
              onClick={() => setSelectState("승인완료")}
            >
              승인완료
            </span>
            <span className="line">|</span>
            <span
              className={`sort-menu ${
                selectState !== "거래완료" ? "disabled" : ""
              }`}
              onClick={() => setSelectState("거래완료")}
            >
              거래완료
            </span>
            <span className="line">|</span>
            <span
              className={`sort-menu ${
                selectState !== "예약취소" ? "disabled" : ""
              }`}
              onClick={() => setSelectState("예약취소")}
            >
              예약취소
            </span>
          </div>
        </ReserveManageHeader>
        <PostsContainer>
          {filteredData().map((item) => (
            <div key={item.id}>
              <ReserveItem
                state={item.state}
                onClick={() => handleStateAction(item)}
              />
              <hr />
            </div>
          ))}
        </PostsContainer>
      </ResManage>

      {/* 예약대기 모달 */}
      {modalType === "reservationPending" && (
        <Modal>
          <div className="modal-content">
            <h2>예약 상태 변경</h2>
            {/* 예약 거절 사유 입력창 */}
            {rejectionReasonVisible ? (
              <>
        <textarea
          placeholder="예약거절 사유를 작성해주세요."
          value={rejectionReason}
          onChange={(e) => setRejectionReason(e.target.value)}
        />
                <button onClick={completeRejection} className="confirm">
                  완료
                </button>
              </>
            ) : (
              <ReservationPendingBtn>
                <button onClick={confirmReservation} className="confirm">
                  예약완료로 변경
                </button>
                <button onClick={rejectReservation} className="cancel">
                  예약거절로 변경
                </button>
              </ReservationPendingBtn>
            )}
            <button onClick={closeModal} className="cancel">
              닫기
            </button>
          </div>
        </Modal>

      )}

      {/* 예약취소 모달 */}
      {modalType === "reservationCancel" && (
        <Modal>
          <div className="modal-content">
            <h2>예약취소 사유</h2>
            <p>{cancelReason}</p>
            <button onClick={closeModal} className="cancel">
              닫기
            </button>
          </div>
        </Modal>
      )}
      {/* 거래완료 모달 */}
      {modalType === "transactionComplete" && (
        <Modal>
          <div className="modal-content">
            <h2>거래완료 - 리뷰 태그</h2>
            <p>리뷰 태그:</p>
            {/* currentItem.tags가 있을 경우, 이를 반복해서 출력 */}
            {currentItem.tags && currentItem.tags.length > 0 ? (
              <div>
                {currentItem.tags.map((tag, index) => (
                  <ReviewTag
                    key={index}
                    className={`${
                      tag === "친절" ? "good-review" : "bad-review"
                    }`} // tag 값에 따라 스타일을 다르게 적용할 수 있습니다.
                  >
                    {tag}
                  </ReviewTag>
                ))}
              </div>
            ) : (
              <p>아직 리뷰가 존재하지 않습니다.</p>
            )}
            <button onClick={closeModal} className="cancel">
              닫기
            </button>
          </div>
        </Modal>
      )}
    </MyResManageContainer>
  );
};
