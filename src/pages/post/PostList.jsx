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

const PostList = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isDropdownView, setDropdownView] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [posts, setPosts] = useState([]);
  const { userInfo } = useContext(UserContext);

  const searchKeyword = searchParams.get("search");
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category");

  useEffect(() => {
    const region = userInfo.areaCode;
    setPosts([]);
    const fetchAllPosts = async () => {
      const response = await PostAPI.CommonAllList(region);
      setPosts(response.data);
    };
    const fetchCategoryPosts = async () => {
      const response = await PostAPI.CommonCategoryList(region, category);
      console.log(response);
      setPosts(response);
    };
    if (category === "all") {
      fetchAllPosts();
    } else {
      fetchCategoryPosts();
    }
    console.log(posts);
  }, [category]);

  const handleClickIcon = () => {
    setDropdownView(!isDropdownView);
  };

  const handleReset = () => {
    setStartDate(null);
    setEndDate(null);
    setDropdownView(false);
    setSearchParams("");
  };

  const isResetVisible =
    startDate || endDate || isDropdownView || searchKeyword;

  return (
    <Container>
      <HeaderCom />
      <PostBody>
        <PostMainFilter>
          <h2>서울시 강남구 역삼동</h2>
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
            <button>최신순</button>
            <span>|</span>
            <button>인기순</button>
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
                  thumbnail={post.postThumbnail} // assuming postThumbnail is part of the post object
                  title={post.postTitle}
                  price={post.postPrice}
                  region={post.postRegion}
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
