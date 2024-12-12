import { useEffect, useState } from "react";
import { storage } from "../api/Firebase";
import { ref, getDownloadURL } from "firebase/storage";

export const ProfileImgDownloader = ({ imgfile, width, height }) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const storedImageUrl = localStorage.getItem("profileImageUrl");

  useEffect(() => {
    if (storedImageUrl) {
      // 로컬 스토리지에 이미지 URL이 있으면 그걸 사용
      setImageUrl(storedImageUrl);
      setLoading(false); // 로딩 완료
    } else {
      // 로컬 스토리지에 이미지가 없으면 Firebase에서 가져옴
      const fileRef = ref(storage, imgfile); // Firebase에서 이미지 경로 설정

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
    return <div>Loading...</div>; // 로딩 중일 때 보여줄 내용
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
        }}
      />
    </>
  );
};
