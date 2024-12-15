import styled from "styled-components";

export const DeleteButtonContainer = styled.div`
  position: absolute;
  bottom: 35px; /* EditProfileContainer의 하단 */
  right: 20px; /* EditProfileContainer의 오른쪽 끝 */

  button {
    background-color: #ffffff;
    color: #000000;
    border: none;
    border-radius: 5px;
    padding: 10px 13px;
    font-size: 12px;
    cursor: pointer;

    &:hover {
      opacity: 0.3;
    }
  }
`;

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
    border-radius: 50%;
    object-fit: cover;
    overflow: hidden;
  }

  .placeholder-icon {
    font-size: 60px;
    color: #ccc;
  }

  .upload-label {
    position: absolute;
    bottom: 10px;
    right: 10px;
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
  width: 100%;
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
  position: relative;
  width: 90%;
  margin: 10px auto;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 30px;
  gap: 20px;
  font-family: Arial, sans-serif;
`;

export const Edit = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

export const InfoSection = styled.div`
  .form-container {
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%; /* 전체 너비 */
    max-width: 600px; /* 최대 너비 제한 */
    margin: 0 auto; /* 가운데 정렬 */
  }

  .info-item {
    display: flex;
    align-items: center; /* 수직 정렬 */
    gap: 10px; /* 레이블과 입력창 사이 간격 */
    width: 100%;

    label {
      font-size: 14px;
      font-weight: bold;
      min-width: 100px; /* 레이블 고정 너비 */
      text-align: left; /* 텍스트 왼쪽 정렬 */
    }

    input {
      flex: 1; /* 입력창이 남은 공간을 차지 */
      height: 40px;
      padding: 0 10px;
      font-size: 14px;
      border: 1px solid #ccc;
      border-radius: 5px;
      background-color: #fff;

      &:focus {
        border-color: #007bff; /* 포커스 테두리 */
        box-shadow: 0 0 5px rgba(0, 123, 255, 0.5); /* 포커스 그림자 */
        outline: none;
      }
    }
    .select-region {
      margin-right: 10px;
      height: 30px;
      width: 150px;
      border: 1px solid #1b5e96;
      border-radius: 50px;
    }
  }

  .password-container {
    position: relative;
    flex: 1;

    input {
      width: 100%;
      padding-right: 40px;
    }

    .toggle-visibility {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
      font-size: 18px;
      color: #007bff;

      &:hover {
        color: #0056b3;
      }
    }
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

// kh account profile 수정----------------------------

export const EditAccount = styled.div`
  padding: 174px;
  width: 100%;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid #ddd;

  p {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 50px;
    text-align: center;
    color: #1b5e96;
  }

  .account-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background: #ffffff;

    &:hover {
      background-color: #f4f8ff;
      border-color: #007bff;
    }

    span {
      font-size: 100px;
      color: #333;
    }

    button {
      background-color: #f44336;
      color: white;
      border: none;
      border-radius: 5px;
      padding: 5px 10px;
      cursor: pointer;

      &:hover {
        background-color: #d32f2f;
      }
    }
  }

  button.addaccount {
    margin-top: 40px;
    width: 200px;
    height: 60px;
    background-color: #1b5e96;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    display: block;
    margin: 0 auto;

    &:hover {
      background-color: #0056b3;
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
      flex-direction: column;
      align-items: center;

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
export const DeleteAccount = styled.div`
  padding: 20px;
  width: 100%;
  height: 100%;
  background-color: #fff9f9;
  border: 1px solid #f44336;
  border-radius: 8px;

  p {
    font-size: 18px;
    font-weight: bold;
    color: #d32f2f;
    margin-bottom: 15px;
  }

  .delete-description {
    font-size: 14px;
    color: #555;
    margin-bottom: 20px;
    line-height: 1.6;
  }

  .delete-button {
    width: 100%;
    padding: 12px;
    background-color: #f44336;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
    font-size: 16px;

    &:hover {
      background-color: #d32f2f;
    }
  }
`;
export const DeleteAccountContainer = styled.div`
  padding: 171px;
  width: 100%;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid #ddd;

  p {
    font-size: 18px;
    text-align: center;
    font-weight: bold;
    color: #d32f2f;
    margin-bottom: 30px;
  }

  .delete-description {
    font-size: 14px;
    color: #555;
    margin-bottom: 20px;
    line-height: 1.6;
  }

  .delete-button {
    display: inline-block;
    width: auto;
    padding: 12px 30px;
    background-color: #f44336;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    text-align: center;

    &:hover {
      background-color: #d32f2f;
    }
  }
`;

export const DeleteModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;

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
    width: 400px;
    height: 180px;
    text-align: center;

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
      margin-bottom: 20px;
    }

    .button-container {
      display: flex;
      justify-content: space-between;

      button {
        margin-top: 25px;
        width: 45%;
        padding: 10px;
        background-color: #1b5e96;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
          opacity: 0.3;
        }
      }

      button:nth-child(2) {
        background-color: #ccc;

        &:hover {
          background-color: #999;
        }
      }
    }
  }
`;
// kh edit profile 수정----------------------------
export const Region = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  max-width: 600px;
  margin: 0 auto;

  .select-region {
    margin-right: 10px;
    height: 30px;
    width: 150px;
    border: 1px solid #1b5e96;
    border-radius: 50px;
  }
  p {
    font-size: 15px;
    margin-right: 20px;
    font-weight: bold;
    min-width: 100px;
    text-align: right;
    padding: 5px;
  }
  .region-select {
    flex: 1;
  }
`;
