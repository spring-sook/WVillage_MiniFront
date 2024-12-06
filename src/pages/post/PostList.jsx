import { useState } from "react";
import { Container } from "../../styles/GlobalStyled";
import resetIcon from "../../images/reset_icon.png";
import {
  PostBody,
  PostMainFilter,
  PostMainList,
  PostDisplay,
} from "../../styles/PostStyled";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { ko } from "date-fns/locale";
import { HeaderCom, FooterCom } from "../../components/GlobalComponent";
import { useNavigate, useSearchParams } from "react-router-dom";

const PostList = () => {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isDropdownView, setDropdownView] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const searchKeyword = searchParams.get("search");

  const handleClickIcon = () => {
    setDropdownView(!isDropdownView);
  };

  const handleReset = () => {
    setStartDate(null);
    setEndDate(null);
    setDropdownView(false);
    setSearchParams("");
  };

  const isResetVisible =
    startDate || endDate || isDropdownView || searchKeyword;

  return (
    <Container>
      <HeaderCom />
      <PostBody>
        <PostMainFilter>
          <h2>서울시 강남구 역삼동</h2>
          {searchKeyword ? <h3>"{searchKeyword}" 검색 결과</h3> : null}
          <p>
            필터
            {isResetVisible && (
              <button className="reset-button" onClick={handleReset}>
                초기화
                <img src={resetIcon} alt="Reset Icon" />
              </button>
            )}
          </p>
          <hr />
          {/* <div className="PostFilterDatePicker"> */}
          <button className="select-region-button" onClick={handleClickIcon}>
            지역 선택 &nbsp;{isDropdownView ? "▲" : "▼"}
          </button>
          <button className="condition-search">검색</button>
        </PostMainFilter>
        <PostMainList>
          <div>
            <button>최신순</button>
            <span>|</span>
            <button>인기순</button>
            <button
              className="write-post-button"
              onClick={() => navigate("/postWrite")}
            >
              게시글 작성
            </button>
          </div>
          <PostDisplay></PostDisplay>
        </PostMainList>
      </PostBody>
      <FooterCom />
    </Container>
  );
};

export default PostList;
