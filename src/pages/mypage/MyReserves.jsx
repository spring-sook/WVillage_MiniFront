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
import { UserContext } from "../../context/UserStore";

export const MyReserve = () => {
  const { userInfo } = useContext(UserContext);
  const [selectState, setSelectState] = useState("전체");
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalType, setModalType] = useState(null);
  const [posts, setPosts] = useState([]);

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
      console.log("예약 : ", transformedData);
    };
    getMyReserves();
  }, []);

  const handleItemClick = (state) => {
    if (state === "거래완료") {
      setModalType("reservationCancle");
      setModalContent("리뷰 태그를 선택 해 주세요."); // 모달 내용 설정
      setShowModal(true); // 모달 표시
    } else if (state === "예약대기") {
      setModalType("reservationComplete");
      setModalContent("예약을 취소하시겠습니까?");
      setShowModal(true); // 모달 표시
    } else if (state === "예약완료") {
      setModalType("reservationComplete");
      setModalContent("예약을 취소하시겠습니까?");
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
                    state={post.reserve.reserveState}
                    onClick={() => handleItemClick(post.reserve.reserveState)}
                  />
                  <hr />
                </div>
              ))}
        </PostsContainer>
      </Reserves>

      {/* 거래완료 모달 */}
      {modalType === "reservationComplete" ||
        (showModal && (
          <Modal>
            <div className="modal-content">
              <h2>{modalContent}</h2>
              <p>※태그는 최대 6개까지 선택 가능합니다.</p>
              <div className="review-type-buttons">
                <button
                  className={
                    selectedReviewType === "좋은 리뷰" ? "selected" : ""
                  }
                  onClick={() => switchReviewType("좋은 리뷰")}
                >
                  좋은 리뷰
                </button>
                <button
                  className={
                    selectedReviewType === "나쁜 리뷰" ? "selected" : ""
                  }
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
        ))}
      {/* 예약취소 모달 */}
      {modalType === "reservationCancle" ||
        (showModal && (
          <Modal>
            <div className="modal-content">
              <h2>{modalContent}</h2>

              <div className="modal-buttons">
                <button onClick={closeModal}>완료</button>
                <button onClick={closeModal}>취소</button>
              </div>
            </div>
          </Modal>
        ))}
    </MyReserveContainer>
  );
};
