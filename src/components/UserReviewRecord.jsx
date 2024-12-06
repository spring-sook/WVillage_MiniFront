import {useEffect, useState} from "react";
import styled from "styled-components";
import UserProfileAPI from "../api/OtherUserProfileAPI";

const ReviewLst = styled.ul`
    list-style: none;
`;

const ReviewLstBox = styled.div`
    width: 300px;
    flex-grow: 0.9;
    background-color: #61dafb;
    position: relative;
    overflow-y: scroll;

    /* 전체 스크롤바 */
    &::-webkit-scrollbar {
        width: 12px; /* 세로 스크롤바의 너비 */
        height: 12px; /* 가로 스크롤바의 높이 */
    }

    /* 스크롤바의 트랙 */
    &::-webkit-scrollbar-track {
        background: #f1f1f1; /* 트랙의 배경색 */
        border-radius: 10px; /* 트랙의 모서리 둥글게 */
    }

    /* 드래그 가능한 부분 */
    &::-webkit-scrollbar-thumb {
        background: #3b80cd; /* 드래그 가능한 부분의 색상 */
        border-radius: 10px; /* 드래그 부분의 모서리 둥글게 */
    }

    /* 드래그 가능한 부분에 마우스를 올렸을 때 */
    &::-webkit-scrollbar-thumb:hover {
        background: #555; /* 마우스를 올렸을 때의 색상 */
    }
`;


export const UserReviewRecord = ({email}) => {
  const [reviews, setReviews] = useState("");

  // useEffect(() => {
  //   const getReviews = async () => {
  //     try {
  //       const response = await UserProfileAPI.reviewList(email)
  //       console.log(response.data)
  //       setReviews(response.data);
  //     } catch (e) {
  //       alert(e);
  //     }
  //   }
  //   getReviews();
  // }, []);

  return (
    <ReviewLstBox>
      <ReviewLst>
        {reviews && reviews.map((e, idx) => (
          <li key={idx}>{e.content}, {e.count}</li>
        ))}
      </ReviewLst>
    </ReviewLstBox>
  );
}