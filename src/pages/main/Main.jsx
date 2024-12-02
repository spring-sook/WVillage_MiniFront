import {
  MainBanner,
  MainBody,
  MainRecomm,
  BoxContainer,
  Box,
  Button,
} from "../../styles/MainStyled";
import { Container } from "../../styles/GlobalStyled";
import { HeaderCom, NavCom, FooterCom } from "../../components/GlobalComponent";
import { useState } from "react";

// 이미지가 더 추가될 수 있습니다

const Main = () => {
  const images = [
    'url("image1.jpg")',
    'url("image2.jpg")',
    'url("image3.jpg")',
    'url("image4.jpg")',
  ];
  const [currentIndex, setCurrentIndex] = useState(1); // 첫 번째 이미지부터 시작
  // 왼쪽 버튼 클릭 시 이전 이미지로 이동 (무한 순환)
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => {
      // 첫 번째 이미지를 클릭하면 마지막 이미지로 이동
      return prevIndex === 1 ? images.length : prevIndex - 1;
    });
  };

  // 오른쪽 버튼 클릭 시 다음 이미지로 이동 (무한 순환)
  const goToNext = () => {
    setCurrentIndex((prevIndex) => {
      // 마지막 이미지를 클릭하면 첫 번째 이미지로 이동
      return prevIndex === images.length ? 1 : prevIndex + 1;
    });
  };
  return (
    <Container>
      <HeaderCom />
      <NavCom />
      <MainBody>
        <MainRecomm>
          <Button left onClick={goToPrevious}>
            ◀
          </Button>

          <BoxContainer
            style={{
              transform: `translateX(-${currentIndex * 220}px)`, // 현재 인덱스를 기준으로 이동
            }}
          >
            {/* 앞부분 복제된 이미지들 */}
            {images.slice(0).map((image, index) => (
              <Box key={`left-${index}`} style={{ backgroundImage: image }} />
            ))}
            {/* 실제 이미지들 */}
            {images.map((image, index) => (
              <Box key={index} style={{ backgroundImage: image }} />
            ))}
            {/* 뒷부분 복제된 이미지들 */}
            {images.slice(0).map((image, index) => (
              <Box key={`right-${index}`} style={{ backgroundImage: image }} />
            ))}
          </BoxContainer>

          <Button onClick={goToNext}>▶</Button>
        </MainRecomm>
        <MainBanner>
          <div className="catch">
            <h1>어디서 Village?</h1>
          </div>
          <div className="explain">안쓰는 물건의 마을</div>
        </MainBanner>
      </MainBody>
      <FooterCom />
    </Container>
  );
};
export default Main;
