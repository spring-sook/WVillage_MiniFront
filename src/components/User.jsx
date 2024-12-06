import ImgDownloader from "./Profile";
import { Usermy, Modal, Tier, TempInfo } from "../styles/UserComstyled";
import { Link } from "react-router-dom";
import { useState } from "react";
import fire1 from "../../src/images/fire1.jpg";
import fire2 from "../../src/images/fire2.jpg";
import fire3 from "../../src/images/fire3.jpg";
import fire4 from "../../src/images/fire4.jpg";
import fire5 from "../../src/images/fire5.jpg";
import fire6 from "../../src/images/fire6.jpg";

export const User = ({ setSelectedMenu, selectedMenu }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 추가

  const links = [
    "작성 게시글",
    "즐겨찾기 게시글",
    "예약 리스트",
    "포인트",
    "내 정보 수정",
    "설정",
  ];

  const imagePath = "snow_village.webp";

  return (
    <>
      <Usermy>
        <div className="usermy">
          <ImgDownloader imgfile={imagePath} width="120px" height="120px" />
        </div>
        <div className="box">
          <div className="temp" onClick={() => setIsModalOpen(true)}>
            <p>온도</p>
            <div className="gauge">
              <p>36.5 ℃</p>
            </div>
          </div>
          <div className="option">
            {links.map((label) => (
              <p
                key={label}
                onClick={() => setSelectedMenu(label)}
                className={selectedMenu === label ? "selected" : ""}
              >
                {label}
              </p>
            ))}
          </div>
        </div>
      </Usermy>
      {/* 모달창 */}
      {isModalOpen && (
        <Modal>
          <div className="modal-content">
            <h2>온도 정보</h2>
            <p className="tier-intro">
              신규 가입시 첫 온도는 30℃ 입니다. <br />
              점수 10점당 1℃ 씩 가감됩니다. <br />
              점수는 리뷰를 받거나 거래성사시 받을 수 있습니다.
            </p>
            <TempInfo>
              <Tier>
                <img src={fire1} alt="꺼진 불" />
                <div>
                  <h3>꺼진 불</h3>
                  <p>0~10 ℃</p>
                </div>
              </Tier>
              <Tier>
                <img src={fire2} alt="작은 불" />
                <div>
                  <h3>작은 불</h3>
                  <p>11~30 ℃</p>
                </div>
              </Tier>
              <Tier>
                <img src={fire3} alt="중간 불" />
                <div>
                  <h3>중간 불</h3>
                  <p>31~50 ℃</p>
                </div>
              </Tier>
              <Tier>
                <img src={fire4} alt="큰 불" />
                <div>
                  <h3>큰 불</h3>
                  <p>51~70 ℃</p>
                </div>
              </Tier>
              <Tier>
                <img src={fire5} alt="왕큰 불" />
                <div>
                  <h3>왕큰 불</h3>
                  <p>71~90 ℃</p>
                </div>
              </Tier>
              <Tier>
                <img src={fire6} alt="대왕 불" />
                <div>
                  <h3>대왕 불</h3>
                  <p>91~100+ ℃</p>
                </div>
              </Tier>
            </TempInfo>

            <p className="warning">
              신고 1회당 20점이 차감됩니다. <br />
              신고 누적 10회 이상시 꺼진 불이 고정됩니다.
            </p>
            <button onClick={() => setIsModalOpen(false)}>닫기</button>
          </div>
        </Modal>
      )}
    </>
  );
};
