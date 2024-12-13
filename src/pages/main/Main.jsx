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
import { useNavigate } from "react-router-dom";
import PostAPI from "../../api/PostAPI";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import { SlickBtnContainer, SlickBtn } from "../../styles/MainStyled";

// 이미지가 더 추가될 수 있습니다

const Main = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]); // API에서 받은 게시물 목록 상태
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
  const handleBoxClick = async (post) => {
    try {
      await PostAPI.PostView(post.postId);
      navigate(`/post/${post.postId}`, { state: { post } });
    } catch (error) {
      console.error("PostView 실행 중 오류 발생:", error);
    }
  };

  return (
    <Container>
      <HeaderCom />
      <div style={{ marginLeft: "-2%", marginRight: "-2%" }}>
        <MainBody>
          <RecommBox>
            <h2>인기 게시물</h2>

            {/* 왼쪽 버튼 */}
            {/* <Button
              left
              onClick={goToPrevious}
              disabled={currentIndex === -2} // 왼쪽 끝일 때 비활성화
            >
              ◀
            </Button> */}

            {/* <MainRecomm>
              <BoxContainer
                slideWidth={`${posts.length * (boxWidth + margin)}px`}
                style={{
                  transform: `translateX(${
                    currentIndex * (boxWidth + margin)
                  }px)`,
                }}
              >
                {posts.map((post, index) => (
                  <Box key={index} onClick={() => handleBoxClick(post)}>
                    <ImgDownloader
                      imgfile={post.postThumbnail}
                      width="100%" // Box에 맞춰 크기 조정
                      height="82%" // 높이를 80%로 설정
                    />
                    <div className="post-info">
                      <h3>{post.postTitle}</h3>
                      <p>{post.postRegion}</p>
                    </div>
                  </Box>
                ))}
              </BoxContainer>
            </MainRecomm> */}
            <MainRecomm>
              <Swiper
                className="swiper"
                navigation={{
                  nextEl: ".next",
                  prevEl: ".prev",
                }}
                pagination={false}
                modules={[Navigation]}
                loop={true}
                slidesPerView={4}
                slidesPerGroup={1}
                spaceBetween={10}
                simulateTouch={true}
              >
                {posts.map((post, index) => (
                  <SwiperSlide key={index}>
                    <Box key={index} onClick={() => handleBoxClick(post)}>
                      <ImgDownloader
                        imgfile={post.postThumbnail}
                        width="100%" // Box에 맞춰 크기 조정
                        height="82%" // 높이를 80%로 설정
                      />
                      <div className="post-info">
                        <h3>{post.postTitle}</h3>
                        <p>{post.postRegion}</p>
                      </div>
                    </Box>
                  </SwiperSlide>
                ))}
              </Swiper>
              <SlickBtnContainer>
                <SlickBtn className="prev" />
                <SlickBtn className="next" />
              </SlickBtnContainer>
            </MainRecomm>

            {/* 오른쪽 버튼 */}
            {/* <Button
              onClick={goToNext}
              disabled={currentIndex === posts.length - 6}
            >
              ▶
            </Button> */}
          </RecommBox>
          <MainBanner>
            <div className="catch">
              <h1>어디서 Village?</h1>
            </div>
            <div className="explain">안쓰는 물건의 마을</div>
          </MainBanner>
        </MainBody>
      </div>
      <ChatWidget onClick={handleChatClick} title="채팅하기">
        <FaComments />
      </ChatWidget>
      <FooterCom />
    </Container>
  );
};
export default Main;
