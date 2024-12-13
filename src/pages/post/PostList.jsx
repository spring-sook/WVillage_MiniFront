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
import { useNavigate, useSearchParams } from "react-router-dom";
import { UserContext } from "../../context/UserStore";
import PostAPI from "../../api/PostAPI";
import CommonAPI from "../../api/CommonAPI";
import { PostItem } from "../../components/PostItemComponent";
import { RegionSelect } from "../../components/RegionSelect";
import axios from "axios";

const PostList = () => {
  const navigate = useNavigate();
  // const [startDate, setStartDate] = useState("");
  // const [endDate, setEndDate] = useState("");
  // const [searchParams, setSearchParams] = useSearchParams();
  const [searchParams] = useSearchParams();
  const [category, setCategory] = useState("");
  const [keyword, setKeyword] = useState("");
  const [searchArea, setSearchArea] = useState("");
  const [posts, setPosts] = useState([]);
  const [order, setOrder] = useState("최신순");
  const { userInfo } = useContext(UserContext);
  const [sidoOpt, setSidoOpt] = useState([]);
  const [sigunguOpt, setSigunguOpt] = useState([]);
  const [emdOpt, setEmdOpt] = useState([]);
  const [riOpt, setRiOpt] = useState([]);
  const [regionFilter, setRegionFilter] = useState({
    sido: null,
    sigungu: null,
    emd: null,
    ri: null,
    sidoName: null,
    sigunguName: null,
    emdName: null,
    riName: null,
  });

  useEffect(() => {
    setCategory(searchParams.get("category") || "");
    setKeyword(searchParams.get("search") || "");
  }, []);
  // const searchKeyword = searchParams.get("search");
  // const queryParams = new URLSearchParams(location.search);
  // const category = queryParams.get("category");

  useEffect(() => {
    const fetchData = async () => {
      const region = userInfo.areaCode;
      setPosts([]); // 초기화

      try {
        let response;
        if (category === "all") {
          console.log(">>>>>>", region);
          response = await PostAPI.CommonAllList(region);
        } else {
          response = await PostAPI.CommonCategoryList(region, category);
        }
        const fetchedPosts = response.data;
        fetchedPosts.sort(
          (a, b) => new Date(b.postDate) - new Date(a.postDate)
        );
        setPosts(fetchedPosts);
      } catch (error) {
        console.error("데이터를 가져오는 중 오류 발생:", error);
      }
    };
    const getSido = async () => {
      const responseSido = await CommonAPI.GetSido();
      setSidoOpt(responseSido.data);
    };
    fetchData();
    getSido();
    setSearchArea(userInfo.areaCode);
  }, [category, userInfo.areaCode]);

  const handleRegionChange = (key) => (e) => {
    const selectedOption = e.target.options[e.target.selectedIndex]; // 선택된 옵션
    const regionNameKey = `${key}Name`; // 예: sido -> sidoName

    setRegionFilter((prevState) => ({
      ...prevState,
      [key]: e.target.value, // 코드 값
      [regionNameKey]: selectedOption.text, // 지역 이름
    }));
  };
  const handleReset = () => {
    setRegionFilter({
      sido: null,
      sigungu: null,
      emd: null,
      ri: null,
    });
    setSigunguOpt([]);
    setEmdOpt([]);
    setRiOpt([]);
    setKeyword("");
    setSearchArea(userInfo.areaCode);
    const newSearchParams = new URLSearchParams(window.location.search);
    newSearchParams.delete("search"); // 'search' 키 삭제
    navigate(`?${newSearchParams.toString()}`);
  };

  useEffect(() => {
    // 정렬 함수
    const sortPosts = () => {
      if (order === "최신순") {
        setPosts((prevPosts) =>
          [...prevPosts].sort(
            (a, b) => new Date(b.postDate) - new Date(a.postDate)
          )
        );
      } else if (order === "인기순") {
        setPosts((prevPosts) =>
          [...prevPosts].sort((a, b) => b.postViews - a.postViews)
        );
      }
    };

    sortPosts();
  }, [order]);

  const isResetVisible = keyword || regionFilter.sido;

  const handleSearchClick = async () => {
    setPosts([]);
    const response = await PostAPI.SearchPostList(
      searchArea,
      category,
      keyword
    );
    setPosts(response.data);
  };

  return (
    <Container>
      <HeaderCom />
      <PostBody>
        <PostMainFilter>
          <h2>
            {regionFilter.sidoName
              ? `${regionFilter.sidoName} ${
                  regionFilter.sigunguName ? regionFilter.sigunguName : ""
                } ${regionFilter.emdName ? regionFilter.emdName : ""} ${
                  regionFilter.riName ? regionFilter.riName : ""
                }`
              : userInfo.filteredRegion}
          </h2>
          {keyword ? <h3>"{keyword}" 검색 결과</h3> : null}
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
          <RegionSelect
            regionFilter={regionFilter}
            sidoOpt={sidoOpt}
            sigunguOpt={sigunguOpt}
            setSigunguOpt={setSigunguOpt}
            emdOpt={emdOpt}
            setEmdOpt={setEmdOpt}
            riOpt={riOpt}
            setRiOpt={setRiOpt}
            setRegionFilter={setRegionFilter}
            handleRegionChange={handleRegionChange}
            setSearchArea={setSearchArea}
          />
          <button className="condition-search" onClick={handleSearchClick}>
            검색
          </button>
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
                  postRegion={post.postRegion}
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
