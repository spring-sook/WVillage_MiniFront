import { Container } from "../../styles/GlobalStyled";
import { HeaderCom, FooterCom } from "../../components/GlobalComponent";
import {
  PostWriteContainer,
  PostWriteContent,
  PostWriteSelect,
  Attachment,
} from "../../styles/PostStyled";
import { Modal } from "../../components/PostComponent";
import { ImgUpload } from "../../components/ImgUpload";
import { useEffect, useState } from "react";

const PostWrite = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [title, setTitle] = useState("");
  const [addr, setAddr] = useState("");
  const [files, setFiles] = useState([]);
  const [content, setContent] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const getAddr = async () => {
      const response = await 
    }
  }, []);

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
    if (!isFormValid()) {
      setShowModal(true); // 모든 필드를 채우지 않으면 모달을 띄운다
      return;
    }
    try {
      const fileUrls = await ImgUpload(files);
      console.log("Uploaded file URLs:", fileUrls);
      setFiles([]);
    } catch (e) {
      console.error("파일업로드 중 오류 발생", e);
    }
    window.history.back(); // 이전 페이지로 이동
  };
  const closeModal = () => {
    setShowModal(false); // 모달 닫기
  };
  const handleRemoveFile = (index) => {
    setFiles((prevState) => prevState.filter((_, i) => i !== index));
  };
  const isFormValid = () => {
    return (
      category &&
      price &&
      title &&
      files.length > 0 &&
      content.trim().length > 0
    );
  };

  return (
    <Container>
      <HeaderCom />
      <PostWriteContainer>
        <div className="post-top">
          <h2>게시글 작성</h2>
          <button
            className="post-submit"
            onClick={handleSubmit}
            style={{
              backgroundColor: isFormValid() ? "#1b5e96" : "#ccc",
            }}
          >
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
            <span>원</span>
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
      {showModal && <Modal onClose={closeModal} />}
      <FooterCom />
    </Container>
  );
};

export default PostWrite;
