import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  background-color: rgba(255, 77, 79, 0.8);
  color: white;
  border: none;
  height: 35px;
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 15px;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.2s ease;

  &:hover {
    background-color: rgba(255, 120, 117, 0.7);
  }

  &:focus {
    outline: none;
  }
  &:active {
    background-color: #ff2a2a;
  }
`;

export const ReportBtn = () => {
  return <StyledButton>신고하기</StyledButton>;
};
