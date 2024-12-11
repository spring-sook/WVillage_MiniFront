import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLock,
  faEye,
  faEyeSlash,
  faCamera,
} from "@fortawesome/free-solid-svg-icons";
import {
  ParentContainer,
  MenuContainer,
  EditProfileContainer,
  Edit,
  InfoSection,
  BottomButtonContainer,
  ProfileBox,
} from "../../styles/EditProfileStyled";

export const EditProfile = () => {
  const [activeMenu, setActiveMenu] = useState("수정");
  const [isEditing, setIsEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [profileImage, setProfileImage] = useState(null);

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <ParentContainer>
      <MenuContainer>
        {["수정", "계좌정보", "회원탈퇴"].map((menu) => (
          <button
            key={menu}
            className={activeMenu === menu ? "active" : ""}
            onClick={() => setActiveMenu(menu)}
          >
            {menu}
          </button>
        ))}
      </MenuContainer>

      {activeMenu === "수정" && (
        <EditProfileContainer>
          <Edit>
            <InfoSection>
              <div className="info-item">
                <label>이메일:</label>
                <input type="email" defaultValue="user@example.com" disabled />
              </div>
              <div className="info-item">
                <label>이름:</label>
                <input
                  type="text"
                  defaultValue="장원영"
                  disabled={!isEditing}
                />
              </div>
              <div className="info-item">
                <label>닉네임:</label>
                <input
                  type="text"
                  defaultValue="닉네임123"
                  disabled={!isEditing}
                />
              </div>
              <div className="info-item">
                <label>전화번호:</label>
                <input
                  type="text"
                  defaultValue="010-1234-5678"
                  disabled={!isEditing}
                />
              </div>
              <div className="info-item">
                <label>비밀번호:</label>
                <div style={{ position: "relative", display: "flex" }}>
                  <FontAwesomeIcon
                    icon={faLock}
                    style={{
                      position: "absolute",
                      left: 10,
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: "#ccc",
                    }}
                  />
                  <input
                    type={showPassword ? "text" : "password"}
                    defaultValue="password123"
                    disabled={!isEditing}
                    style={{ paddingLeft: 30 }}
                  />
                  <FontAwesomeIcon
                    icon={showPassword ? faEyeSlash : faEye}
                    style={{
                      position: "absolute",
                      right: 10,
                      top: "50%",
                      transform: "translateY(-50%)",
                      cursor: "pointer",
                      color: "#007bff",
                    }}
                    onClick={() => setShowPassword(!showPassword)}
                  />
                </div>
              </div>
              <div className="info-item">
                <label>비밀번호 확인:</label>
                <div style={{ position: "relative", display: "flex" }}>
                  <FontAwesomeIcon
                    icon={faLock}
                    style={{
                      position: "absolute",
                      left: 10,
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: "#ccc",
                    }}
                  />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    defaultValue="password123"
                    disabled={!isEditing}
                    style={{ paddingLeft: 30 }}
                  />
                  <FontAwesomeIcon
                    icon={showConfirmPassword ? faEyeSlash : faEye}
                    style={{
                      position: "absolute",
                      right: 10,
                      top: "50%",
                      transform: "translateY(-50%)",
                      cursor: "pointer",
                      color: "#007bff",
                    }}
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  />
                </div>
              </div>
            </InfoSection>

            <BottomButtonContainer>
              <button onClick={toggleEditing}>
                {isEditing ? "수정 완료" : "수정"}
              </button>
            </BottomButtonContainer>
          </Edit>

          <ProfileBox>
            <div className="profile-image-container">
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="프로필"
                  className="profile-image"
                />
              ) : (
                <FontAwesomeIcon icon={faUser} className="placeholder-icon" />
              )}
              <label htmlFor="profile-upload" className="upload-label">
                <FontAwesomeIcon icon={faCamera} />
              </label>
              <input
                id="profile-upload"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                style={{ display: "none" }}
              />
            </div>
          </ProfileBox>
        </EditProfileContainer>
      )}

      {activeMenu === "계좌정보" && (
        <EditProfileContainer>
          계좌정보 탭 내용이 여기에 표시됩니다.
        </EditProfileContainer>
      )}
      {activeMenu === "회원탈퇴" && (
        <EditProfileContainer>
          회원탈퇴 탭 내용이 여기에 표시됩니다.
        </EditProfileContainer>
      )}
    </ParentContainer>
  );
};

export default EditProfile;
