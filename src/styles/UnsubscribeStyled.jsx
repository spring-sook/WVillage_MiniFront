import styled from "styled-components";

export const ParentContainer = styled.div`
  width: 78%;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  font-family: Arial, sans-serif;
`;

export const MenuContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
  button {
    background: none;
    border: none;
    font-size: 16px;
    margin-right: 20px;
    cursor: pointer;
    color: #333;
    border-bottom: 2px solid transparent;
    transition: all 0.3s ease;
  }
  button.active {
    font-weight: bold;
    color: #007bff;
    border-bottom: 2px solid #007bff;
  }
`;

export const UnsubscribeContainer = styled.div`
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.div`
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  text-align: center;
`;

export const ProfileBox = styled.div`
  .profile-image-container {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background-color: #f0f0f0;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .placeholder-icon {
    font-size: 60px;
    color: #ccc;
  }
`;

export const Message = styled.p`
  font-size: 16px;
  color: #555;
  line-height: 1.5;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const CancelButton = styled.button`
  padding: 10px 20px;
  background-color: #ccc;
  color: #333;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #999;
  }
`;

export const DeleteButton = styled.button`
  padding: 10px 20px;
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #e60000;
  }
`;
