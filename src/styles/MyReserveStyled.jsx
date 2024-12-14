import styled from "styled-components";

export const MyReserveContainer = styled.div`
  width: 78%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 747px) {
    width: 100%;
  }
`;

export const Reserves = styled.div`
  width: 90%;
  height: 610px;
  justify-items: center;
`;

export const ReserveHeader = styled.div`
  display: flex;
  align-items: center;
  width: 97%;
  justify-content: space-between;
  margin-left: 10px;
  margin-bottom: 20px;
  font-size: 15px;
  font-weight: bold;
  @media (max-width: 747px) {
    .sort-menu {
      font-size: 10px;
    }
  }
  .line {
    box-sizing: border-box;
    padding: 20px 30px;
  }
  .sort-menu.disabled {
    text-decoration: none;
    color: black;
  }

  .sort-menu {
    cursor: pointer;
    font-weight: bold;
    text-decoration: underline;
    color: #3c8dbc;
    &:hover {
      text-decoration: underline;
      color: #1b5e96;
    }
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
  width: 100px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  position: absolute;
  right: 10px;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => {
    switch (props.state) {
      case "예약대기":
        return "#f8d294";
      case "예약완료":
        return "#66e299";
      case "예약거절":
        return "#f07e72";
      case "거래완료":
        return "#73bbeb";
      case "예약취소":
        return "#dac2e0";
      default:
        return "#bdc3c7"; // 기본 색상 (회색)
    }
  }};
`;
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  .modal-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 650px;
    max-width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h2 {
    color: #1b5e96;
    margin-bottom: 30px;
  }
  p {
    margin: 5px;
    font-size: 12px;
  }

  .modal-content {
    text-align: center;
  }

  .review-type-buttons {
    margin-top: 20px;

    button {
      margin: 0 10px;
      padding: 10px 20px;
      border: 1px solid #ccc;
      border-radius: 20px;
      cursor: pointer;
      transition: all 0.3s ease;

      &.selected {
        background-color: #1b5e96;
        color: white;
        border-color: #1b5e96;
      }

      &:hover {
        opacity: 0.7;
      }
    }
  }

  .review-tags {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    margin: 20px 0;

    .review-tag {
      padding: 10px 15px;
      border: 1px solid #ccc;
      border-radius: 20px;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .review-tag.selected {
      background-color: #95bfe5;
      color: black;
      border-color: #95bfe5;
    }

    .review-tag:hover {
      opacity: 0.7;
    }
  }

  .selected-tags-list {
    h3 {
      margin-top: 30px;
      margin-bottom: 20px;
      font-size: 18px;
    }
    .selected-tags {
      display: flex;
      justify-content: center;
      gap: 10px;
      flex-wrap: wrap;
    }
    .tag {
      padding: 10px 15px;
      border-radius: 20px;
      font-size: 14px;
      color: #333;
      cursor: pointer;
      border: 1px solid #ccc;
      transition: all 0.3s ease;
    }
    .selected-tags .tag:hover {
      opacity: 0.7; /* 투명도 설정 */
    }

    .tag.good-review.selected {
      border: 1px solid #a4d8b9;
    }

    .tag.bad-review.selected {
      border: 1px solid #ecb1ab;
    }
  }

  .modal-buttons {
    margin-top: 50px;
    display: flex;
    justify-content: center;
    gap: 20px;

    button {
      padding: 10px 20px;
      border-radius: 10px;
      border: 1px solid transparent;
      cursor: pointer;
      transition: all 0.3s ease;
      &:first-child {
        background-color: #1b5e96;
        color: white;
      }
      &:last-child {
        background-color: #f0f0f0;
        &:hover {
          background-color: #d6d6d6;
        }
      }

      &:hover {
        opacity: 0.8;
      }
      &:disabled {
        background-color: #d3d3d3; /* 회색 배경 */
        color: #a0a0a0; /* 회색 글씨 */
        cursor: default; /* 커서 비활성화 */
        opacity: 0.6; /* 흐리게 */
      }
    }
  }
`;
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 반투명한 회색 */
  z-index: 998; /* Modal보다 낮은 z-index */
`;
