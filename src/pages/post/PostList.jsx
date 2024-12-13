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
import CommonAPI from "../../api/CommonAPI";
import { PostItem } from "../../components/PostItemComponent";
import { RegionSelect } from "../../components/RegionSelect";
import UserProfileAPI from "../../api/OtherUserProfileAPI";

const PostList = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // const [startDate, setStartDate] = useState("");
  // const [endDate, setEndDate] = useState("");
  const [isDropdownView, setIsDropdownView] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
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

  const searchKeyword = searchParams.get("search");
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category");
  // const sido = queryParams.get("sido");
  // const sigungu = queryParams.get("sigungu");
  // const emd = queryParams.get("emd");
  // const ri = queryParams.get("ri");

  useEffect(() => {
    const fetchData = async () => {
      const region = userInfo.areaCode;
      setPosts([]); // 초기화

      try {
        // const rspRegion = await UserProfileAPI.getRegion(region);
        // const regionData = rspRegion.data[0];
        // const filteredRegion = Object.values(regionData)
        //   .filter((value) => value && value !== "nan")
        //   .join(" ");

        let response;
        if (category === "all") {
          console.log(">>>>>>", region);
          response = await PostAPI.CommonAllList(region);
        } else {
          response = await PostAPI.CommonCategoryList(region, category);
        }

        // const updatedPosts = response.data.map((post) => ({
        //   ...post,
        //   region: filteredRegion,
        // }));
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
  }, [category, userInfo.areaCode]);

  useEffect(() => {
    const fetchRegionData = async () => {
      try {
        let responseRegion;
        if (regionFilter.emd) {
          console.log("전달하는 읍면동 areacode : ", regionFilter.emd);
          responseRegion = await CommonAPI.GetRegionFilter(regionFilter.emd);
          setRiOpt(responseRegion.data);
          console.log("리 : ", responseRegion.data);
        } else if (regionFilter.sigungu) {
          console.log("전달하는 시군구 areacode : ", regionFilter.sigungu);
          responseRegion = await CommonAPI.GetRegionFilter(
            regionFilter.sigungu
          );
          setEmdOpt(responseRegion.data);
          console.log("시군구 : ", responseRegion.data);
        } else if (regionFilter.sido) {
          responseRegion = await CommonAPI.GetRegionFilter(regionFilter.sido);
          setSigunguOpt(responseRegion.data);
        } else {
          console.log("No region filter selected");
          return;
        }
      } catch (error) {
        console.error("Error fetching region data: ", error);
      }
    };
    fetchRegionData();

    const newParams = new URLSearchParams();
    if (regionFilter.sido) newParams.set("sido", regionFilter.sidoName);
    if (regionFilter.sigungu)
      newParams.set("sigungu", regionFilter.sigunguName);
    if (regionFilter.emd) newParams.set("emd", regionFilter.emdName);
    if (regionFilter.ri) newParams.set("ri", regionFilter.riName);
    setSearchParams(newParams);
  }, [regionFilter]);

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

  const handleClickIcon = () => {
    setIsDropdownView(!isDropdownView);
  };

  const handleReset = () => {
    // setStartDate(null);
    // setEndDate(null);
    setIsDropdownView(false);
    setRegionFilter({
      sido: null,
      sigungu: null,
      emd: null,
      ri: null,
    });
    setSigunguOpt([]);
    setEmdOpt([]);
    setRiOpt([]);
  };

  const handleRegionChange = (key) => (e) => {
    const selectedOption = e.target.options[e.target.selectedIndex]; // 선택된 옵션
    const regionNameKey = `${key}Name`; // 예: sido -> sidoName

    setRegionFilter((prevState) => ({
      ...prevState,
      [key]: e.target.value, // 코드 값
      [regionNameKey]: selectedOption.text, // 지역 이름
    }));
  };

  const isResetVisible = searchKeyword || regionFilter.sido;

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
          <RegionSelect
            regionFilter={regionFilter}
            sidoOpt={sidoOpt}
            sigunguOpt={sigunguOpt}
            emdOpt={emdOpt}
            riOpt={riOpt}
            handleRegionChange={handleRegionChange}
          />
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
