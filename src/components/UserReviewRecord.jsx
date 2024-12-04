import {useState} from "react";
import styled from "styled-components";

const ReviewLst = styled.ul`
    list-style: none;
`;


export const UserReviewRecord = () => {
  const [reviews, setReviews] = useState([]);

  return (
    <>
      <ul>
        {reviews && reviews.map((e, idx) => (
          <li key={idx}>{e.content} {e.count}</li>
        ))}</ul>
    </>
  );
}