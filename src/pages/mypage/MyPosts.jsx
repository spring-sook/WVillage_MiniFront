import { MyPostContainer, Posts } from "../../styles/MyPostStyled";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserStore";
import PostAPI from "../../api/PostAPI";
import { PostItem } from "../../components/PostItemComponent";
import { PostHeader, PostBody } from "../../styles/MyPostStyled";

export const MyPosts = () => {
  const { userInfo } = useContext(UserContext);
  const [posts, setPosts] = useState([]);
  const [order, setOrder] = useState("최신순");

  useEffect(() => {
    const fetchData = async () => {
      const response = await PostAPI.UserPostList(userInfo.email);
      const fetchedPosts = response.data;
      fetchedPosts.sort((a, b) => new Date(b.postDate) - new Date(a.postDate));
      setPosts(fetchedPosts);
      console.log(fetchedPosts);
    };
    fetchData();
  }, []);
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

  return (
    <MyPostContainer>
      <Posts>
        <PostHeader>
          <button onClick={() => setOrder("최신순")}>최신순</button>
          <span>|</span>
          <button onClick={() => setOrder("인기순")}>인기순</button>
        </PostHeader>
        <PostBody>
          {Array.isArray(posts) &&
            posts.map((post, index) => {
              return (
                <div
                  key={index}
                  className="post-item-wrapper"
                  style={{ position: "relative" }}
                >
                  <PostItem
                    thumbnail={post.postThumbnail}
                    title={post.postTitle}
                    price={post.postPrice}
                    postLocation={post.PostLocation}
                    postId={post.postId}
                    post={post}
                    width={"210px"}
                    height={"270px"}
                    postDisable={post.postDisable}
                  />
                </div>
              );
            })}
        </PostBody>
      </Posts>
    </MyPostContainer>
  );
};
