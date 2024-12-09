import React, { useState } from "react";
import {
  EditProfileContainer,
  Edit,
  InfoSection,
  AccountContainer,
  BottomButtonContainer,
} from "../../styles/EditProfileStyled";

export const EditProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState("");
  const accounts = ["우리은행 - 123-456-789", "카카오뱅크 - 987-654-321"];

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  const handleOpenModal = () => {
    alert("계좌 추가 기능은 현재 구현 중입니다.");
  };

  return (
    <EditProfileContainer>
      <Edit>
        <InfoSection>
          <div className="info-item">
            <label>이메일:</label>
            {isEditing ? (
              <input type="email" defaultValue="user@example.com" />
            ) : (
              <p>user@example.com</p>
            )}
          </div>
          <div className="info-item">
            <label>이름:</label>
            {isEditing ? (
              <input
                type="text"
                defaultValue="장원영"
                placeholder="이름 수정"
              />
            ) : (
              <p>장원영</p>
            )}
          </div>
          <div className="info-item">
            <label>전화번호:</label>
            {isEditing ? (
              <input
                type="text"
                defaultValue="010-1234-5678"
                placeholder="전화번호 수정"
              />
            ) : (
              <p>010-1234-5678</p>
            )}
          </div>
          <div className="info-item">
            <label>비밀번호:</label>
            {isEditing ? (
              <input
                type="password"
                defaultValue="password123"
                placeholder="비밀번호 변경"
              />
            ) : (
              <p>********</p>
            )}
          </div>
        </InfoSection>

        <AccountContainer>
          <label>계좌 선택:</label>
          <div className="select-button-container">
            <select
              value={selectedAccount}
              onChange={(e) => setSelectedAccount(e.target.value)}
            >
              <option value="">계좌를 선택하세요</option>
              {accounts.map((account, index) => (
                <option key={index} value={account}>
                  {account}
                </option>
              ))}
            </select>
            <button onClick={handleOpenModal}>계좌 추가하기</button>
          </div>
        </AccountContainer>

        <BottomButtonContainer>
          <button onClick={toggleEditing}>{isEditing ? "취소" : "수정"}</button>
        </BottomButtonContainer>
      </Edit>
    </EditProfileContainer>
  );
};

export default EditProfile;
