import styled from "styled-components";

export const MyResManageContainer = styled.div`
  width: 78%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ResManage = styled.div`
  width: 90%;
  height: 610px;
  justify-items: center;
`;
export const ReserveManageHeader = styled.div`
  display: flex;
  align-items: center;
  width: 97%;
  justify-content: space-between;
  margin-left: 10px;
  margin-bottom: 20px;
  font-size: 15px;

  .line {
    box-sizing: border-box;
    padding: 20px 30px;
  }

  .sort-menu {
    cursor: pointer;
    font-weight: bold;
    &:hover {
      text-decoration: underline;
      color: #1b5e96;
    }
  }
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
    
    h2 {
        margin-bottom: 20px;
    }
    p {
        margin-bottom: 20px;
    }

  .modal-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 400px;
    max-width: 90%;
      display: flex;
      flex-direction: column;
      justify-content: center;
  }

  textarea {
    width: 100%;
    height: 80px;
    margin-top: 10px;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
    display: block;
  }

    
  button {
    margin-top: 20px;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    transition: all 0.2s ease;
      

    &.confirm {
      background-color: #007bff;
      color: white;
    }

    &.cancel {
      background-color: #f0f0f0;
      color: black;
    }

    &:hover {
      opacity: 0.9;
    }
  }
`;

// 태그 스타일 정의
export const ReviewTag = styled.span`
  margin: 20px 10px;
  padding: 8px 16px;
  border-radius: 50px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s ease;

  &.good-review {
    border: 1px solid green;
  }

  &.bad-review {
    border: 1px solid red;
  }

  &.selected {
    background-color: #1b5e96;
    color: white;
    border-color: #1b5e96;
  }

  &:hover {
    opacity: 0.9;
  }
`;
export const ReservationPendingBtn = styled.div`
  display: flex;
  justify-content: center;
    gap: 20px;
  
  button {
    
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      opacity: 0.7;
    }
  }
`;
