import {
  MainBanner,
  MainBody,
  MainRecomm,
  BoxContainer,
  Box,
  Button,
  RecommBox,
  ChatWidget,
} from "../../styles/MainStyled";
import { Container } from "../../styles/GlobalStyled";
import { HeaderCom, FooterCom } from "../../components/GlobalComponent";
import { useState } from "react";
import { FaComments } from "react-icons/fa"; // 채팅 아이콘

// 이미지가 더 추가될 수 있습니다

const Main = () => {
  const images = [
    'url("image1.jpg")',
    'url("image2.jpg")',
    'url("image3.jpg")',
    'url("image4.jpg")',
    'url("image5.jpg")',
    'url("image6.jpg")',
    'url("image7.jpg")',
    'url("image8.jpg")',
  ];
  const boxWidth = 320; // 각 이미지의 너비
  const margin = 10; // 이미지 사이의 여백
  const [currentIndex, setCurrentIndex] = useState(0); // 초기값 0

  const goToPrevious = () => {
    if (currentIndex > -2) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToNext = () => {
    if (currentIndex < images.length - 6) {
      // 4개씩 보니까 마지막 인덱스는 images.length - 4
      setCurrentIndex(currentIndex + 1);
    }
  };
  const handleChatClick = () => {
    alert("채팅창 열기"); // 임시 동작
    // 실제 채팅 기능 추가 필요
  };

  return (
    <Container>
      <HeaderCom />
      <MainBody>
        <RecommBox>
          {/* 왼쪽 버튼 */}
          <Button
            left
            onClick={goToPrevious}
            disabled={currentIndex === -2} // 왼쪽 끝일 때 비활성화
          >
            ◀
          </Button>

          <MainRecomm>
            <BoxContainer
              slideWidth={`${images.length * (boxWidth + margin)}px`}
              style={{
                transform: `translateX(${
                  currentIndex * (boxWidth + margin)
                }px)`, // 이미지가 1개씩 이동
              }}
            >
              {images.map((image, index) => (
                <Box key={index} style={{ backgroundImage: image }} />
              ))}
            </BoxContainer>
          </MainRecomm>

          {/* 오른쪽 버튼 */}
          <Button
            onClick={goToNext}
            disabled={currentIndex === images.length - 6} // 오른쪽 끝일 때 비활성화
          >
            ▶
          </Button>
        </RecommBox>
        <MainBanner>
          <div className="catch">
            <h1>어디서 Village?</h1>
          </div>
          <div className="explain">안쓰는 물건의 마을</div>
        </MainBanner>
      </MainBody>
      <ChatWidget onClick={handleChatClick} title="채팅하기">
        <FaComments />
      </ChatWidget>
      <FooterCom />
    </Container>
  );
};
export default Main;
