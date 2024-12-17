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
  const { userInfo } = useContext(UserContext);
  // const storedImageUrl = userInfo.profileImg;
  // const storedImageUrl = "profile_basic.png";

  useEffect(() => {
    const filePath = imgfile || "profile_basic.png";
    console.log(filePath);
    const fileRef = ref(storage, filePath);

    getDownloadURL(fileRef)
      .then((url) => {
        setImageUrl(url); // 이미지 URL을 상태에 저장
        console.log(url);
      })
      .catch((error) => {
        console.error("이미지 가져오기 에러:", error);
      });
  }, [userInfo.profileImg, imgfile]);

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
