import { useEffect, useState, useContext } from "react";
import { storage } from "../api/Firebase";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { UserContext } from "../context/UserStore";

// 이미지 리사이즈 및 압축 함수
const resizeAndCompressImage = (
  file,
  maxWidth = 800,
  maxHeight = 800,
  quality = 0.7
) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const reader = new FileReader();

    reader.onload = () => {
      img.src = reader.result;
    };

    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);

    img.onload = () => {
      let width = img.width;
      let height = img.height;

      // 비율에 맞춰서 크기 조정
      if (width > height) {
        if (width > maxWidth) {
          height = Math.round((height * maxWidth) / width);
          width = maxWidth;
        }
      } else {
        if (height > maxHeight) {
          width = Math.round((width * maxHeight) / height);
          height = maxHeight;
        }
      }

      // 리사이즈된 이미지 캔버스에 그리기
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = width;
      canvas.height = height;
      ctx.drawImage(img, 0, 0, width, height);

      // 리사이즈된 이미지를 압축하여 Blob 형태로 반환
      canvas.toBlob(resolve, "image/jpeg", quality); // quality는 압축 비율 (0.0 ~ 1.0)
    };
  });
};

// ImgUpload 컴포넌트로 수정 (훅 사용 위치 수정)
export const ImgUpload = ({ files }) => {
  const { userInfo } = useContext(UserContext); // userInfo 가져오기
  const [uploadedFileUrls, setUploadedFileUrls] = useState([]);

  const uploadFiles = async () => {
    const uploadedUrls = [];
    const storageRef = storage.ref(); // Firebase Storage 참조

    for (const file of files) {
      // 1. 이미지 용량 체크 (1MB 이상인 경우에만 리사이즈 및 압축)
      const fileSize = file.size / 1024 / 1024; // MB 단위로 변환
      let resizedBlob = file; // 기본적으로 원본 파일을 사용

      if (fileSize > 1) {
        // 1MB 이상의 파일만 리사이즈 및 압축
        console.log(`파일 크기가 크므로 리사이즈 및 압축: ${file.name}`);
        resizedBlob = await resizeAndCompressImage(file, 800, 800, 0.6); // 압축 비율 0.6으로 설정
      } else {
        console.log(`파일 크기가 작아 리사이즈 생략: ${file.name}`);
      }

      const fileRef = storageRef.child(`${userInfo.phone}_${file.name}`);

      try {
        // 2. 업로드
        const snapshot = await uploadBytes(fileRef, resizedBlob);
        console.log("파일 업로드 성공");

        // 3. 업로드된 파일의 다운로드 URL 가져오기
        const downloadURL = await getDownloadURL(snapshot.ref);
        console.log("저장된 경로 : ", downloadURL);
        uploadedUrls.push(downloadURL);
      } catch (error) {
        console.log("업로드 중 에러 발생 : ", error);
      }
    }

    setUploadedFileUrls(uploadedUrls); // 상태 업데이트
  };

  useEffect(() => {
    uploadFiles(); // 파일 업로드 실행
  }, [files]);

  return (
    <div>
      {uploadedFileUrls.map((url, index) => (
        <img key={index} src={url} alt={`Uploaded ${index}`} />
      ))}
    </div>
  );
};

// ImgDownloader 컴포넌트
export const ImgDownloader = ({ imgfile, width, height }) => {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const fileRef = ref(storage, imgfile); // Firebase에서 이미지 경로 설정

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
        }}
      />
    </>
  );
};
