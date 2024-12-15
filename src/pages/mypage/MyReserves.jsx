import {
  MyReserveContainer,
  Reserves,
  ReserveHeader,
  Modal,
} from "../../styles/MyReserveStyled";
import { PostsContainer } from "../../components/PostListComponent";
import { ReserveItem } from "../../components/PostItemComponent";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import ReserveAPI from "../../api/ReserveAPI";
import ReviewAPI from "../../api/ReviewAPI";
import { UserContext } from "../../context/UserStore";

export const MyReserve = () => {
  const { userInfo } = useContext(UserContext);
  const [selectState, setSelectState] = useState("전체");
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalType, setModalType] = useState("");
  const [posts, setPosts] = useState([]);
  // const [reserveState, setReserveState] = useState("");
  const [reserveId, setReserveId] = useState("");
  const [cancelReason, setCancelReason] = useState("");

  const [selectedTags, setSelectedTags] = useState([]); // 선택된 태그 상태
  const [selectedReviewType, setSelectedReviewType] = useState("좋은 리뷰"); // 리뷰 타입 상태
  const goodReviewTags = [
    "깨끗해요",
    "친절해요",
    "상태가 좋아요",
    "설명과 실물이 동일해요",
    "승인이 빨라요",
    "약속시간을 잘 지켜요",
    "가격이 합리적이에요",
    "분위기가 좋아요",
    "안전해요",
    "응대가 세심해요",
    "또 거래하고 싶어요",
  ];

  // 나쁜 리뷰 태그 (10개)
  const badReviewTags = [
    "더러워요",
    "불친절해요",
    "낡았어요",
    "실물이 달라요",
    "승인이 느려요",
    "약속시간을 잘 안지켜요",
    "또 거래하고싶지 않아요",
    "가격이 비싸요",
    "설명이 부족해요",
  ];

  const allReviewTags = [...goodReviewTags, ...badReviewTags];

  const taggedReviewTags = allReviewTags.reduce((acc, tag, index) => {
    acc[`TAG_${index + 1}`] = tag;
    return acc;
  }, {});

  useEffect(() => {
    const getMyReserves = async () => {
      const responseMyRes = await ReserveAPI.MyReserveList(userInfo.email);
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
      console.log("예약 : ", transformedData);
    };
    getMyReserves();
  }, []);

  const handleItemClick = async (state, id, reserveReason) => {
    if (state === "거래완료") {
      // setReserveState("complete");
      const resIsReview = await ReviewAPI.IsReview(userInfo.email, id);
      if (resIsReview.data === false) {
        setReserveId(id);
        setModalType("reservationComplete");
        setModalContent("리뷰 태그를 선택 해 주세요."); // 모달 내용 설정
        setShowModal(true); // 모달 표시
      }
    } else if (state === "예약대기") {
      // setReserveState("wait");
      setReserveId(id);
      setModalType("reservationCancle");
      setModalContent("예약을 취소하시겠습니까?");
      setShowModal(true); // 모달 표시
    } else if (state === "예약완료") {
      // setReserveState("accept");
      setReserveId(id);
      setModalType("reservationCancle");
      setModalContent("예약을 취소하시겠습니까?");
      setShowModal(true); // 모달 표시
    } else if (state === "예약취소") {
      setReserveId(id);
      setModalType("viewCancelReason");
      setModalContent(reserveReason);
      setShowModal(true);
    } else if (state === "예약거절") {
      setReserveId(id);
      setModalType("viewDenyReason");
      setModalContent(reserveReason);
      setShowModal(true);
    }
  };
  const onConfirmClick = () => {
    setModalType("cancelReason"); // 모달 타입을 취소 사유로 변경
  };

  // 취소 사유 제출
  const submitCancelReason = async () => {
    const res = await ReserveAPI.ReserveCancel(
      "cancel",
      cancelReason.replace(/\n/g, "<br>"),
      reserveId
    );
    closeModal(); // 모달 닫기
    window.location.reload();
  };

  // 리뷰 등록
  const submitReview = async () => {
    const tagNumbers = selectedTags.map((tag) => {
      // taggedReviewTags에서 태그 번호를 찾음
      const tagNumber = Object.keys(taggedReviewTags).find(
        (key) => taggedReviewTags[key] === tag
      );
      return tagNumber; // 해당 TAG_x 번호 반환
    });
    // TAG 번호들을 ,로 이어붙인 문자열 생성
    const tagIdsString = tagNumbers.join(",");
    const resWrite = await ReviewAPI.WriteReview(
      userInfo.email,
      reserveId,
      tagIdsString
    );
    closeModal();
  };
  const closeModal = () => {
    setShowModal(false);
    setModalType("");
    setModalContent("");
    setReserveId("");
    setCancelReason("");
    // setReserveState("");
  };

  const toggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags((prevTags) => prevTags.filter((item) => item !== tag));
    } else if (selectedTags.length < 6) {
      setSelectedTags((prevTags) => [...prevTags, tag]);
    }
  };

  const switchReviewType = (type) => {
    setSelectedReviewType(type);
  };

  return (
    <MyReserveContainer>
      <Reserves>
        <ReserveHeader>
          <div>
            <span
              className={`sort-menu ${
                selectState !== "전체" ? "disabled" : ""
              }`}
              onClick={() => setSelectState("전체")}
            >
              {" "}
              전체
            </span>
            <span className="line">|</span>
            <span
              className={`sort-menu ${
                selectState !== "예약완료" ? "disabled" : ""
              }`}
              onClick={() => setSelectState("예약완료")}
            >
              예약완료
            </span>
            <span className="line">|</span>
            <span
              className={`sort-menu ${
                selectState !== "예약대기" ? "disabled" : ""
              }`}
              onClick={() => setSelectState("예약대기")}
            >
              예약대기
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
            <span className="line">|</span>
            <span
              className={`sort-menu ${
                selectState !== "예약거절" ? "disabled" : ""
              }`}
              onClick={() => setSelectState("예약거절")}
            >
              예약거절
            </span>
          </div>
        </ReserveHeader>
        {/* <PostsContainer>
          {selectState === "전체" && (
            <>
              {["예약대기", "예약완료", "예약거절", "거래완료", "예약취소"].map(
                (state, index) => (
                  <div key={index}>
                    <ReserveItem
                      state={state}
                      onClick={() => handleItemClick(state)}
                    />
                    <hr />
                  </div>
                )
              )}
            </>
          )}
          {selectState !== "전체" && (
            <ReserveItem
              state={selectState}
              onClick={() => handleItemClick(selectState)}
            />
          )}
        </PostsContainer> */}
        <PostsContainer>
          {posts &&
            posts
              .map((post) => {
                // 현재 시간을 가져오기
                const currentTime = new Date();

                // 거래완료 상태이지만 시작 시간이 현재 시간보다 늦다면 상태를 변경
                if (
                  post.reserve.reserveState === "거래완료" &&
                  new Date(post.reserve.reserveStart) > currentTime
                ) {
                  post.reserve.reserveState = "예약완료";
                }
                return post;
              })
              .filter((post) =>
                selectState === "전체"
                  ? true
                  : post.reserve.reserveState === selectState
              )
              .map((post, index) => (
                <div key={index}>
                  <ReserveItem
                    thumbnail={post.post.postThumbnail}
                    title={post.post.postTitle}
                    region={post.post.postRegion}
                    location={post.post.postLocation}
                    startTime={post.reserve.reserveStart}
                    endTime={post.reserve.reserveEnd}
                    state={post.reserve.reserveState}
                    onStateClick={() =>
                      handleItemClick(
                        post.reserve.reserveState,
                        post.reserve.reserveId,
                        post.reserve.reserveReason
                      )
                    }
                  />
                  <hr />
                </div>
              ))}
        </PostsContainer>
      </Reserves>
      {/* 거래완료 모달 */}
      {modalType === "reservationComplete" && showModal && (
        <Modal>
          <div className="modal-content">
            <h2>{modalContent}</h2>
            <p>※태그는 최대 6개까지 선택 가능합니다.</p>
            <div className="review-type-buttons">
              <button
                className={selectedReviewType === "좋은 리뷰" ? "selected" : ""}
                onClick={() => switchReviewType("좋은 리뷰")}
              >
                좋은 리뷰
              </button>
              <button
                className={selectedReviewType === "나쁜 리뷰" ? "selected" : ""}
                onClick={() => switchReviewType("나쁜 리뷰")}
              >
                나쁜 리뷰
              </button>
            </div>
            <div className="review-tags">
              {(selectedReviewType === "좋은 리뷰"
                ? goodReviewTags
                : badReviewTags
              ).map((tag) => (
                <span
                  key={tag}
                  className={`review-tag ${
                    selectedTags.includes(tag) ? "selected" : ""
                  } ${
                    selectedReviewType === "좋은 리뷰"
                      ? "good-review"
                      : "bad-review"
                  }`}
                  onClick={() => toggleTag(tag)}
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="selected-tags-list">
              <h3>선택 태그</h3>
              <div className="selected-tags">
                {selectedTags.map((tag, index) => (
                  <span
                    key={index}
                    className={`tag ${
                      goodReviewTags.includes(tag)
                        ? "good-review"
                        : "bad-review"
                    } ${selectedTags.includes(tag) ? "selected" : ""}`}
                    onClick={() => toggleTag(tag)}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="modal-buttons">
              <button onClick={submitReview}>완료</button>
              <button onClick={closeModal}>취소</button>
            </div>
          </div>
        </Modal>
      )}

      {/* 예약취소 모달 */}
      {modalType === "reservationCancle" && showModal && (
        <Modal>
          <div className="modal-content">
            <h2>{modalContent}</h2>
            <div className="modal-buttons">
              <button onClick={onConfirmClick}>완료</button>
              <button onClick={closeModal}>취소</button>
            </div>
          </div>
        </Modal>
      )}

      {/* 취소 사유 작성 모달 */}
      {modalType === "cancelReason" && showModal && (
        <Modal>
          <div className="modal-content">
            <h2>취소 사유를 작성해주세요</h2>
            <textarea
              placeholder="취소 사유를 입력하세요."
              value={cancelReason}
              onChange={(e) => setCancelReason(e.target.value)}
              style={{ width: "100%", height: "100px" }}
            />
            <div className="modal-buttons">
              <button
                onClick={submitCancelReason}
                disabled={cancelReason.length === 0}
              >
                제출
              </button>
              <button onClick={closeModal}>취소</button>
            </div>
          </div>
        </Modal>
      )}
      {modalType === "viewCancelReason" && showModal && (
        <Modal>
          <div className="modal-content">
            <h2>취소 사유</h2>
            {modalContent ? (
              <div dangerouslySetInnerHTML={{ __html: modalContent }} />
            ) : (
              <p>취소 사유가 작성되지 않았습니다.</p>
            )}
            <div className="modal-buttons">
              <button onClick={closeModal}>닫기</button>
            </div>
          </div>
        </Modal>
      )}
      {modalType === "viewDenyReason" && showModal && (
        <Modal>
          <div className="modal-content">
            <h2>거절절 사유</h2>
            {modalContent ? (
              <div dangerouslySetInnerHTML={{ __html: modalContent }} />
            ) : (
              <p>취소 사유가 작성되지 않았습니다.</p>
            )}
            <div className="modal-buttons">
              <button onClick={closeModal}>닫기</button>
            </div>
          </div>
        </Modal>
      )}
    </MyReserveContainer>
  );
};
