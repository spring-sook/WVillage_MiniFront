import {useEffect, useState} from "react";
import styled from "styled-components";
import UserProfileAPI from "../api/OtherUserProfileAPI";

const ReviewLst = styled.ul`
    list-style: none;
`;


export const UserReviewRecord = ({email}) => {
  const [reviews, setReviews] = useState("");

  useEffect(() => {
    const getReviews = async () => {
      try {
        const response = await UserProfileAPI.reviewList(email)
        console.log(response.data)
        setReviews(response.data);
      } catch (e) {
        alert(e);
      }
    }
    getReviews();
  }, []);

  return (
    <>
      <ReviewLst>
        {reviews && reviews.map((e, idx) => (
          <li key={idx}>{e.content}, {e.count}</li>
        ))}</ReviewLst>
    </>
  );
}