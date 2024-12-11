import { MyBookmarkContainer, Bookmarks } from "../../styles/MyBookmarkStyled";
import PostAPI from "../../api/PostAPI";
import { UserContext } from "../../context/UserStore";
import { useContext, useEffect, useState } from "react";
import { PostItem } from "../../components/PostItemComponent";
import { PostHeader, PostBody } from "../../styles/MyPostStyled";

export const MyBookmark = () => {
  const { userInfo } = useContext(UserContext);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await PostAPI.BookmarkedPostList(userInfo.email);
      console.log(response);
      setPosts(response.data);
    };
    fetchData();
  }, []);

  return (
    <MyBookmarkContainer>
      <Bookmarks>
        <PostHeader>
          <button>최신순</button>
          <span>|</span>
          <button>인기순</button>
        </PostHeader>
        <PostBody>
          {Array.isArray(posts) &&
            posts.map((post, index) => (
              <PostItem
                key={index}
                thumbnail={post.postThumbnail}
                title={post.postTitle}
                price={post.postPrice}
                region={post.postRegion}
                postId={post.postId}
                post={post}
                width={"210px"}
                height={"270px"}
              />
            ))}
        </PostBody>
      </Bookmarks>
    </MyBookmarkContainer>
  );
};
