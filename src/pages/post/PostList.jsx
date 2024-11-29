import { useState } from "react";
import {
  PostBody,
  PostMainFilter,
  PostMainList,
} from "../../styles/PostStyled";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const PostList = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <div>
      <div className="header">여기는 Header</div>
      <div className="nav">여기는 nav</div>
      <PostBody>
        <PostMainFilter>
          <p>필터</p>
          {/* <div className="PostFilterDatePicker"> */}
          <div className="div-datepicker">
            {/* today버튼, month/day dropdown, select time, locale, fixed height of calendar?  */}
            <DatePicker
              className="input-date-picker"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              placeholderText="시작일"
            />
            <DatePicker
              className="input-date-picker"
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              placeholderText="종료일"
            />
          </div>
        </PostMainFilter>
        <PostMainList>여기는 게시글 목록</PostMainList>
      </PostBody>
      <div className="footer">여기는 footer</div>
    </div>
  );
};

export default PostList;
