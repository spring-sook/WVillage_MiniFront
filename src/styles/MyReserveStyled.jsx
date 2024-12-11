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
  font-size: 14px;

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
  width: 600px;
  height: 500px;
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
        background-color: #007bff;
        color: white;
        border-color: #007bff;
      }

      &:hover {
        background-color: #f0f0f0;
      }
    }
  }

  .review-tags {
    display: flex;
    flex-wrap: wrap;
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
      background-color: #007bff;
      color: white;
      border-color: #007bff;
    }

    .review-tag:hover {
      background-color: #f0f0f0;
    }
  }

  .selected-tags-list {
    margin-top: 20px;

    h3 {
      font-size: 18px;
      margin-bottom: 10px;
    }

    ul {
      list-style-type: none;
      padding: 0;

      li {
        margin: 5px 0;
      }
    }
  }

  .modal-buttons {
    margin-top: 20px;
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
        background-color: #007bff;
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
  .selected-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 20px;
  }

  .tag {
    background-color: #f0f0f0;
    padding: 10px;
    border-radius: 20px;
    font-size: 14px;
    color: #333;
    cursor: pointer;
    border: 1px solid #ccc;
  }
`;
