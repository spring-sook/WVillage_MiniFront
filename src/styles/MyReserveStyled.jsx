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
  justify-items: center;
  /* background-color: #d5e8f1; */
`;

export const ReserveHeader = styled.div`
  display: flex;
  align-items: center;
  width: 97%;
  justify-content: space-between;
  margin-left: 10px;
  margin-bottom: 10px;

  .line {
    box-sizing: border-box;
    padding: 20px 30px;
  }

  .sort-menu {
    cursor: pointer;
  }
`;

export const ReserveItemContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
`;

export const ReserveItemThumbnail = styled.div`
  width: 130px;
  height: 130px;
  margin: 10px 15px;
  background-color: #b8b2b2;
`;

export const ReserveItemInfo = styled.div`
  p {
    margin: 10px 10px;
  }

  .reserve-item-info-title {
    font-size: 20px;
    font-weight: bold;
  }

  .reserve-item-info-region {
    font-size: 14px;
  }
`;

export const ReserveState = styled.div`
  width: 120px;
  height: 60px;
  display: flex;
  position: absolute;
  right: 10px;

  background-color: ${(props) => {
    switch (props.state) {
      case "wait":
        return "#fdc264"; // 대기 상태 (노란색)
      case "accept":
        return "#2ecc71"; // 수락 상태 (초록색)
      case "deny":
        return "#f85f4e"; // 거절 상태 (빨간색)
      case "complete":
        return "#3498db"; // 완료 상태 (파란색)
      case "cancel":
        return "#95a5a6"; // 취소 상태 (회색)
      default:
        return "#bdc3c7"; // 기본 색상 (회색)
    }
  }};
`;
