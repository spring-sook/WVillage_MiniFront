import styled from "styled-components";

export const MyBookmarkContainer = styled.div`
  width: 78%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 747px) {
    width: 100%;
  }
`;

export const Bookmarks = styled.div`
  width: 90%;
  height: 610px;
  display: flex;
  flex-direction: column;
  column-gap: 0.8%;
  overflow-y: auto;
`;
