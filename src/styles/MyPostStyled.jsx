import styled from "styled-components";

export const MyPostContainer = styled.div`
  width: 78%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 747px) {
    width: 100%;
  }
`;

export const Posts = styled.div`
  width: 90%;
  height: 610px;
  column-gap: 0.8%;
`;

export const PostHeader = styled.div`
  width: 90%;

  button {
    background-color: transparent;
    border: none;
    font-size: 14px;
    padding: 6px 20px;
    cursor: pointer;
  }
`;

export const PostBody = styled.div`
  width: 100%;
  max-height: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
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
