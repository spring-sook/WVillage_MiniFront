import styled from "styled-components";
import {
  ReserveItemThumbnail,
  ReserveItemInfo,
  ReserveItemContainer,
  ReserveState,
} from "../styles/MyReserveStyled";
import { ImgDownloader } from "./ImgComponent";
import { useNavigate } from "react-router-dom";
import PostAPI from "../api/PostAPI";

const PostItemStyled = styled.div`
  width: ${(props) => props.width || "225px"};
  height: ${(props) => props.height || "300px"};
  margin: ${(props) => props.margin || "10px"};
  background-color: white;
  cursor: pointer;

  h3 {
    font-size: ${(props) => props.fontSize || "16px"};
    white-space: nowrap; /* 텍스트가 한 줄로만 표시되게 함 */
    overflow: hidden; /* 텍스트가 넘치면 숨김 처리 */
    text-overflow: ellipsis; /* 넘치는 텍스트를 '...'으로 표시 */
  }

  .price {
    font-size: ${(props) => props.priceFontSize || "14px"};
    margin: 3px 0;
  }

  .region {
    font-size: ${(props) => props.regionFontSize || "12px"};
    color: #444;
  }
`;

export const PostItem = ({
  thumbnail,
  title,
  price,
  postRegion,
  postLocation,
  postId,
  post,
  width,
  height,
  fontSize,
  priceFontSize,
  regionFontSize,
  margin,
  priceMargin,
}) => {
  const navigate = useNavigate();
  const handleOnClick = async () => {
    try {
      await PostAPI.PostView(postId);
      navigate(`/post/${postId}`, { state: { post } });
    } catch (error) {
      console.error("PostView 실행 중 오류 발생:", error);
    }
  };
  return (
    <PostItemStyled
      width={width}
      height={height}
      fontSize={fontSize}
      priceFontSize={priceFontSize}
      regionFontSize={regionFontSize}
      margin={margin}
      priceMargin={priceMargin}
      onClick={handleOnClick}
    >
      <ImgDownloader imgfile={thumbnail} />
      <h3>{title}</h3>
      <p className="price">{price.toLocaleString()} 원</p>
      <p className="region">{postRegion}</p>
      <p className="region">{postLocation}</p>
    </PostItemStyled>
  );
};

export const ReserveItem = ({ thumbnail, title, region, state, onClick }) => {
  return (
    <ReserveItemContainer>
      <ReserveItemThumbnail>
        {thumbnail && <ImgDownloader imgfile={thumbnail} height={"100%"} />}
      </ReserveItemThumbnail>
      <ReserveItemInfo>
        <p className="reserve-item-info-title">{title || "제목 입니다."}</p>
        <p className="reserve-item-info-region">{region || "지역 입니다."}</p>
      </ReserveItemInfo>
      <ReserveState
        state={state}
        onClick={() => onClick && onClick(state)} // ReserveState에 클릭 핸들러 추가
        style={{ cursor: "pointer" }} // 클릭 가능 표시
      >
        {state || "상태 영역"}
      </ReserveState>{" "}
    </ReserveItemContainer>
  );
};
