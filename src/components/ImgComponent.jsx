import { useEffect, useState } from "react";
import { storage } from "../api/Firebase";
import { ref, getDownloadURL } from "firebase/storage";

export const ImgUpload = async (files) => {
  const uploadedFileUrls = [];
  const storageRef = storage.ref(); // Firebase Storage 참조

  for (const file of files) {
    const fileRef = storageRef.child(file.name);
    console.log(file);
    fileRef
      .put(file) // 파일 업로드
      .then(() => {
        // 이게 await 부분이라고 보면 됨(비동기). 가이드 문서에 이렇게 돼있어서 그냥 이렇게 둠
        console.log("파일 업로드 성공");
        return fileRef.getDownloadURL(); // 업로드 된 파일의 URL을 가져옴
      })
      .then((downloadURL) => {
        console.log("저장된 경로 : ", downloadURL);
        uploadedFileUrls.push(downloadURL);
      })
      .catch((error) => {
        console.log("업로드 중 에러 발생 : ", error);
      });
  }

  return uploadedFileUrls; // 업로드된 파일들의 URL을 반환
};

export const ImgDownloader = ({ imgfile, width, height, postDisable }) => {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const filePath = imgfile || "profile_basic.png"; // imgfile이 없으면 기본값 설정
    const fileRef = ref(storage, filePath);

    getDownloadURL(fileRef)
      .then((url) => {
        setImageUrl(url); // 이미지 URL을 상태에 저장
      })
      .catch((error) => {
        console.error("이미지 가져오기 에러:", error);
      });
  }, [imgfile]);
  return (
    <>
      <img
        src={imageUrl}
        alt="이미지"
        style={{
          width: width || "100%",
          height: height || "80%",
          objectFit: "cover",
          filter: postDisable ? "grayscale(100%)" : "none",
          opacity: postDisable ? 0.5 : 1,
        }}
      />
    </>
  );
};
