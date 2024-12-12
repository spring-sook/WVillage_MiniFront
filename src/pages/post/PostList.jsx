import { useContext, useEffect, useState } from "react";
import { Container } from "../../styles/GlobalStyled";
import resetIcon from "../../images/reset_icon.png";
import {
  PostBody,
  PostMainFilter,
  PostMainList,
  PostDisplay,
} from "../../styles/PostStyled";
import { HeaderCom, FooterCom } from "../../components/GlobalComponent";
import { useNavigate, useSearchParams, useLocation } from "react-router-dom";
import { UserContext } from "../../context/UserStore";
import PostAPI from "../../api/PostAPI";
import { PostItem } from "../../components/PostItemComponent";
import UserProfileAPI from "../../api/OtherUserProfileAPI";

const PostList = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isDropdownView, setDropdownView] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [posts, setPosts] = useState([]);
  const [order, setOrder] = useState("최신순");
  const { userInfo } = useContext(UserContext);

  const searchKeyword = searchParams.get("search");
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category");

  useEffect(() => {
    const fetchData = async () => {
      const region = userInfo.areaCode;
      setPosts([]); // 초기화

      try {
        const rspRegion = await UserProfileAPI.getRegion(region);
        const regionData = rspRegion.data[0];
        const filteredRegion = Object.values(regionData)
          .filter((value) => value && value !== "nan")
          .join(" ");

        let response;
        if (category === "all") {
          response = await PostAPI.CommonAllList(region);
        } else {
          response = await PostAPI.CommonCategoryList(region, category);
        }

        const updatedPosts = response.data.map((post) => ({
          ...post,
          region: filteredRegion,
        }));

        setPosts(updatedPosts);
      } catch (error) {
        console.error("데이터를 가져오는 중 오류 발생:", error);
      }
    };

    fetchData();
    console.log(posts);
  }, [category, userInfo.areaCode]);

  const handleClickIcon = () => {
    setDropdownView(!isDropdownView);
  };

  const handleReset = () => {
    setStartDate(null);
    setEndDate(null);
    setDropdownView(false);
  };

  const isResetVisible =
    startDate || endDate || isDropdownView || searchKeyword;

  return (
    <Container>
      <HeaderCom />
      <PostBody>
        <PostMainFilter>
          <h2>{userInfo.filteredRegion}</h2>
          {searchKeyword ? <h3>"{searchKeyword}" 검색 결과</h3> : null}
          <p>
            필터
            {isResetVisible && (
              <button className="reset-button" onClick={handleReset}>
                초기화
                <img src={resetIcon} alt="Reset Icon" />
              </button>
            )}
          </p>
          <hr />
          {/* <div className="PostFilterDatePicker"> */}
          <button className="select-region-button" onClick={handleClickIcon}>
            지역 선택 &nbsp;{isDropdownView ? "▲" : "▼"}
          </button>
          <button className="condition-search">검색</button>
        </PostMainFilter>
        <PostMainList>
          <div>
            <button onClick={() => setOrder("최신순")}>최신순</button>
            <span>|</span>
            <button onClick={() => setOrder("인기순")}>인기순</button>
            <button
              className="write-post-button"
              onClick={() => navigate("/postWrite")}
            >
              게시글 작성
            </button>
          </div>
          <PostDisplay>
            {Array.isArray(posts) &&
              posts.map((post, index) => (
                <PostItem
                  key={index}
                  thumbnail={post.postThumbnail}
                  title={post.postTitle}
                  price={post.postPrice}
                  region={post.region}
                  postId={post.postId}
                  post={post}
                />
              ))}
          </PostDisplay>
        </PostMainList>
      </PostBody>
      <FooterCom />
    </Container>
  );
};

export default PostList;
