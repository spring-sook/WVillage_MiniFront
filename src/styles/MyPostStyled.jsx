import styled from "styled-components";

// export const UserMain = styled.div`
//   display: flex;
//   align-items: center;
// `;

export const MyPostContainer = styled.div`
  width: 78%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Posts = styled.div`
  width: 90%;
  height: 610px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  column-gap: 0.8%;
  overflow-y: auto;
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
