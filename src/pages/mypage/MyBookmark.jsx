import { MyBookmarkContainer, Bookmarks } from "../../styles/MyBookmarkStyled";
import PostAPI from "../../api/PostAPI";
import { UserContext } from "../../context/UserStore";
import { useContext, useEffect, useState } from "react";
import { PostItem } from "../../components/PostItemComponent";
import { PostHeader, PostBody } from "../../styles/MyPostStyled";

export const MyBookmark = () => {
  const { userInfo } = useContext(UserContext);
  const [posts, setPosts] = useState([]);
  const [order, setOrder] = useState("최신순");

  useEffect(() => {
    const fetchData = async () => {
      const response = await PostAPI.BookmarkedPostList(userInfo.email);
      const fetchedPosts = response.data;
      fetchedPosts.sort((a, b) => new Date(b.postDate) - new Date(a.postDate));
      setPosts(fetchedPosts);
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
    <MyBookmarkContainer>
      <Bookmarks>
        <PostHeader>
          <button onClick={() => setOrder("최신순")}>최신순</button>
          <span>|</span>
          <button onClick={() => setOrder("인기순")}>인기순</button>
        </PostHeader>
        <PostBody>
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
                width={"210px"}
                height={"270px"}
                postDisable={post.postDisable}
              />
            ))}
        </PostBody>
      </Bookmarks>
    </MyBookmarkContainer>
  );
};
