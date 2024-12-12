import React, { useState, useEffect, useContext } from "react";
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
  Modal,
} from "../../styles/EditProfileStyled";
import { UserContext } from "../../context/UserStore";
import AccountAPI from "../../api/AccountAPI";
import axios from "axios";

export const EditProfile = () => {
  const [activeMenu, setActiveMenu] = useState("수정");
  const [isEditing, setIsEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [showModal, setShowModal] = useState(false); // 모달 열기/닫기
  const [newAccount, setNewAccount] = useState({ bank: "", accountNumber: "" }); // 새 계좌 정보
  const [accounts, setAccounts] = useState([]);
  const { userInfo, updateUserPoints } = useContext(UserContext); // UserContext에서 userInfo 가져오기

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

  // 계좌 추가하기 버튼 클릭 시 모달 열기
  const handleOpenModal = () => {
    setShowModal(true);
  };

  // 계좌 추가
  const handleAddAccount = async () => {
    if (!newAccount.bank || !newAccount.accountNumber || !userInfo.email) {
      alert("은행과 계좌번호를 모두 입력하세요.");
      return;
    }

    // newAccount에 이메일을 추가
    const updatedAccount = {
      ...newAccount,
      accountEmail: userInfo.email, // 이메일을 newAccount에 할당
    };

    try {
      const success = await AccountAPI.addAccount(
        updatedAccount.accountEmail, // 이메일 포함해서 서버로 전송
        updatedAccount.bank,
        updatedAccount.accountNumber
      );
      if (success) {
        alert("계좌가 추가되었습니다.");

        // 계좌 목록 다시 불러오기
        const response = await axios.get(
          `http://localhost:8111/account/findByEmail?email=${userInfo.email}`
        );
        setAccounts(response.data); // 상태 업데이트

        setShowModal(false); // 모달 닫기
      } else {
        alert("계좌 추가 실패");
      }
    } catch (error) {
      console.error("계좌 추가 중 오류 발생:", error);
      alert("계좌 추가 중 오류가 발생했습니다.");
    }
  };

  useEffect(() => {
    // 로그인된 사용자가 있을 때 계좌 목록 요청
    if (userInfo && userInfo.email) {
      axios
        .get(
          `http://localhost:8111/account/findByEmail?email=${userInfo.email}`
        )
        .then((response) => {
          setAccounts(response.data); // 받은 계좌 목록을 상태에 저장
        })
        .catch((error) => {
          console.error("계좌 목록 조회 실패", error);
        });
    }
  }, [userInfo]); // userInfo가 변경될 때마다 실행

  return (
    <ParentContainer>
      <MenuContainer>
        {["수정", "계좌정보"].map((menu) => (
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
          <div className="EditAccount">
            <p>계좌 리스트</p>

            {accounts.map((account, index) => (
              <option key={index} value={account.accountNo}>
                {account.accountBank} - {account.accountNo}
              </option>
            ))}

            <button onClick={handleOpenModal}>계좌 추가하기</button>
            {showModal && (
              <Modal>
                <div className="modal-content">
                  <h2>계좌 추가</h2>
                  <label>은행 선택</label>
                  <select
                    value={newAccount.bank}
                    onChange={(e) =>
                      setNewAccount({ ...newAccount, bank: e.target.value })
                    }
                  >
                    <option value="">은행을 선택하세요</option>
                    <option value="은행1">은행1</option>
                    <option value="은행2">은행2</option>
                    <option value="은행3">은행3</option>
                  </select>
                  <label>계좌 번호</label>
                  <input
                    type="text"
                    placeholder="계좌 번호"
                    value={newAccount.accountNumber}
                    onChange={(e) => {
                      const value = e.target.value.replace(/[^0-9]/g, ""); // 숫자만 입력
                      setNewAccount({ ...newAccount, accountNumber: value });
                    }}
                  />
                  <div className="button-container">
                    <button onClick={handleAddAccount}>계좌 추가</button>
                    <button onClick={() => setShowModal(false)}>취소</button>
                  </div>
                </div>
              </Modal>
            )}
          </div>
        </EditProfileContainer>
      )}
    </ParentContainer>
  );
};

export default EditProfile;
