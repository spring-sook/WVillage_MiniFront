import styled from "styled-components";
import { CategorySelect } from "./CategorySelect";
import { PostItem } from "./PostItemComponent";
import { useEffect, useState } from "react";
import PostAPI from "../api/PostAPI";

const UserPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 0.9;
  max-width: 75%;
  height: 600px;
  overflow: hidden;
  /* background-color: #686a7e; */
  margin: 80px 0;
  @media (max-width: 747px) {
    max-width: 100%;
  }
`;

const PostListContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  overflow-x: hidden;
  overflow-y: scroll;
  flex-grow: 1;
  flex-wrap: wrap;
  margin-left: 20px;

  /* 전체 스크롤바 */
  &::-webkit-scrollbar {
    width: 12px; /* 세로 스크롤바의 너비 */
    height: 12px; /* 가로 스크롤바의 높이 */
  }

  /* 스크롤바의 트랙 */

  &::-webkit-scrollbar-track {
    background: #f1f1f1; /* 트랙의 배경색 */
    border-radius: 10px; /* 트랙의 모서리 둥글게 */
  }

  /* 드래그 가능한 부분 */

  &::-webkit-scrollbar-thumb {
    background: #3b80cd; /* 드래그 가능한 부분의 색상 */
    border-radius: 10px; /* 드래그 부분의 모서리 둥글게 */
  }

  /* 드래그 가능한 부분에 마우스를 올렸을 때 */

  &::-webkit-scrollbar-thumb:hover {
    background: #555; /* 마우스를 올렸을 때의 색상 */
  }
`;

const UserPostHeader = styled.div`
  width: 100%;

  button {
    background-color: transparent;
    border: none;
    font-size: 14px;
    padding: 6px 20px;
    cursor: pointer;
  }
`;

const UserPostBody = styled.div`
  width: 100%;
  max-height: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;

  .disablePost {
    width: 91%;
    height: 75%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    position: absolute;
    top: 3%;
    left: 5%;
  }
`;

export const PostListComponent = ({ email }) => {
  const [posts, setPosts] = useState([]);
  const [order, setOrder] = useState("최신순");
  const option = [
    {
      value: "물건",
    },
    {
      value: "장소",
    },
    {
      value: "구직",
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      const res = await PostAPI.UserPostList(email);
      const fetchedPosts = res.data;
      fetchedPosts.sort((a, b) => new Date(b.postDate) - new Date(a.postDate));
      setPosts(fetchedPosts);
    };
    fetchData();
  });

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
    <UserPostContainer>
      <UserPostHeader>
        <button onClick={() => setOrder("최신순")}>최신순</button>
        <span>|</span>
        <button onClick={() => setOrder("인기순")}>인기순</button>
        {/* <CategorySelect options={option} /> */}
      </UserPostHeader>
      <PostListContainer>
        <UserPostBody>
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
                    margin={"23px"}
                    postDisable={post.postDisable}
                  />
                </div>
              );
            })}
        </UserPostBody>
      </PostListContainer>
    </UserPostContainer>
  );
};

export const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 93%;
  overflow-y: auto;
  &::-webkit-scrollbar {
    height: 8px; /* 스크롤바 높이 (x축에서는 높이) */
  }

  &::-webkit-scrollbar-thumb {
    background: #1b5e96; /* 스크롤바 색상 */
    border-radius: 4px; /* 스크롤바 둥근 모서리 */
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555; /* 스크롤바 hover 시 색상 */
  }

  &::-webkit-scrollbar-track {
    background: #f4f4f4; /* 스크롤바 트랙 배경색 */
    border-radius: 4px; /* 트랙 둥근 모서리 */
  }
`;
