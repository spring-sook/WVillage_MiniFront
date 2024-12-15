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
import { useState, useContext, useEffect } from "react";
import { UserContext } from "../../context/UserStore";
import ReserveAPI from "../../api/ReserveAPI";

export const MyResManage = () => {
  const { userInfo } = useContext(UserContext);
  const [selectState, setSelectState] = useState("전체");
  const [modalType, setModalType] = useState(null);
  const [currentItem, setCurrentItem] = useState(null); // 현재 선택한 예약 데이터
  const [rejectionReason, setRejectionReason] = useState(""); // 예약거절 사유
  const [cancelReason, setCancelReason] = useState(""); // 예약취소 사유
  const [rejectionReasonVisible, setRejectionReasonVisible] = useState(false); // 거절 사유 입력창 보이기/숨기기
  const [posts, setPosts] = useState([]);
  const [waitCnt, setWaitCnt] = useState(0);

  useEffect(() => {
    const getMyReserves = async () => {
      const responseMyRes = await ReserveAPI.GetMyResManage(userInfo.email);
      const reserveStateMapping = {
        wait: "예약대기",
        accept: "예약완료",
        deny: "예약거절",
        complete: "거래완료",
        cancel: "예약취소",
      };
      const transformedData = responseMyRes.data.map((item) => ({
        ...item,
        reserve: {
          ...item.reserve,
          reserveState:
            reserveStateMapping[item.reserve.reserveState] || "알 수 없음",
        },
      }));
      setPosts(transformedData);
      console.log("예약 관리 : ", transformedData);

      const waitings = transformedData.filter(
        (item) => item.reserve.reserveState === "예약대기"
      );
      setWaitCnt(waitings.length);
    };
    getMyReserves();
  }, []);

  // 대기 수가 변경될때마다 전체변수에 반영되야되는데, 그럴라면.. 로그인 했을때 그냥 개수 받아오는 로직 하나 짜는게 나을듯.
  // 로그인하고 userInfo에 넣어두기

  // 상태별 데이터 필터링
  const reserveData = [
    { state: "예약대기", id: 1 },
    { state: "예약완료", id: 2 },
    { state: "예약거절", id: 3 },
    { state: "거래완료", id: 4, tags: ["친절", "빠른 처리", "상태 좋음"] },
    { state: "예약취소", id: 5, reason: "여기에 취소사유 작성" },
  ];

  const filteredData = () => {
    const reserveStateMapping = {
      전체: () => posts,
      승인대기: () =>
        posts.filter((post) => post.reserve.reserveState === "예약대기"),
      승인완료: () =>
        posts.filter((post) => post.reserve.reserveState === "예약완료"),
      거래완료: () =>
        posts.filter((post) => post.reserve.reserveState === "거래완료"),
      예약취소: () =>
        posts.filter(
          (post) =>
            post.reserve.reserveState === "예약취소" ||
            post.reserve.reserveState === "예약거절"
        ),
    };

    return reserveStateMapping[selectState]?.() || [];
  };

  // 상태별 액션 처리
  const handleStateAction = (item) => {
    if (item.reserve.reserveState === "예약대기") {
      setCurrentItem(item);
      setModalType("reservationPending");
    } else if (item.reserve.reserveState === "예약취소") {
      setCancelReason(item.reserve.reserveReason);
      setModalType("reservationCancel");
    } else if (item.reserve.reserveState === "거래완료") {
      setCurrentItem(item);
      setModalType("transactionComplete");
    } else if (item.reserve.reserveState === "예약거절") {
      setCancelReason(item.reserve.reserveReason);
      setModalType("reservationCancel");
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
  const confirmReservation = async () => {
    try {
      const res = await ReserveAPI.ReserveComplete(
        "complete",
        currentItem.reserve.reserveId
      );

      if (res.status === 200) { // 요청이 성공했을 경우
        setPosts(prevPosts =>
          prevPosts.map(post =>
            post.reserve.reserveId === currentItem.reserve.reserveId
              ? {
                ...post,
                reserve: { ...post.reserve, reserveState: "거래완료" },
              }
              : post
          )
        );
        closeModal(); // 모달 닫기
        setWaitCnt(prevCnt => prevCnt > 0 ? prevCnt -1 : prevCnt); // 대기중인 예약 개수 감소
      } else{
        console.error("예약 완료 요청 실패:", res);
        alert("예약 완료에 실패했습니다.");
      }
    } catch (error) {
      console.error("예약 완료 처리 중 오류 발생:", error);
      alert("예약 완료 처리 중 오류가 발생했습니다.");
    }
  };

  // 예약 거절 처리
  const rejectReservation = () => {
    setRejectionReasonVisible(true); // 예약 거절 입력창 보이기
  };

  // 예약 거절 완료
  const completeRejection = async () => {
    if (rejectionReason.trim()) {
      try{
        const res = await ReserveAPI.ReserveDeny(
          "deny",
          rejectionReason.replace(/\n/g, "<br>"),
          currentItem.reserve.reserveId
        );
        if (res.status === 200) {
          setPosts(prevPosts =>
            prevPosts.map(post =>
              post.reserve.reserveId === currentItem.reserve.reserveId
                ? {
                  ...post,
                  reserve: { ...post.reserve, reserveState: "예약거절", reserveReason: rejectionReason },
                }
                : post
            )
          );
          closeModal();
        } else{
          console.error("예약 거절 요청 실패:", res);
          alert("예약 거절에 실패했습니다.");
        }

      }catch(error){
        console.error("예약 거절 처리 중 오류 발생:", error);
        alert("예약 거절 처리 중 오류가 발생했습니다.");
      }
    } else {
      alert("예약거절 사유를 작성해주세요.");
    }
  };

  return (
    <MyResManageContainer>
      <ResManage>
        <ReserveManageHeader>
          <div>
            {waitCnt !== 0 ? (
              <span className="header-alarm">{waitCnt}</span>
            ) : null}
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
          {filteredData().map((post, index) => {
            // 현재 시간을 가져오기
            const currentTime = new Date();

            // 예약 상태가 "거래완료"이고, 시작 시간이 현재 시간보다 늦으면 상태를 "예약완료"로 변경
            if (
              post.reserve.reserveState === "거래완료" &&
              new Date(post.reserve.reserveStart) > currentTime
            ) {
              post.reserve.reserveState = "예약완료";
            }

            return (
              <div key={index}>
                <ReserveItem
                  thumbnail={post.post.postThumbnail} // ReserveItem에 필요한 데이터 추가
                  title={post.post.postTitle}
                  region={post.post.postRegion}
                  location={post.post.postLocation}
                  startTime={post.reserve.reserveStart}
                  endTime={post.reserve.reserveEnd}
                  state={post.reserve.reserveState}
                  onStateClick={() => handleStateAction(post)}
                />
                <hr />
              </div>
            );
          })}
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
            {cancelReason ? (
              <div dangerouslySetInnerHTML={{ __html: cancelReason }} />
            ) : (
              <p>취소 사유가 작성되지 않았습니다.</p>
            )}
            <button onClick={closeModal} className="cancel">
              닫기
            </button>
          </div>
        </Modal>
      )}
      {/* 예약거절절 모달 */}
      {modalType === "reservationCancel" && (
        <Modal>
          <div className="modal-content">
            <h2>예약거절절 사유</h2>
            {cancelReason ? (
              <div dangerouslySetInnerHTML={{ __html: cancelReason }} />
            ) : (
              <p>거절 사유가 작성되지 않았습니다.</p>
            )}
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
            {/* currentItem.tags가 있을 경우, 이를 반복해서 출력 */}
            {currentItem.review.tagWithScore && currentItem.review.tagWithScore.length > 0 ? (
              <div className="review-tags">
                {currentItem.review.tagWithScore.map((tagWithScore, index) => (
                  <ReviewTag
                    key={index}
                    className={`${
                      tagWithScore.reviewScore > 0 ? "good-review" : "bad-review"
                    }`} // tag 값에 따라 스타일을 다르게 적용할 수 있습니다.
                  >
                    {tagWithScore.reviewContent}
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
