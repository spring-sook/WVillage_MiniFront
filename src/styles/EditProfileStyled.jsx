import styled from "styled-components";

export const EditProfileContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 75px auto 0 auto;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 8px;
  height: 65vh;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 30px;
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
    font-size: 14px;
    font-weight: bold;
    width: 100px;
  }

  input {
    width: 200px;
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

export const AccountContainer = styled.div`
  margin-top: 20px;
  padding: 15px;
  background-color: #f9f9f9;
  border: 1px solid #e0e0e0;
  border-radius: 10px;

  label {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 10px;
    display: block;
    color: #333;
  }

  .select-button-container {
    display: flex;
    align-items: center;
    gap: 30px;
  }

  select {
    flex: 1;
    padding: 10px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    color: #333;
    transition: border-color 0.3s ease;

    &:hover {
      border-color: #007bff;
    }
  }

  button {
    flex-shrink: 0; /* 버튼 크기 고정 */
    padding: 10px 15px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 14px;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }
  }
`;
export const BottomButtonContainer = styled.div`
  margin-top: 20px;
  text-align: center;

  button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #218838;
    }
  }
`;
