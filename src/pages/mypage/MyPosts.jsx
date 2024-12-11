import { MyPostContainer, Posts } from "../../styles/MyPostStyled";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserStore";
import PostAPI from "../../api/PostAPI";
import { PostItem } from "../../components/PostItemComponent";
import { PostHeader, PostBody } from "../../styles/MyPostStyled";

export const MyPosts = () => {
  const { userInfo } = useContext(UserContext);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await PostAPI.UserPostList(userInfo.email);
      setPosts(response.data);
    };
    fetchData();
  }, []);
  return (
    <MyPostContainer>
      <Posts>
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
                region={post.region}
                postId={post.postId}
                post={post}
                width={"210px"}
                height={"270px"}
              />
            ))}
        </PostBody>
      </Posts>
    </MyPostContainer>
  );
};
