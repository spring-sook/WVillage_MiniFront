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
import { useState, useEffect } from "react";
import { FaComments } from "react-icons/fa"; // 채팅 아이콘
import axios from "axios";
import { ImgDownloader } from "../../components/ImgComponent";

// 이미지가 더 추가될 수 있습니다

const Main = () => {
  const [posts, setPosts] = useState([]); // API에서 받은 게시물 목록 상태
  // const images = [
  //   'url("image1.jpg")',
  //   'url("image2.jpg")',
  //   'url("image3.jpg")',
  //   'url("image4.jpg")',
  //   'url("image5.jpg")',
  //   'url("image6.jpg")',
  //   'url("image7.jpg")',
  //   'url("image8.jpg")',
  // ];
  const boxWidth = 320; // 각 이미지의 너비
  const margin = 10; // 이미지 사이의 여백
  const [currentIndex, setCurrentIndex] = useState(0); // 초기값 0

  useEffect(() => {
    // 서버에서 데이터 가져오기
    axios
      .get("http://localhost:8111/board/mainTopEight")
      .then((response) => {
        setPosts(response.data); // 게시물 목록 저장
      })
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  const goToPrevious = () => {
    if (currentIndex > -2) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToNext = () => {
    if (currentIndex < posts.length - 6) {
      // 6개씩 보므로 마지막 인덱스는 posts.length - 6
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
              slideWidth={`${posts.length * (boxWidth + margin)}px`}
              style={{
                transform: `translateX(${
                  currentIndex * (boxWidth + margin)
                }px)`,
              }}
            >
              {posts.map((post, index) => (
                <Box key={index}>
                  <ImgDownloader imgfile={post.postThumbnail} />
                  <div className="post-info">
                    <h3>{post.postTitle}</h3>
                    <p>{post.postRegion}</p>
                  </div>
                </Box>
              ))}
            </BoxContainer>
          </MainRecomm>

          {/* 오른쪽 버튼 */}
          <Button
            onClick={goToNext}
            disabled={currentIndex === posts.length - 6}
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
