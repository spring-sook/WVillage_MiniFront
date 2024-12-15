import { useContext, useEffect, useState } from "react";
import { storage } from "../api/Firebase";
import { ref, getDownloadURL } from "firebase/storage";
import fire1 from "../../src/images/fire1.jpg";
import fire2 from "../../src/images/fire2.jpg";
import fire3 from "../../src/images/fire3.jpg";
import fire4 from "../../src/images/fire4.jpg";
import fire5 from "../../src/images/fire5.jpg";
import fire6 from "../../src/images/fire6.jpg";
import { UserContext } from "../context/UserStore";

export const ProfileImgDownloader = ({ imgfile, width, height, backColor }) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const { userInfo } = useContext(UserContext);
  const storedImageUrl = localStorage.getItem("profileImageUrl");
  // const storedImageUrl = "profile_basic.png";

  useEffect(() => {
    if (storedImageUrl) {
      // 로컬 스토리지에 이미지 URL이 있으면 그걸 사용
      setImageUrl(storedImageUrl);
      setLoading(false); // 로딩 완료
    } else {
      const fileRef = ref(storage, userInfo.profileImg); // Firebase에서 이미지 경로 설정

      getDownloadURL(fileRef)
        .then((url) => {
          setImageUrl(url);
          localStorage.setItem("profileImageUrl", url);
          setLoading(false); // 로딩 완료
        })
        .catch((error) => {
          console.error("Error fetching image:", error);
          setLoading(false); // 오류 발생 시 로딩 완료
        });
    }
  }, [imgfile, storedImageUrl]);

  if (loading) {
    return <div></div>; // 로딩 중일 때 보여줄 내용
  }
  // 로그아웃 시 이미지 제거: localStorage.removeItem("profileImageUrl") -- 로그인 중인지 확인해서 하면 될듯

  return (
    <>
      <img
        src={imageUrl}
        alt="프로필 이미지"
        style={{
          borderRadius: "50%",
          width: width || "40px",
          height: height || "40px",
          backgroundColor: backColor || "white",
        }}
      />
    </>
  );
};

export const ProfileFireImg = ({ score, height, mr }) => {
  const temperature = (300.0 + parseInt(score)) / 10.0;
  let temperatureImage = fire1; // 기본 이미지를 설정 (기본값)

  if (temperature >= 0 && temperature <= 10) {
    temperatureImage = fire1;
  } else if (temperature > 10 && temperature <= 30) {
    temperatureImage = fire2;
  } else if (temperature > 30 && temperature <= 50) {
    temperatureImage = fire3;
  } else if (temperature > 50 && temperature <= 70) {
    temperatureImage = fire4;
  } else if (temperature > 70 && temperature <= 90) {
    temperatureImage = fire5;
  } else if (temperature > 90) {
    temperatureImage = fire6;
  }

  return (
    <img
      src={temperatureImage}
      alt="온도 이미지"
      className="temperature-image"
      style={{
        height: height || "40px",
        marginRight: mr || "0px",
      }}
    />
  );
};
