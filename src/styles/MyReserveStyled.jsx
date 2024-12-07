import styled from "styled-components";

export const MyReserveContainer = styled.div`
  width: 78%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Reserves = styled.div`
  width: 90%;
  height: 610px;
  background-color: #d5e8f1;
`;

export const ReserveHeader = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  margin-left: 30px;

  .line {
    box-sizing: border-box;
    padding: 20px 30px;
  }

  .sort-menu {
    cursor: pointer;
  }
`;
