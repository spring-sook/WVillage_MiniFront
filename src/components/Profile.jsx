import { useEffect, useState } from "react";
import { storage } from "../api/Firebase";
import { ref, getDownloadURL } from "firebase/storage";

const ImgDownloader = ({ imgfile, width, height }) => {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    // Reference to the image file in Firebase Storage
    const fileRef = ref(storage, imgfile); // Update with the correct path

    // Get the download URL
    getDownloadURL(fileRef)
      .then((url) => {
        setImageUrl(url); // Set the download URL to state
      })
      .catch((error) => {
        console.error("Error fetching image:", error);
      });
  }, []);

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

export default ImgDownloader;
