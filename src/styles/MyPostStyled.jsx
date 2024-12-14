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
  @media (max-width: 747px) {
    width: 100%;
  }
`;

export const Posts = styled.div`
  width: 90%;
  height: 610px;
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

export const PostBody = styled.div`
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
