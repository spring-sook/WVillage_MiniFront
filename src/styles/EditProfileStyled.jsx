import styled from "styled-components";

export const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;

  .profile-image-container {
    position: relative;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: #f0f0f0;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .profile-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .placeholder-icon {
    font-size: 60px;
    color: #ccc;
  }

  .upload-label {
    position: absolute;
    bottom: 5px;
    right: 5px;
    background-color: #007bff;
    color: white;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .upload-label:hover {
    background-color: #0056b3;
  }
`;

export const ParentContainer = styled.div`
  width: 78%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MenuContainer = styled.div`
  display: flex;
  justify-content: left;
  width: 78%;
  margin-top: 10px;
  padding: 10px 0;

  button {
    background: none;
    border: none;
    font-size: 15px;
    margin: 0 20px;
    padding: 10px 15px;
    cursor: pointer;
    color: #333;
    border-bottom: 2px solid transparent;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: #007bff;
    }
  }

  button.active {
    font-weight: bold;
    color: #007bff;
    border-bottom: 2px solid #007bff;
  }
`;
export const EditProfileContainer = styled.div`
  width: 78%;
  margin: 30px auto;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 8px;
  height: 68%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 30px;
  gap: 20px;
  font-family: Arial, sans-serif;
`;

export const Edit = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  .info-item {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  label {
    font-size: 12px;
    font-weight: bold;
    width: 100px;
  }

  input {
    width: 150px;
    padding: 10px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  p {
    font-size: 14px;
    color: #333;
    margin-top: 5px;
  }
`;

export const BottomButtonContainer = styled.div`
  margin-top: 60px;
  text-align: center;

  button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #95bfe5;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #145a86;
    }
  }
`;
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999; /* 다른 요소보다 위에 배치 */

  display: flex;
  justify-content: center;
  align-items: center;

  /* 배경 페이드인 효과만 적용 */
  animation: fadeBackground 0.3s ease;

  @keyframes fadeBackground {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    width: 500px;
    height: 400px;
    text-align: center;

    /* 모달 내용에만 확대 애니메이션 적용 */
    animation: scaleUp 0.3s ease;

    @keyframes scaleUp {
      from {
        transform: scale(0.8);
      }
      to {
        transform: scale(1);
      }
    }

    h2 {
      margin-top: 10px;
      margin-bottom: 30px;
    }

    label {
      display: block;
      margin-bottom: 10px;
      font-size: 16px;
    }

    input,
    select {
      width: 100%;
      padding: 10px;
      margin-bottom: 20px;
      border-radius: 5px;
      border: 1px solid #ccc;
    }

    .button-container {
      margin-top: 10px;
      display: flex;
      flex-direction: column; /* 세로 정렬 */
      align-items: center; /* 가운데 정렬 */

      button {
        width: 80%;
        padding: 12px;
        background-color: #1b5e96;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s;
        margin-top: 10px;

        &:hover {
          background-color: #145a86;
        }
      }

      button:nth-child(2) {
        background-color: #ccc;
        margin-top: 5px;

        &:hover {
          background-color: #999;
        }
      }
    }
  }
`;
