import { useState } from "react";
import { Container } from "../../styles/GlobalStyled";
import {
  PostBody,
  PostMainFilter,
  PostMainList,
} from "../../styles/PostStyled";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/locale";

const PostList = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isDropdownView, setDropdownView] = useState(false);

  const handleClickIcon = () => {
    setDropdownView(!isDropdownView);
  };

  return (
    <Container>
      <div className="header">여기는 Header</div>
      <div className="nav">여기는 nav</div>
      <PostBody>
        <PostMainFilter>
          <p>필터</p>
          {/* <div className="PostFilterDatePicker"> */}
          <div className="div-datepicker">
            {/* today버튼, month/day dropdown, select time, locale, fixed height of calendar?, 이전날은 안보이게  */}
            <DatePicker
              className="input-date-picker"
              locale={ko}
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              minDate={new Date()}
              placeholderText="시작일"
            />
            <DatePicker
              className="input-date-picker"
              locale={ko}
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              placeholderText="종료일"
            />
          </div>
          <button onClick={handleClickIcon}>
            지역 선택{isDropdownView ? "▲" : "▼"}
          </button>
        </PostMainFilter>
        <PostMainList>여기는 게시글 목록</PostMainList>
      </PostBody>
      <div className="footer">여기는 footer</div>
    </Container>
  );
};

export default PostList;
