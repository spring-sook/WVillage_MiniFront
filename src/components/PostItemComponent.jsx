import styled from "styled-components";
import {
  ReserveItemThumbnail,
  ReserveItemInfo,
  ReserveItemContainer,
  ReserveState,
} from "../styles/MyReserveStyled";

const PostItemStyled = styled.div`
  width: 200px;
  height: 300px;
  margin: 10px;
  background-color: white;
`;

export const PostItem = ({ thumbnail, title, price, region }) => {
  return <PostItemStyled>{}</PostItemStyled>;
};

export const ReserveItem = ({ thumbnail, title, region, state }) => {
  return (
    <ReserveItemContainer>
      <ReserveItemThumbnail>{thumbnail}</ReserveItemThumbnail>
      <ReserveItemInfo>
        <p className="reserve-item-info-title">{title || "제목 입니다."}</p>
        <p className="reserve-item-info-region">{region || "지역 입니다."}</p>
      </ReserveItemInfo>
      <ReserveState state={state}>{state || "상태 영역"}</ReserveState>
    </ReserveItemContainer>
  );
};
