import styled from "styled-components";
import {CategorySelect} from "./CategorySelect";

const UserPostContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 0.9;
    max-width: 1250px;
    height: 600px;
    overflow: hidden;
    background-color: #686a7e;
    margin: 80px 0;
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

const PostItem = styled.div`
    width: 200px;
    height: 300px;
    margin: 20px;
    background-color: white;
`;

export const UserPostList = ({email}) => {

  const option = [
    {
      value: "물건"
    }, {
      value: "장소"
    }, {
      value: "구인"
    }
  ]

  return (
    <UserPostContainer>
      <CategorySelect options={option}/>
      <PostListContainer>
        <PostItem>12345</PostItem>

        <PostItem></PostItem>

        <PostItem></PostItem>

        <PostItem></PostItem>

        <PostItem></PostItem>

        <PostItem></PostItem>

        <PostItem></PostItem>

        <PostItem></PostItem>

        <PostItem></PostItem>

        <PostItem></PostItem>

        <PostItem></PostItem>

        <PostItem></PostItem>

        <PostItem></PostItem>
      </PostListContainer>
    </UserPostContainer>
  );
}