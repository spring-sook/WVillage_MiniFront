import {
  MyReserveContainer,
  Reserves,
  ReserveHeader,
  Modal,
} from "../../styles/MyReserveStyled";
import { PostsContainer } from "../../components/PostListComponent";
import { ReserveItem } from "../../components/PostItemComponent";
import { useParams } from "react-router-dom";
import { useState } from "react";

export const MyReserve = () => {
  const [selectState, setSelectState] = useState("전체");
  //모달
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");
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
  ];

  // 나쁜 리뷰 태그 (10개)
  const badReviewTags = [
    "또 거래하고 싶어요",
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

  const handleItemClick = (state) => {
    if (state === "거래완료") {
      setModalContent("리뷰 태그를 선택 해 주세요."); // 모달 내용 설정
      setShowModal(true); // 모달 표시
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedReviewType("좋은 리뷰");
    setModalContent("");
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
            <span className="sort-menu" onClick={() => setSelectState("전체")}>
              전체
            </span>
            <span className="line">|</span>
            <span
              className="sort-menu"
              onClick={() => setSelectState("예약완료")}
            >
              예약완료
            </span>
            <span className="line">|</span>
            <span
              className="sort-menu"
              onClick={() => setSelectState("예약대기")}
            >
              예약대기
            </span>
            <span className="line">|</span>
            <span
              className="sort-menu"
              onClick={() => setSelectState("거래완료")}
            >
              거래완료
            </span>
            <span className="line">|</span>
            <span
              className="sort-menu"
              onClick={() => setSelectState("예약취소")}
            >
              예약취소
            </span>
            <span className="line">|</span>
            <span
              className="sort-menu"
              onClick={() => setSelectState("예약거절")}
            >
              예약거절
            </span>
          </div>
        </ReserveHeader>
        <PostsContainer>
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
        </PostsContainer>
      </Reserves>
      {showModal && (
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
              <button onClick={closeModal}>완료</button>
              <button onClick={closeModal}>취소</button>
            </div>
          </div>
        </Modal>
      )}
    </MyReserveContainer>
  );
};
