import {
  MainBanner,
  MainBody,
  MainRecomm,
  Box,
  RecommBox,
} from "../../styles/MainStyled";
import { Container } from "../../styles/GlobalStyled";
import { HeaderCom, FooterCom } from "../../components/GlobalComponent";
import { useState, useEffect } from "react";
import axios from "axios";
import { ImgDownloader } from "../../components/ImgComponent";
import { useNavigate } from "react-router-dom";
import PostAPI from "../../api/PostAPI";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { SlickBtnContainer, SlickBtn } from "../../styles/MainStyled";

const Main = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]); // API에서 받은 게시물 목록 상태
  useEffect(() => {
    // 서버에서 데이터 가져오기
    axios
      .get("http://localhost:8111/board/mainTopEight")
      .then((response) => {
        setPosts(response.data); // 게시물 목록 저장
      })
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

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
                breakpoints={{
                  1770: {
                    slidesPerView: 4,
                  },
                  1345: {
                    slidesPerView: 3,
                  },
                  747: {
                    slidesPerView: 2,
                  },
                  0: {
                    slidesPerView: 2,
                  },
                }}
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
          </RecommBox>
          <MainBanner>
            <div className="catch">
              <h1>어디서 Village?</h1>
            </div>
            <div className="explain">안쓰는 물건의 마을</div>
          </MainBanner>
        </MainBody>
      </div>

      <FooterCom />
    </Container>
  );
};
export default Main;
