import { Container } from "../../styles/GlobalStyled";
import { PostContentTop } from "../../styles/PostStyled";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/locale";
import { useState } from "react";

const PostContent = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  return (
    <Container>
      <div className="header">여기는 Header</div>
      <div className="nav">여기는 nav</div>
      <PostContentTop>
        <div className="post-content-img">여기가 이미지</div>
        <div className="post-content-reserve">
          <p className="post-content-title">상품 제목</p>
          <p className="post-content-price">상품 가격 / 시</p>
          <div className="date-picker">
            <DatePicker
              className="input-date-picker"
              locale={ko}
              dateFormat="yyyy / MM / dd"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              minDate={new Date()}
              placeholderText="시작일"
            />
            <div className="line"></div>
            <DatePicker
              className="input-date-picker"
              locale={ko}
              dateFormat="yyyy / MM / dd"
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              placeholderText="종료일"
            />
          </div>
        </div>
      </PostContentTop>
      <div className="footer">여기는 footer</div>
    </Container>
  );
};

export default PostContent;
