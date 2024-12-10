import styled from "styled-components";
import {
  ReserveItemThumbnail,
  ReserveItemInfo,
  ReserveItemContainer,
  ReserveState,
} from "../styles/MyReserveStyled";
import { ImgDownloader } from "./ImgComponent";

const PostItemStyled = styled.div`
  width: 225px;
  height: 300px;
  margin: 10px;
  background-color: white;
  cursor: pointer;

  h3 {
    white-space: nowrap; /* 텍스트가 한 줄로만 표시되게 함 */
    overflow: hidden; /* 텍스트가 넘치면 숨김 처리 */
    text-overflow: ellipsis; /* 넘치는 텍스트를 '...'으로 표시 */
  }

  .price {
    font-size: 16px;
    margin: 3px 0;
  }

  .region {
    font-size: 14px;
  }
`;

export const PostItem = ({ thumbnail, title, price, region }) => {
  return (
    <PostItemStyled>
      <ImgDownloader imgfile={thumbnail} />
      <h3>{title}</h3>
      <p className="price">{price.toLocaleString()} 원</p>
      <p className="region">{region}</p>
    </PostItemStyled>
  );
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
