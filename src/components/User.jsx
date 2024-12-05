import ImgDownloader from "./Profile";
import { Usermy } from "../styles/UserComstyled";
import { Link } from "react-router-dom";
import { useState } from "react";

export const User = ({ setSelectedMenu, selectedMenu }) => {
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
          <div className="temp">
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
    </>
  );
};
