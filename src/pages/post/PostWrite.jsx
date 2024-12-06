import { Container } from "../../styles/GlobalStyled";
import { HeaderCom, FooterCom } from "../../components/GlobalComponent";
import {
  PostWriteContainer,
  PostWriteContent,
  PostWriteSelect,
  Attachment,
} from "../../styles/PostStyled";
import { ImgUpload } from "../../components/ImgUpload";
import { useState } from "react";

const PostWrite = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [title, setTitle] = useState("");
  const [addr, setAddr] = useState("");
  const [files, setFiles] = useState([]);
  const [content, setContent] = useState("");

  const getArrowIcon = (isOpen) =>
    `url('data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 10 6%27%3E%3Cpath d=%27${
      isOpen ? "M0 6h10L5 0z" : "M0 0h10L5 6z"
    }%27 fill=%27%23666%27/%3E%3C/svg%3E')`;
  const handleImageChange = (e) => {
    setFiles((prevState) => [...prevState, ...e.target.files]);
  };
  const handlePriceChange = (e) => {
    let value = e.target.value.replace(/,/g, ""); // 쉼표 제거

    // 숫자만 입력되도록 유효성 검사 (숫자만 허용)
    if (/^\d*$/.test(value)) {
      // 1000 단위로 쉼표 추가
      value = Number(value).toLocaleString();
      setPrice(value);
    }
  };
  const handleInputChange = (e, setState) => {
    setState(e.target.value);
  };
  const handleSubmit = async () => {
    try {
      const fileUrls = await ImgUpload(files);
      console.log("Uploaded file URLs:", fileUrls);
      setFiles([]);
    } catch (e) {
      console.error("파일업로드 중 오류 발생", e);
    }
    window.history.back();
  };
  const handleRemoveFile = (index) => {
    setFiles((prevState) => prevState.filter((_, i) => i !== index));
  };

  return (
    <Container>
      <HeaderCom />
      <PostWriteContainer>
        <div className="post-top">
          <h2>게시글 작성</h2>
          <button className="post-submit" onClick={handleSubmit}>
            작성 완료
          </button>
        </div>
        <hr />
        <PostWriteContent>
          <PostWriteSelect>
            <select
              className="post-write-dropbox post-write-category"
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}
              onBlur={() => setIsCategoryOpen(false)}
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              style={{
                backgroundImage: getArrowIcon(isCategoryOpen),
                backgroundSize: "14px",
              }}
            >
              <option value="" disabled hidden>
                카테고리 선택
              </option>
              <option value="product">제품</option>
              <option value="part-time">구인</option>
              <option value="place">장소</option>
            </select>
            <div className="post-write-hour">시간당</div>
            <input
              className="post-write-price"
              type="text"
              name="price"
              id="price"
              value={price}
              placeholder="가격"
              onChange={handlePriceChange}
            />
            {/* <select
              className="post-write-dropbox post-write-dh"
              onClick={() => setIsUnitOpen(!isUnitOpen)}
              onBlur={() => setIsUnitOpen(false)}
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
              style={{
                backgroundImage: getArrowIcon(isUnitOpen),
                backgroundSize: "14px",
              }}
            >
              <option value="" disabled hidden>
                시간/일
              </option>
              <option value="day">일</option>
              <option value="hour">시간</option>
            </select> */}
          </PostWriteSelect>
          <input
            type="text"
            className="post-write-title"
            placeholder="제목"
            onChange={(e) => handleInputChange(e, setTitle)}
          />
          <div className="post-write-place">
            <span>서울시 송파구 역삼동</span>
          </div>
          <Attachment>
            <label htmlFor="file-upload" className="file-upload-label">
              <span>이미지 파일 첨부</span>
            </label>
            <input
              id="file-upload"
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }} // 기본 파일 선택 UI 숨기기
            />
            <div className="file-list">
              {files.length > 0 && (
                <ul>
                  {files.map((file, index) => (
                    <li key={index}>
                      {file.name}{" "}
                      <button onClick={() => handleRemoveFile(index)}>
                        삭제
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Attachment>
          <textarea
            className="post-write-context"
            placeholder="내용을 작성하세요."
            onChange={(e) => handleInputChange(e, setContent)}
          />
        </PostWriteContent>
      </PostWriteContainer>
      <FooterCom />
    </Container>
  );
};

export default PostWrite;
