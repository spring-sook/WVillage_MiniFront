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