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

  .line {
    box-sizing: border-box;
    padding: 20px 30px;
  }

  .sort-menu {
    cursor: pointer;
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
        return "#fdc264";
      case "예약완료":
        return "#2ecc71";
      case "예약거절":
        return "#f85f4e";
      case "거래완료":
        return "#3498db";
      case "예약취소":
        return "#95a5a6";
      default:
        return "#bdc3c7"; // 기본 색상 (회색)
    }
  }};
`;
export const Modal = styled.div`
  width: 650px;
  height: 600px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    color: #1b5e96;
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

    /* 좋은 리뷰 선택된 태그 색상 */
    .tag.good-review.selected {
      /* background-color: #a4d8b9; */
      border: 1px solid #a4d8b9;
      /* color: white; */
    }

    /* 나쁜 리뷰 선택된 태그 색상 */
    .tag.bad-review.selected {
      /* background-color: #ecb1ab; */
      border: 1px solid #ecb1ab;
      /* color: white; */
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
      }

      &:hover {
        opacity: 0.8;
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
